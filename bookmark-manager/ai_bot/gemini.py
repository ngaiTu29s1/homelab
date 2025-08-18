import google.generativeai as genai
import json
from utils import get_env

GEMINI_API_KEY = get_env("GEMINI_API_KEY")
print(f"[DEBUG] GEMINI_API_KEY exists: {bool(GEMINI_API_KEY)}")

try:
    genai.configure(api_key=GEMINI_API_KEY)
    model = genai.GenerativeModel("gemini-pro")
    print("[DEBUG] Gemini model initialized successfully")
except Exception as e:
    print(f"[ERROR] Failed to initialize Gemini: {str(e)}")
    # Return a default placeholder response if Gemini fails
    def default_response():
        return json.dumps({
            "tags": ["auto", "generated"],
            "summary": "Auto-generated summary (Gemini API failed)",
            "group": "Uncategorized",
            "ignore": False
        })

def enrich_bookmark(title: str, desc: str, url: str):
    print(f"[DEBUG] Processing bookmark: {title}")
    
    try:
        prompt = f"""
        You're an intelligent bookmark assistant.
        Given the following info:
        - Title: {title}
        - Description: {desc}
        - URL: {url}

        Please return a JSON with:
        1. tags: Up to 3 relevant tags
        2. summary: short summary under 30 words
        3. group: Suggested topic group (e.g. Dev, Design, News)
        4. ignore: true if spam
        """
        
        # Handle empty title case
        if not title and not url:
            print("[DEBUG] Empty bookmark, skipping")
            return json.dumps({"ignore": True})
            
        response = model.generate_content(prompt)
        print("[DEBUG] Gemini API responded successfully")
        return response.text
    except Exception as e:
        print(f"[ERROR] Gemini API error: {str(e)}")
        # Return default response on error
        if 'default_response' in globals():
            return default_response()
        else:
            return json.dumps({
                "tags": ["auto", "generated"],
                "summary": "Auto-generated summary (API error)",
                "group": "Uncategorized",
                "ignore": False
            })