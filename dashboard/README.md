# 🏠 Homelab Dashboard (Homer)

A beautiful, customizable dashboard for your homelab, powered by [Homer](https://github.com/bastienwirtz/homer).

## ✨ Features

- Centralized quick links to all your services
- Custom icons and themes
- Easy configuration via YAML

## 📦 Folder Structure

```
.env           # Environment variables (not committed)
.env.enc       # Encrypted environment file (for secrets)
docker-compose.yml
README.md
homer/
  assets/
	 *.svg      # Service logos
	 config.yml # Main Homer config
	 fetch-logos.sh
	 themes/    # Custom CSS themes
```

## ⚡ Quick Start

1. **Start the dashboard:**
	```sh
	docker compose up -d
	```

2. **Configure links and appearance:**
	- Edit `homer/assets/config.yml` for your services and layout.
	- Add or update logos in `homer/assets/`.

3. **Access the dashboard:**
	- Open [http://localhost:8080](http://localhost:8080) (or your server's IP).

## 🎨 Customization

- Add new logos to `homer/assets/`.
- Use or create custom themes in `homer/assets/themes/`.

## 🔒 Security

- Store secrets in `.env.enc` and decrypt as needed.
- Do not commit `.env` with sensitive data.

## 📚 References

- [Homer Docs](https://github.com/bastienwirtz/homer)
# 🖥️ Homelab Dashboard

This is a simple, self-hosted dashboard to monitor and access key services running in my homelab.  
Powered by Docker Compose and includes tools like:

- [Homer](https://github.com/bastienwirtz/homer): a static dashboard for bookmarks and links.
- [Uptime Kuma](https://github.com/louislam/uptime-kuma): self-hosted monitoring tool.
- [Netdata](https://github.com/netdata/netdata): real-time performance monitoring.


