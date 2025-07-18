const express = require('express');
const path = require('path');
const cors = require('cors'); // Để xử lý CORS khi gọi API từ frontend

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Cho phép mọi nguồn gốc truy cập API (cho demo)
app.use(express.json()); // Để parse JSON body từ request

// API Endpoint đơn giản
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Xin chào từ Backend Node.js!' });
});

// API Endpoint cho form liên hệ (chỉ log ra console)
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('\n--- Tin nhắn liên hệ mới ---');
  console.log(`Tên: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Tin nhắn: ${message}`);
  console.log('------------------------------\n');
  res.json({ success: true, message: 'Cảm ơn bạn đã liên hệ! (Tin nhắn đã được ghi nhận trên server log)' });
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Backend server đang chạy trên cổng ${PORT}`);
});
