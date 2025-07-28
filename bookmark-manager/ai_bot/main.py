# main.py (Phiên bản đã sửa)
from linkding import get_bookmarks, update_bookmark
from gemini import classify_bookmark
import time

def run():
    bookmarks = get_bookmarks()
    if not bookmarks:
        print("Không tìm thấy bookmarks nào cần cập nhật hoặc có lỗi khi lấy bookmarks.")
        return

    print(f"Tìm thấy {len(bookmarks)} bookmarks cần cập nhật description hoặc tags.")
    
    for bm in bookmarks:
        print(f"\n>>> Đang xử lý bookmark ID: {bm['id']}, Title: {bm['title']}")
        info = classify_bookmark(bm["title"], bm["url"])
        
        if info and "description" in info and "tags" in info:
            # --- BƯỚC SỬA LỖI QUAN TRỌNG ---
            # Chuyển đổi chuỗi tags thành danh sách các tag
            # Ví dụ: "tag1, tag2,  tag3" -> ["tag1", "tag2", "tag3"]
            tag_string = info.get("tags", "")
            tag_list = [tag.strip() for tag in tag_string.split(',') if tag.strip()]

            update_data = {
                "description": info["description"],
                "tag_names": tag_list # Linkding API sử dụng 'tag_names' để cập nhật
            }
            
            print(f"Chuẩn bị cập nhật bookmark ID {bm['id']} với dữ liệu:")
            print(f"  - Description: {update_data['description']}")
            print(f"  - Tags: {update_data['tag_names']}")

            try:
                status_code = update_bookmark(bm["id"], update_data)
                print(f"Cập nhật thành công! (Status: {status_code})")
            except Exception as e:
                print(f"!!! Lỗi khi cập nhật bookmark ID {bm['id']}: {e}")
            
            # Giữ khoảng nghỉ để tránh bị giới hạn tốc độ
            time.sleep(2) # Tăng lên 2 giây để an toàn hơn
        else:
            print(f"Không nhận được thông tin hợp lệ từ Gemini cho bookmark ID {bm['id']}.")

if __name__ == "__main__":
    run()