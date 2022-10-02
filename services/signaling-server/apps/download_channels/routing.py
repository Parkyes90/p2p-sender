from django.urls import re_path

from .consumers import DownloadChannelConsumer

websocket_urlpatterns = [
    re_path(
        r"ws/download-channels/(?P<download_channel_id>\d+)/$",
        DownloadChannelConsumer.as_asgi(),
    ),
]
