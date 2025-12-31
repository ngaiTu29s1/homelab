const hour = new Date().getHours();
let greeting;

if (hour < 12) greeting = "Chào buổi sáng, Hoàng thượng!";
else if (hour < 18) greeting = "Chào buổi chiều, Hoàng thượng!";
else greeting = "Đêm đã khuya, người nên nghỉ ngơi.";

// Hiện trong F12 Console
// Hoặc nếu muốn hiện Alert (hơi phiền):
// alert(greeting);