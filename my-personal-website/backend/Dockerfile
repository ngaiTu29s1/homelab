# Sử dụng image Node.js chính thức phiên bản 18
FROM node:18-alpine

# Đặt thư mục làm việc bên trong container
WORKDIR /app

# Copy package.json và package-lock.json để cài đặt dependencies
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Mở cổng mà ứng dụng Node.js sẽ lắng nghe
EXPOSE 3000

# Lệnh để chạy ứng dụng khi container khởi động
CMD ["npm", "start"]
