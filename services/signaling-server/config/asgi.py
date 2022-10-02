"""
ASGI config for config project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/asgi/
"""

import os

import django
from channels.auth import AuthMiddlewareStack

django.setup()

from apps.download_channels import routing as download_channels_routing
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.security.websocket import AllowedHostsOriginValidator
from django.contrib.staticfiles.handlers import ASGIStaticFilesHandler
from django.core.asgi import get_asgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings.base")

django_asgi_app = ASGIStaticFilesHandler(get_asgi_application())

application = ProtocolTypeRouter(
    {
        "http": django_asgi_app,
        "websocket": (
            AllowedHostsOriginValidator(
                (
                    AuthMiddlewareStack(
                        URLRouter(download_channels_routing.websocket_urlpatterns)
                    )
                )
            )
        ),
    }
)
