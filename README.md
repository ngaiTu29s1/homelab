# 🏠 Personal Homelab Project

> ## 🚀 Quick Start

```zsh
# Clone this repository
git clone https://github.com/ngaiTu29s1/homelab.git
cd homelab

# Start a specific service
cd service-name
docker compose up -d
```my personal **homelab** project repository—a collection of self-hosted services and configurations I use for learning, experimentation, and daily digital life management.

## 💻 Hardware Specs

- **Server:** Lenovo Ideacentre 300-20ISH
- **CPU:** Intel i3-6100 (2 cores, 4 threads)
- **Memory:** 16GB DDR4 RAM
- **Storage:** 256GB SSD (OS & apps) + 500GB HDD (data)
- **Graphics:** Intel HD Graphics 530
- **Operating System:** Debian 12.6.0
- **Network:** Tailscale for secure remote access

## 🛠️ Services & Components

| Category | Service | Description |
|----------|---------|-------------|
| **System & Management** |  |  |
| [`portainer/`](./portainer) | 🐳 Portainer | Docker container management UI |
| [`configs/`](./configs) | ⚙️ Configuration | Caddy reverse proxy & system configs |
| **Networking & Security** |  |  |
| [`adguardhome/`](./adguardhome) | 🛡️ AdGuard Home | Network-wide ad blocking & DNS control |
| **Media & Entertainment** |  |  |
| [`streaming/`](./streaming) | 📺 Media Stack | Jellyfin, Sonarr, Radarr, Prowlarr & qBittorrent |
| **Productivity** |  |  |
| [`bookmark-manager/`](./bookmark-manager) | 🔖 AI Bookmarks | Linkding + Gemini AI for smart bookmark management |
| [`dashboard/`](./dashboard) | 🏠 Homer Dashboard | Centralized access to all services |
| **Tools** |  |  |
| [`scripts/sops-env.py`](./scripts/sops-env.py) | 🔐 SOPS Env | Tool for managing encrypted environment files |
| [`actual-budget/`](./actual-budget) | � Actual Budget | Personal finance management |
| [`ff3/`](./ff3) | 📊 Firefly III | Financial management & tracking |

## � Quick Start

```bash
# Clone this repository
git clone https://github.com/ngaiTu29s1/homelab.git
cd homelab

# Start a specific service
cd service-name
docker-compose up -d
```

## � Tech Stack Showcase

- **Containerization**: Full Docker ecosystem with Compose orchestration
- **Networking**: Tailscale mesh VPN for secure remote access
- **Security**: HTTPS everywhere with automatic certificate management
- **Secret Management**: SOPS-encrypted configuration files
- **Infrastructure as Code**: Version-controlled configuration