import asyncio
import json
import time
from linkding import get_bookmarks, update_bookmark
from gemini import enrich_bookmark

async def process():
    print("[INFO] Starting bookmark processing")
    
    # Add a small delay to ensure linkding is fully ready
    print("[INFO] Waiting 5 seconds for linkding service to be fully ready...")
    time.sleep(5)
    
    try:
        print("[INFO] Fetching bookmarks from linkding")
        bookmarks = await get_bookmarks()
        print(f"[INFO] Retrieved {len(bookmarks)} bookmarks")
        
        if not bookmarks:
            print("[INFO] No bookmarks to process")
            print("[INFO] Process completed successfully")
            return
            
        for bm in bookmarks:
            try:
                title = bm["title"]
                desc = bm.get("description", "")
                url = bm["url"]
                print(f"[INFO] Processing: {title}")
                
                result = enrich_bookmark(title, desc, url)

                try:
                    data = json.loads(result)
                except json.JSONDecodeError:
                    print(f"[SKIP] Could not parse result for {title}\n{result}")
                    continue

                if data.get("ignore"):
                    print(f"[SKIP] Ignored: {title}")
                    continue

                patch = {
                    "description": f"{data.get('summary', '')}\n\nAI Group: {data.get('group', '')}",
                    "tag_names": ", ".join(data.get("tags", []))
                }
                await update_bookmark(bm["id"], patch)
                print(f"[DONE] Updated: {title}")
            except Exception as e:
                print(f"[ERROR] Error processing bookmark: {str(e)}")
                continue
        
        print("[INFO] Process completed successfully")
    except Exception as e:
        print(f"[ERROR] Fatal error in main process: {str(e)}")

if __name__ == "__main__":
    try:
        # Run immediately once
        asyncio.run(process())
        
        # Then run periodically every hour
        print("[INFO] Processing complete. Will run again in 1 hour...")
        
        while True:
            # Sleep for 1 hour
            time.sleep(3600)
            print("[INFO] Scheduled run starting...")
            asyncio.run(process())
            print("[INFO] Scheduled run complete. Will run again in 1 hour...")
    except KeyboardInterrupt:
        print("[INFO] Process interrupted by user")
    except Exception as e:
        print(f"[FATAL] Unhandled exception: {str(e)}")
