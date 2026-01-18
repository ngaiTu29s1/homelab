# � Digital Sanctuary: Personal Homelab

> *A self-hosted, sovereign infrastructure for automation, media, and knowledge management.*

Welcome to my personal infrastructure—a continuously evolving ecosystem designed for data privacy, learning, and service reliability. This repository serves as the "source of truth" for the Infrastructure-as-Code (IaC) configuration that powers my daily digital life.

## � Architecture Overview

Built on the philosophy of **Containerization** and **Microservices**, this homelab operates as a cohesive unit where every service has a specific purpose, from network defense to knowledge archival.

### �️ Edge & Security Layer
*   **Ingress Controller**: [Nginx Proxy Manager](./nginx) handles SSL termination and reverse proxying, ensuring secure HTTPS access to all internal tools.
*   **Networking Defense**: [AdGuard Home](./adguardhome) acts as the DNS sinkhole, filtering ads and trackers at the network level for all connected devices.
*   **Secret Management**: Sensitive configuration is managed via **SOPS**, ensuring no raw secrets are ever committed to version control.
*   **Connectivity**: **Tailscale** Mesh VPN ties the infrastructure together, creating a secure overlay network accessible from anywhere in the world.

### ⚡ Automation & Notification
*   **The Brain**: [n8n](./n8n) (Workflow Automation) orchestrates complex tasks and data flows between services without manual intervention.
*   **The Messenger**: [ntfy](./ntfy) serves as a unified push notification server, delivering critical alerts from the lab (and other webhooks) directly to my devices.

### 📚 Knowledge & Media Stack (`/bookshelf`)
A centralized "Library of Alexandria" for my digital assets:
*   **Audiobookshelf**: Streaming server for audiobooks and podcasts.
*   **Calibre**: The backend for ebook management and metadata curation.
*   **OPDS-ABS**: A bridge ensuring seamless compatibility with various ebook readers.

### 👁️ Observability & Control
*   **Mission Control**: [Homepage](./dashboard) provides a beautiful, highly customizable dashboard to launch and monitor all services at a glance.
*   **Health Monitoring**:
    *   **Uptime Kuma**: Tracks service availability and SLA/downtime.
    *   **Netdata**: Delivers granular, real-time performance metrics (CPU, RAM, I/O) of the host system.
*   **Orchestration**: [Portainer](./portainer) offers a GUI for visual container management and quick debugging.

---

## 💻 Infrastructure Specs

The physical backbone hosting these 20+ containers:

| Component | Specification |
|-----------|---------------|
| **Device** | Lenovo Ideacentre 300-20ISH |
| **Compute** | Intel Core i3-6100 (2C/4T @ 3.70GHz) |
| **Memory** | 16GB DDR4 RAM |
| **Storage** | 256GB SSD (System/App Data) + 500GB HDD (Media/Archives) |
| **OS** | Debian 12 (Bookworm) |

---

## 🛠️ Technology Stack

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Debian](https://img.shields.io/badge/Debian-A81D33?style=for-the-badge&logo=debian&logoColor=white)
![Nginx](https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=nginx&logoColor=white)
![Tailscale](https://img.shields.io/badge/Tailscale-18181B?style=for-the-badge&logo=tailscale&logoColor=white)
![YAML](https://img.shields.io/badge/YAML-CB171E?style=for-the-badge&logo=yaml&logoColor=white)
