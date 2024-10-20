from django.utils import timezone
from rest_framework import serializers

from .models import Card, Relation, Review, Tag, ToDo


class RelationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Relation
        fields = ('parent', 'child', 'type', 'description', 'priority')


class EasyRelationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Relation
        fields = ('id', 'type', 'description', 'priority', 'card')


class EasyCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ('id', 'title', 'priority')


class ParentSerializer(EasyRelationSerializer):
    card = EasyCardSerializer(source='parent')


class ChildSerializer(EasyRelationSerializer):
    card = EasyCardSerializer(source='child')


class EasyTagSerializer(serializers.ModelSerializer):
    tag = EasyCardSerializer()
    class Meta:
        model = Tag
        fields = ['id', 'tag', 'priority']


class TagSerializer(serializers.ModelSerializer):
    tag = serializers.PrimaryKeyRelatedField(queryset=Card.objects.all())
    card = serializers.PrimaryKeyRelatedField(queryset=Card.objects.all())

    class Meta:
        model = Tag
        fields = ['id', 'tag', 'card', 'priority']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['tag'] = {
            'id': instance.tag.id,
            'title': instance.tag.title
        }
        representation['card'] = {
            'id': instance.card.id,
            'title': instance.card.title
        }
        return representation


class CardSerializer(serializers.ModelSerializer):
    relation = serializers.SerializerMethodField()
    tags = EasyTagSerializer(many=True, read_only=True, source='cards')

    class Meta:
        model = Card
        fields = [
            'id', 'title', 'content', 'relation', 'create_time', 'update_time', 'tags', 'priority']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if self.context.get('is_root', False):
            self.fields.pop('content', None)
            self.fields.pop('relation', None)

    def get_relation(self, obj):
        if self.context.get('is_root') and str(self.context['is_root']).lower() == 'true':
            return None
        return {
            'parents': ParentSerializer(obj.parents.all(), many=True).data,
            'children': ChildSerializer(obj.children.all(), many=True).data
        }


class EasyToDoSerializer(serializers.ModelSerializer):
    start = serializers.DateTimeField(read_only=True)
    end = serializers.DateTimeField(read_only=True)

    class Meta:
        model = ToDo
        fields = ['id', 'start', 'end', 'priority']



class ToDoSerializer(serializers.ModelSerializer):
    card = serializers.PrimaryKeyRelatedField(queryset=Card.objects.all())
    start = serializers.DateTimeField(allow_null=True,required=False)
    end = serializers.DateTimeField(allow_null=True,required=False)

    class Meta:
        model = ToDo
        fields = ['id', 'card', 'priority', 'state', 'full_time', 'start', 'end']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['card'] = CardSerializer(instance.card).data
        return representation



class ReviewSerializer(serializers.ModelSerializer):
    card = EasyCardSerializer()

    class Meta:
        model = Review
        fields = ['id',  'card', 'state']
