from django.db.models import Q
from django_filters import rest_framework as filters

from Card.models import Card, Relation, Review, Tag, ToDo


class CardFilter(filters.FilterSet):
    is_root = filters.BooleanFilter(method='filter_is_root', label='是否为根节点')

    class Meta:
        model = Card
        fields = ['title', 'parents', 'children', 'content', 'tags', 'is_root']

    def filter_is_root(self, queryset, name, value):
        if value is True:
            return queryset.filter(parents__isnull=True)
        else:
            return queryset


class CardTagFilter(filters.FilterSet):
    tag = filters.CharFilter(method='filter_tags', label='标签')

    class Meta:
        fields = ['tag']

    def filter_tags(self, queryset, name, value):
        return queryset.filter(card__cards__tag__title__icontains=value)


class SearchCardFilter(filters.FilterSet):
    q = filters.CharFilter(method='multi_word_search', label='搜索')

    class Meta:
        model = Card
        fields = ['q']

    def multi_word_search(self, queryset, name, value):
        if not value:
            return queryset

        words = value.split()
        query = Q()

        for word in words:
            if word.startswith('#'):
                tag_name = word[1:]
                query &= Q(cards__tag__title__iexact=tag_name)

            else:
                word_query = Q(title__icontains=word) | Q(
                    content__icontains=word)
                query &= word_query

        queryset = queryset.filter(query)

        return queryset

    def filter_queryset(self, queryset):
        queryset = super().filter_queryset(queryset)
        q = self.form.cleaned_data.get('q')

        if q:
            queryset = self.multi_word_search(queryset, 'q', q)

        return queryset.distinct()


class TagFilter(filters.FilterSet):
    class Meta:
        model = Tag
        fields = ['tag', 'card']


class ToDoFilter(CardTagFilter):
    class Meta:
        model = ToDo
        fields = ['card', 'state', 'start', 'end']


class ReviewFilter(CardTagFilter):
    class Meta:
        model = Review
        fields = ['card', 'state', 'time']


class RelationFilter(CardTagFilter):
    class Meta:
        model = Relation
        fields = ['parent', 'child', 'type']
