const text = "Hello, I'm Moch Rifqi Alfaritsi ";
const typingElement = document.querySelector('.typing-text');
let index = 0;

function type() {
if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100); // kecepatan nulis
}
}

// Mulai efek nulis setelah DOM siap
document.addEventListener('DOMContentLoaded', type);