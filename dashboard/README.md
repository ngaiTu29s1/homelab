# 🏠 Homer Dashboard

A sleek, modern dashboard that provides a unified starting point for all homelab services, powered by [Homer](https://github.com/bastienwirtz/homer).

## 🌟 Features

- **Centralized Service Access**: Single page with links to all homelab services
- **Visual Organization**: Group services by category with custom icons and descriptions
- **Themeable Interface**: Multiple built-in themes plus support for custom CSS
- **Mobile-Friendly**: Responsive design works well on all devices
- **Lightweight**: Static HTML with no database requirements

## 📂 Project Structure

```
docker-compose.yml   # Container configuration
homer/
  ├── assets/        # Static assets directory
  │   ├── config.yml # Main configuration file
  │   ├── *.svg      # Service icons and logos
  │   └── themes/    # Custom CSS themes
  └── ...           # Other Homer files
```

## 🚀 Deployment

1. **Launch the service**:
   ```zsh
   docker compose up -d
   ```

2. **Access the dashboard**:
   - http://server-ip:8080 (default)
   - Or via your configured domain if using a reverse proxy

## 💫 Dashboard Showcase

![Dashboard Preview](https://i.imgur.com/OtJGi0T.jpg)

My custom-themed dashboard provides one-click access to:

- Media streaming with Jellyfin
- Network security with AdGuard Home
- Container management with Portainer
- Financial tracking with Firefly III
- Smart bookmark collection
- System monitoring and stats

## 🎨 Customization

- **Add New Services**: Edit `config.yml` to add service entries
- **Custom Icons**: Place SVG files in `homer/assets/` directory
- **Change Theme**: Modify the theme setting in `config.yml` or add custom themes in `homer/assets/themes/`

## � Related Components

- [Caddy Reverse Proxy](/configs/caddy) - For secure HTTPS access
- All other homelab services that appear on the dashboard

## 📚 Resources

- [Homer Documentation](https://github.com/bastienwirtz/homer/blob/main/docs/configuration.md)
- [Font Awesome Icons](https://fontawesome.com/icons) (for service icons)

- [Homer Docs](https://github.com/bastienwirtz/homer)
# 🖥️ Homelab Dashboard

This is a simple, self-hosted dashboard to monitor and access key services running in my homelab.  
Powered by Docker Compose and includes tools like:

- [Homer](https://github.com/bastienwirtz/homer): a static dashboard for bookmarks and links.
- [Uptime Kuma](https://github.com/louislam/uptime-kuma): self-hosted monitoring tool.
- [Netdata](https://github.com/netdata/netdata): real-time performance monitoring.


