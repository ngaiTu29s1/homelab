# gemini.py (phiên bản gỡ lỗi đơn giản)
import requests
import os
import json
from dotenv import load_dotenv

load_dotenv("linkding_ai.env")

def classify_bookmark(title, url):
    key = os.getenv("GEMINI_API_KEY")
    if not key:
        print("Lỗi: GEMINI_API_KEY chưa được thiết lập.")
        return None

    # Vẫn dùng gemini-pro để đảm bảo tương thích
    model = "gemini-1.5-flash-latest"
    
    prompt = f"""
Phân tích và phân loại bookmark sau, đặt description ngắn gọn và các tags liên quan đến nội dung, chủ đề, lĩnh vực, hoặc mục đích sử dụng của trang web. Không dùng các tag chung chung như 'tag1', 'tag2', 'tag3'.
Title: {title}
URL: {url}

Trả về đúng định dạng JSON sau, không có markdown formatting:
{{
  "description": "...",
  "tags": "tag1, tag2, tag3"
}}
"""

    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "safetySettings": [
            {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_NONE"},
            {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_NONE"},
            {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_NONE"},
            {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_NONE"}
        ],
        "generationConfig": {
            "responseMimeType": "application/json",
        }
    }

    print(f"\n--- [REQUEST] Đang xử lý URL: {url} ---")

    try:
        res = requests.post(
            f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent",
            params={"key": key},
            json=payload,
            timeout=30
        )
    except requests.exceptions.RequestException as e:
        print(f"[ERROR] Lỗi kết nối đến Gemini API: {e}")
        return None

    # --- IN RA RAW RESPONSE NGAY LẬP TỨC ---
    print(f"[RESPONSE] Status Code: {res.status_code}")
    print("[RESPONSE] Raw Text Body:")
    print(res.text)
    # ----------------------------------------

    try:
        response_json = res.json()
        
        # Kiểm tra cấu trúc response thành công
        if "candidates" in response_json:
            text_part = response_json["candidates"][0]["content"]["parts"][0]["text"]
            print("[SUCCESS] Trích xuất nội dung thành công.")
            return json.loads(text_part)
        else:
            # Nếu không có "candidates", đây là response lỗi/bị chặn
            print("[ERROR] Response từ Gemini không chứa 'candidates'.")
            return None

    except json.JSONDecodeError:
        print("[ERROR] Không thể parse JSON từ response của Gemini.")
        return None
    except (KeyError, IndexError):
        print("[ERROR] Cấu trúc JSON nhận được không như mong đợi.")
        return None