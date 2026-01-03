#!/bin/bash
# Book Stack Setup Script

BASE_DIR="/mnt/hdd500/books-stack"

echo "Creating directory structure at $BASE_DIR..."

# Create directories
mkdir -p "$BASE_DIR/library"
mkdir -p "$BASE_DIR/metadata"
mkdir -p "$BASE_DIR/config/calibre"
mkdir -p "$BASE_DIR/config/audiobookshelf"

# Set ownership
echo "Setting ownership to 1000:1000..."
chown -R 1000:1000 "$BASE_DIR"

echo "Setup complete. You can now run 'docker-compose up -d'."
