from channels.testing import WebsocketCommunicator
from config.asgi import application
from django.test import TransactionTestCase


class AppliesConsumerTestCase(TransactionTestCase):
    def setUp(self) -> None:
        self.url = f"/ws/download-channels/10/"
        self.headers = [(b"origin", b"ws://localhost")]

    async def test_with_valid_user(self):
        """유효한 유저의 요청은 승인된다."""
        communicator = WebsocketCommunicator(application, self.url, self.headers)
        connected, _ = await communicator.connect()
        self.assertTrue(connected)
        await communicator.send_json_to({"type": "entrance", "message": "entrance"})
        message = await communicator.receive_json_from()
        self.assertEqual(message["type"], "entrance")
        await communicator.disconnect()
