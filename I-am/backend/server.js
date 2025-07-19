const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/profile', (req, res) => {
  res.json({
    message: "Hello from Backend! Your CV data will be here."
  });
});

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});