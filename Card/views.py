from django.http import JsonResponse
from django_filters import rest_framework as filters
from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet

from Card.filter import CardFilter, RelationFilter, ReviewFilter, SearchCardFilter, TagFilter, ToDoFilter
from Card.models import Card, Relation, Review, Tag, ToDo
from Card.serializers import CardSerializer, RelationSerializer, ReviewSerializer, TagSerializer, ToDoSerializer


class CardViewSet(ModelViewSet):
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = CardFilter
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Card.objects.all()
    serializer_class = CardSerializer


    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['is_root'] = self.request.query_params.get('is_root', False)
        return context


class RelationViewSet(ModelViewSet):
    queryset = Relation.objects.all()
    serializer_class = RelationSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    filterset_class = RelationFilter


class TagViewSet(ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    filterset_class = TagFilter

class ToDoViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ToDoFilter
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

class ReviewViewSet(ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    filterset_class = ReviewFilter

def search_cards(request):
    filter = SearchCardFilter(request.GET, queryset=Card.objects.all())
    results = filter.qs.values('id', 'title')
    simplified_results = [
        {'id': item['id'], 'title': item['title']}
        for item in results
    ]
    return JsonResponse(simplified_results, safe=False)
