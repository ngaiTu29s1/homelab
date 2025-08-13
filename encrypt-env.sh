#!/usr/bin/env bash
set -euo pipefail

# Đường dẫn file config SOPS
CONFIG_FILE=".sops.yaml"

echo "🔒 Encrypting all *.env files to *.env.enc ..."
find . -type f -name "*.env" -print0 | while IFS= read -r -d '' f; do
  enc_file="${f}.enc"
  echo "→ $f → $enc_file"
  sops --config "$CONFIG_FILE" --input-type dotenv --output-type dotenv \
    -e "$f" > "$enc_file"
done

echo "✅ Done. You can now commit *.env.enc files."
