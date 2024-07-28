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
        }, 3000); // Hide after 3 seconds
    }
 contactLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        showMessage('Dial: 1234567890');
    });
});
