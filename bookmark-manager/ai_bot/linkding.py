
import httpx
from utils import get_env

# Lấy biến môi trường và in ra để debug
LD_HOST = get_env("LINKDING_HOST", "http://linkding:9090")
LD_TOKEN = get_env("LINKDING_TOKEN")
print(f"[DEBUG] LINKDING_HOST = {LD_HOST}")
print(f"[DEBUG] LINKDING_TOKEN = {LD_TOKEN[:6] + '...' if LD_TOKEN else None}")

if not LD_HOST or not LD_TOKEN:
    raise RuntimeError("Thiếu biến môi trường LINKDING_HOST hoặc LINKDING_TOKEN. Kiểm tra lại file .env và docker-compose.yml!")

HEADERS = {"Authorization": f"Token {LD_TOKEN}"}

async def get_bookmarks():
    async with httpx.AsyncClient() as client:
        r = await client.get(f"{LD_HOST}/api/bookmarks/", headers=HEADERS)
        return r.json().get("results", [])

async def update_bookmark(bookmark_id, patch_data):
    async with httpx.AsyncClient() as client:
        await client.patch(f"{LD_HOST}/api/bookmarks/{bookmark_id}/", headers=HEADERS, json=patch_data)
