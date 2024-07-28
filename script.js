document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const messageBox = document.getElementById('message-box');
     const contactLink = document.getElementById('contact-link');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
 function showMessage(message) {
        messageBox.textContent = message;
        messageBox.style.display = 'block';
        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 3000);
    }
 contactLink.addEventListener('click', (e) => {
        e.preventDefault(); 
        showMessage('Dial: 1234567890');
    });
});
