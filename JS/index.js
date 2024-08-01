// index.js

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function() {
        const featureBox = this.closest('.feature-box');
        featureBox.classList.toggle('expanded');
        this.textContent = featureBox.classList.contains('expanded') ? 'Read Less' : 'Read More';
    });
});
