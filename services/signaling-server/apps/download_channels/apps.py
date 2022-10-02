from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class DownloadChannelsConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "apps.download_channels"
    label_plural = "download_channels"
    verbose_name = _("다운로드 채널")
    verbose_name_plural = _("다운로드 채널 목록")
