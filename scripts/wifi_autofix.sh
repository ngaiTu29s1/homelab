#!/bin/bash

WIFI_NAME="HOME"
LOGFILE="$HOME/homelab/logs/wifi_autofix.log"

echo "$(date) - 🔄 Wi-Fi auto-fix started" >> "$LOGFILE"

while true; do
    status=$(nmcli -t -f GENERAL.STATE device show wlp2s0 | cut -d ':' -f2)

    if [[ "$status" != "100 (connected)" ]]; then
        echo "$(date) - 🚫 Mất Wi-Fi, đang kết nối lại..." >> "$LOGFILE"
        nmcli connection up "$WIFI_NAME"
        echo "$(date) - ✅ Đã kết nối lại Wi-Fi" >> "$LOGFILE"
        sleep 5
    fi

    sleep 5
done
