#!/usr/bin/env bash
set -euo pipefail

CONFIG_FILE=".sops.yaml"

find . -type f -name "*.env.enc" -print0 | while IFS= read -r -d '' f; do
  out="${f%.enc}"
  sops --config "$CONFIG_FILE" \
       --input-type dotenv --output-type dotenv \
       -d "$f" > "$out"
  echo "→ $f  ⇒  $out"
done
