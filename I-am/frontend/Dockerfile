# Sử dụng image Nginx chính thức phiên bản Alpine (nhỏ gọn)
FROM nginx:alpine

# Xóa cấu hình mặc định của Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copy file cấu hình Nginx tùy chỉnh của chúng ta vào đúng vị trí
COPY nginx.conf /etc/nginx/conf.d/personal-website.conf

# Copy tất cả các file trong thư mục public của frontend vào thư mục phục vụ của Nginx
COPY public/ /usr/share/nginx/html

# Mở cổng 80 (cổng HTTP tiêu chuẩn)
EXPOSE 80

# Lệnh mặc định của Nginx sẽ tự khởi động
CMD ["nginx", "-g", "daemon off;"]
