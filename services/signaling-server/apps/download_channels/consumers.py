import json

from channels.generic.websocket import AsyncWebsocketConsumer


class DownloadChannelConsumer(AsyncWebsocketConsumer):
    def __init__(self, *args, **kwargs):
        super().__init__(self, *args, **kwargs)
        self.group_name = None
        self.download_channel_id = None

    async def connect(self):
        self.download_channel_id = int(
            self.scope["url_route"]["kwargs"]["download_channel_id"]
        )
        self.group_name = f"download-channel-{self.download_channel_id}"
        await self.channel_layer.group_add(self.group_name, self.channel_name)
        await self.accept()

    async def receive(self, text_data=None, bytes_data=None):
        try:
            serialized_data = json.loads(text_data)
            event = getattr(self, serialized_data["type"], None)
            if event:
                await event(serialized_data)
        except json.decoder.JSONDecodeError:
            pass

    async def offer(self, event):
        await self.send(text_data=json.dumps(event))

    async def disconnect(self, code):
        await self.channel_layer.group_discard(self.group_name, self.channel_name)

    async def entrance(self, event):
        message = event["message"]
        await self.send(
            text_data=json.dumps({"type": self.entrance.__name__, "message": message})
        )
