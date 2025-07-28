# linkding.py (Phiên bản đã sửa)
import os
import requests

BASE_URL = "http://linkding:9090"
API_TOKEN = os.getenv("LINKDING_API_TOKEN")

if not API_TOKEN:
    raise RuntimeError("LINKDING_API_TOKEN is not set. Check your environment or .env file.")

HEADERS = {
    "Authorization": f"Token {API_TOKEN}",
    "Content-Type": "application/json"
}

# ... hàm get_bookmarks giữ nguyên ...

def get_bookmarks():
    # ... giữ nguyên code của bạn ...
    import time
    for i in range(10):
        try:
            res = requests.get(f"{BASE_URL}/api/bookmarks/?limit=1000", headers=HEADERS) # Thêm limit để lấy nhiều hơn
            res.raise_for_status()
            data = res.json()
            bookmarks = data.get("results", [])
            # Lấy các bookmark chưa có description HOẶC chưa có tags
            return [bm for bm in bookmarks if not bm.get("description") or not bm.get("tag_names")]
        except requests.exceptions.ConnectionError as e:
            print(f"[Retry {i+1}/10] Linkding not ready, waiting...")
            time.sleep(3)
        except Exception as e:
            print("Error getting bookmarks:", e)
            break
    return []


def update_bookmark(bookmark_id, data):
    # API của Linkding dùng `tag_names` (một list of strings) để cập nhật tags
    # và `description` để cập nhật mô tả.
    # payload sẽ chứa bất cứ key nào được truyền vào trong `data`.
    res = requests.patch(f"{BASE_URL}/api/bookmarks/{bookmark_id}/", json=data, headers=HEADERS)
    
    # In ra lỗi nếu có để dễ debug
    if res.status_code >= 400:
        print(f"Lỗi từ Linkding API ({res.status_code}): {res.text}")
        
    res.raise_for_status()
    return res.status_code