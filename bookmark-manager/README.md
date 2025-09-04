# 🔖 AI-Powered Bookmark Manager

A powerful bookmark management system that combines Linkding's clean interface with Google Gemini AI for automatic categorization and tagging.

## 🧠 Overview

This project integrates the open-source Linkding bookmark manager with Google's Gemini AI to create an intelligent bookmark system that automatically analyzes, categorizes, and describes your saved links without manual effort.

## ✨ Key Features

- **Automatic Tagging**: AI analyzes bookmark content and generates relevant tags
- **Smart Descriptions**: Creates concise, informative descriptions of bookmarked pages
- **Topic Classification**: Organizes bookmarks by subject area and purpose
- **Modern Interface**: Clean, responsive UI with powerful search capabilities
- **Import/Export**: Compatible with browser bookmark exports and standard formats
- **Privacy-Focused**: Self-hosted solution keeps your data under your control

## 🛠️ Technical Architecture

The system consists of two main components:
1. **Linkding**: Core bookmark storage and management
2. **AI Service**: Python application using Gemini API for content analysis

```
┌────────────┐    ┌─────────────┐
│  Linkding  │◄──►│  AI Service │
│ (Bookmark  │    │  (Content   │
│  Storage)  │    │  Analysis)  │
└────────────┘    └─────────────┘
```

## 📦 Project Structure

```
docker-compose.yml       # Container orchestration
linkding_data/           # Linkding database & files
ai_bot/                  # AI service code
  ├── main.py            # Entry point
  ├── gemini.py          # Gemini API integration
  ├── linkding.py        # Linkding API client
  └── Dockerfile         # AI service container
```

## 🚀 Getting Started

1. **Set up credentials**:
   - Create a `.env` file with Gemini API key
   
2. **Start the service**:
   ```zsh
   docker compose up -d
   ```

3. **Access the UI**:
   - Open http://your-server:9090 (default)

## 🧠 AI Integration Showcase

**What makes this special:**

- The AI analyzes full page content, not just titles
- Smart tagging recognizes concepts, not just keywords
- Auto-generated descriptions summarize key points
- Contextual understanding separates core topics from peripheral mentions
- Self-improving system that learns from tagging patterns

![AI Bookmark Analysis](https://i.imgur.com/DsM5YKT.jpg)

## 👨‍💻 Technologies

- Python
- Docker & Docker Compose
- Linkding (Django)
- Google Gemini AI

## 📄 License

MIT
