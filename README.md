# 🏠 Overview

> Hello everyone! This is my personal **homelab** project, where I freely experiment and deploy anything that interests me.

## 💻 Server Specs

- **Model:** Lenovo Ideacentre 300-20ISH
- **OS:** Debian 12.6.0
- **CPU:** Intel i3-6100
- **RAM:** 16GB
- **GPU:** Intel HD Graphics 530
- **Storage:** 256GB SSD + 500GB HDD

### 📁 Project Structure & Services

| Path | Service | Description |
|------|---------|-------------|
| [`adguardhome/`](./adguardhome) | 🛡️ AdGuard Home | Network-wide ad-blocking & DNS ([AdGuard Home](https://adguard.com/en/adguard-home/overview.html)) |
| [`bookmark-manager/`](./bookmark-manager) | 🔖 Bookmark Manager | AI-powered bookmarks (linkding + linkding-ai, Gemini integration) |
| [`configs/`](./configs) | ⚙️ Configs | System and service configuration files (cloud-init, fstab, etc.) |
| [`dashboard/`](./dashboard) | 🏠 Dashboard | Central dashboard ([Homer](https://github.com/bastienwirtz/homer)) |
| [`portainer/`](./portainer) | 🐳 Portainer | Docker management UI ([Portainer](https://www.portainer.io/)) |
| [`sops-env.py`](./sops-env.py) | 🔐 SOPS Env | Script for managing encrypted environment files |
| [`streaming/`](./streaming) | 📺 Streaming | Media and streaming services (e.g., Jellyfin, Sonarr, Radarr, etc.) |

---

#### 🔑 Key Services

- 🛡️ [`adguardhome`](./adguardhome): AdGuard Home for DNS/ad-blocking
- 🔖 [`bookmark-manager`](./bookmark-manager): AI bookmark management, auto-tagging, Gemini integration
- 🏠 [`dashboard`](./dashboard): Homer dashboard for quick access to all services
- 🐳 [`portainer`](./portainer): Web UI for Docker
- 📺 [`streaming`](./streaming): Media/streaming stack (Jellyfin, Sonarr, Radarr, etc.)
- ⚙️ [`configs`](./configs): System/service config files
- 🔐 [`sops-env.py`](./sops-env.py): Encrypted env management script