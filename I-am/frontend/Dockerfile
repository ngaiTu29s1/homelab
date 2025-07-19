# Stage 1: Sử dụng Nginx image chính thức
FROM nginx:stable-alpine

# Xóa file cấu hình Nginx mặc định
RUN rm /etc/nginx/conf.d/default.conf

# Copy file cấu hình Nginx tùy chỉnh của bạn
COPY nginx.conf /etc/nginx/conf.d/

# Copy toàn bộ nội dung trong thư mục public vào thư mục phục vụ web của Nginx
COPY ./public /usr/share/nginx/html

# Expose port
EXPOSE 80

# Lệnh mặc định để khởi chạy Nginx
CMD ["nginx", "-g", "daemon off;"]