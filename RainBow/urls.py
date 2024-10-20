"""

URL configuration for RainBow project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))


`urlpatterns` 列表将 URL 路由到视图。欲了解更多信息，请参阅：
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
例子：
功能视图
    1.添加导入：from my_app导入视图
    2.在urlpatterns中添加URL：path('',views.home,name='home')
基于类的视图
    1.添加导入：from other_app.views import Home
    2. 在 urlpatterns 中添加 URL：path('', Home.as_view(), name='home')
包括另一个 URLconf
    1.导入include()函数：from django.urls import include,path
    2. 在 urlpatterns 中添加 URL：path('blog/', include('blog.urls'))
"""



from rest_framework import routers
from django.contrib import admin
from django.urls import include, path

from Auth import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/register/', views.Register.as_view()),
    path('api/login/', views.Login.as_view()),
    path('api/logout/', views.Logout.as_view()),
    path('auth/', include('rest_framework.urls')),  # 用户登录页面
    path('api/', include('Card.urls')),
]
