FROM nginx:1.27-alpine

# Copy file cấu hình Nginx tùy chỉnh
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Create empty html directory (files will come from volume mapping)
RUN mkdir -p /usr/share/nginx/html

EXPOSE 80
