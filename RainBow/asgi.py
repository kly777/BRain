"""
ASGI config for RainBow project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/howto/deployment/asgi/

RainBow 项目的 ASGI 配置。

它将 ASGI 可调用公开为名为“application”的模块级变量。

有关此文件的更多信息，请参见
https://docs.djangoproject.com/en/5.0/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'RainBow.settings')

application = get_asgi_application()
