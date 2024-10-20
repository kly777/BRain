from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import CardViewSet, RelationViewSet, ReviewViewSet, TagViewSet, ToDoViewSet, search_cards

# 创建一个默认路由器实例
router = DefaultRouter()
# 注册视图集
router.register(r'relation', RelationViewSet, basename='Relation')

router.register(r'review', ReviewViewSet, basename='Review')

router.register(r'tag', TagViewSet, basename='Tag')

router.register(r'todo', ToDoViewSet, basename='ToDo')

router.register(r'card', CardViewSet, basename='Card')

urlpatterns = [
    path('search/', search_cards, name='search_cards'),
    path('', include(router.urls)),
]


