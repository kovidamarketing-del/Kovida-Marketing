// script.js

// Smooth scrolling feature
const smoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
};

// Interactive product showcase
const showcase = () => {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.addEventListener('click', () => {
            product.classList.toggle('active');
        });
    });
};

// Navigation features
const toggleNav = () => {
    const nav = document.querySelector('.nav');
    const toggleButton = document.querySelector('.nav-toggle');
    toggleButton.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
};

// Initialize functions
document.addEventListener('DOMContentLoaded', () => {
    smoothScroll();
    showcase();
    toggleNav();
});
