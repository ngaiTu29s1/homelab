# Stage 1: Sử dụng node image chính thức
FROM node:18-alpine

# Tạo thư mục làm việc
WORKDIR /app

# Copy package.json và package-lock.json
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Copy toàn bộ source code còn lại
COPY . .

# Expose port mà ứng dụng sẽ chạy
EXPOSE 3000

# Lệnh để khởi chạy ứng dụng
CMD [ "npm", "start" ]