import os
import sys
from dotenv import load_dotenv

# Try to load from different locations to handle docker and local development
# In Docker, the .env should be available at root (/) via env_file in docker-compose.yml
locations = ['/.env', '.env', '../.env', os.path.join(os.path.dirname(os.path.dirname(__file__)), '.env')]

loaded = False
for env_path in locations:
    try:
        if os.path.exists(env_path):
            print(f"[DEBUG] Loading .env from: {env_path}")
            load_dotenv(env_path)
            loaded = True
            break
    except Exception as e:
        print(f"[WARNING] Failed to load from {env_path}: {str(e)}")

if not loaded:
    print("[WARNING] No .env file found in any location", file=sys.stderr)

# Print variables for debugging
print(f"[DEBUG] LINKDING_HOST in utils.py: {os.getenv('LINKDING_HOST')}")
if os.getenv('LINKDING_TOKEN'):
    print(f"[DEBUG] LINKDING_TOKEN in utils.py: {os.getenv('LINKDING_TOKEN')[:6] + '...'}")
else:
    print("[ERROR] LINKDING_TOKEN is missing!")

def get_env(key: str, default: str = None):
    value = os.getenv(key, default)
    if value is None and default is None:
        print(f"[ERROR] Required environment variable {key} is missing!", file=sys.stderr)
    return value