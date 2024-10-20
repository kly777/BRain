from django.contrib import admin

from .models import Card, Relation, Tag, Review, ToDo


class RelationAdmin(admin.ModelAdmin):
    list_display = ('id', 'parent', 'child', 'type')


class CardAdmin(admin.ModelAdmin):

    list_display = ('id', 'title', 'tags', 'create_time',
                    'update_time')
    def tags(self, obj):
        return " , ".join([tag.tag.title for tag in Tag.objects.filter(card=obj)])

class ReviewAdmin(admin.ModelAdmin):
    list_display = ['id', 'card', 'card_content','time','state']
    def card_content(self, obj):
        return obj.card.content if obj.card else ''
    card_content.short_description = 'Card Content'


class ToDoAdmin(admin.ModelAdmin):
    list_display = ('id', 'card', 'state', 'start', 'end')


class TagAdmin(admin.ModelAdmin):
    list_display = ('id', 'card', 'tag')


admin.site.register(Card, CardAdmin)

admin.site.register(Relation, RelationAdmin)
admin.site.register(Tag, TagAdmin)
admin.site.register(Review, ReviewAdmin)
admin.site.register(ToDo, ToDoAdmin)
