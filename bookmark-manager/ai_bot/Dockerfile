# Use official Python image
FROM python:3.11-slim

# Set working directory inside container
WORKDIR /app

# 1. Install deps first (cached layer)
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# 2. Copy source code
COPY . .


CMD ["python", "main.py"]
