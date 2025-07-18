document.addEventListener('DOMContentLoaded', () => {
    // --- Hiệu ứng gõ chữ (Typing Effect) ---
    const textElement = document.getElementById('typing-text');
    const phrases = ["Thế Giới Của Trần Tuấn Tú", "Nơi Code Gặp Đam Mê", "Kỹ Sư Điện Tử Viễn Thông"];
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150; // Tốc độ gõ
    const deletingSpeed = 75; // Tốc độ xóa
    const delayBeforeDelete = 1500; // Thời gian chờ trước khi xóa

    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];
        if (!isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(typeWriter, delayBeforeDelete);
            } else {
                setTimeout(typeWriter, typingSpeed);
            }
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(typeWriter, typingSpeed);
            } else {
                setTimeout(typeWriter, deletingSpeed);
            }
        }
    }
    typeWriter(); // Bắt đầu hiệu ứng

    // --- Cuộn mượt mà đến các phần ---
    window.scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    // --- Gọi API từ Backend ---
    const backendMessageElement = document.getElementById('backend-message');
    fetch('/api/hello') // Gọi API từ backend thông qua proxy Nginx
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            backendMessageElement.textContent = `Backend nói: ${data.message}`;
        })
        .catch(error => {
            console.error('Lỗi khi gọi API backend:', error);
            backendMessageElement.textContent = 'Không thể kết nối với Backend. Vui lòng kiểm tra console.';
            backendMessageElement.style.color = 'red';
        });

    // --- Xử lý form liên hệ ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Ngăn chặn form submit mặc định

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        formStatus.textContent = 'Đang gửi...';
        formStatus.style.color = 'gray';

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await response.json();

            if (data.success) {
                formStatus.textContent = data.message;
                formStatus.style.color = 'green';
                contactForm.reset(); // Xóa form sau khi gửi thành công
            } else {
                formStatus.textContent = data.message || 'Có lỗi xảy ra khi gửi tin nhắn.';
                formStatus.style.color = 'red';
            }
        } catch (error) {
            console.error('Lỗi khi gửi form:', error);
            formStatus.textContent = 'Không thể gửi tin nhắn. Vui lòng thử lại sau.';
            formStatus.style.color = 'red';
        }
    });
});
