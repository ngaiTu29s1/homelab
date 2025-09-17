import os
import sys
from dotenv import load_dotenv



# Always load .env.dev from the same directory as this script
env_path = os.path.join(os.path.dirname(__file__), '.env')
if os.path.isfile(env_path):
    load_dotenv(dotenv_path=env_path)
    print(f"[DEBUG] Loaded .env from {env_path}")
else:
    print("[WARNING] .env.dev not found in ai_bot directory", file=sys.stderr)

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