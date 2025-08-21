# � Portainer

Portainer provides a simple and powerful web UI to manage your Docker containers, images, networks, and volumes.

## 🚀 Features

- Easy Docker container management via browser
- Secure access with authentication
- Stack and Compose file deployment
- Real-time container logs and stats

## 📦 Folder Structure

```
.env           # Environment variables (not committed)
.env.enc       # Encrypted environment file (for secrets)
Caddyfile      # Caddy reverse proxy config (if used)
docker-compose.yml
README.md
```

## 🛠️ Usage

1. **Start Portainer:**
	```sh
	docker compose up -d
	```

2. **Access the UI:**
	- Open [http://localhost:9000](http://localhost:9000) in your browser (or your server's IP).

3. **Reverse Proxy (optional):**
	- Caddyfile is provided for HTTPS or custom domain setup.

## 🔒 Security

- Store secrets in `.env.enc` and decrypt as needed.
- Do not commit `.env` with sensitive data.

## 📚 References

- [Portainer Docs](https://docs.portainer.io/)
- [Caddy Docs](https://caddyserver.com/docs/)
# �📦 Portainer (Homelab Project)

Manage Docker containers through a graphical web interface with **Portainer CE**.

## 🚀 Goals
- Easily manage containers, images, volumes, and networks via browser.
- Serve as part of a personal Homelab system.
