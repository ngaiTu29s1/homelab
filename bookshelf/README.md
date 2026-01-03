# Book Stack: Calibre + Audiobookshelf

## Services

### Calibre (Manager)
- **GUI**: http://localhost:8080
- **Content Server**: http://localhost:8081
- **Role**: Library management, metadata editing, format conversion.

### Audiobookshelf (Reader/Streamer)
- **Web UI**: http://localhost:13378
- **Role**: Audiobook streaming, polished reading interface.
- **Note**: Configured with Read-Only access to the library to prevent conflicts.

## Setup Instructions

1. **Prepare Directories**:
   Run the setup script to create the necessary folders on `/mnt/hdd500`:
   ```bash
   sudo chmod +x setup.sh
   sudo ./setup.sh
   ```

2. **Start Services**:
   ```bash
   docker-compose up -d
   ```

## Enable Calibre Content Server
To allow Kobo or other OPDS clients (including Audiobookshelf "Connect" feature) to access Calibre:

1. Open Calibre GUI at http://localhost:8080.
2. Go to **Preferences** -> **Sharing** -> **Sharing over the net**.
3. Click **Start Server**.
4. (Optional) Configure user accounts if needed.
5. Apply settings.
