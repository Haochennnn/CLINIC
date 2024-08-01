// contact.js

// Form validation
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Basic validation
        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        if (name.value.trim() === '') {
            isValid = false;
            alert('Name is required.');
        }

        if (email.value.trim() === '') {
            isValid = false;
            alert('Email is required.');
        } else if (!validateEmail(email.value.trim())) {
            isValid = false;
            alert('Email is not valid.');
        }

        if (message.value.trim() === '') {
            isValid = false;
            alert('Message is required.');
        }

        if (isValid) {
            // Here you can add code to send the form data to the server
            alert('Form submitted successfully!');
            form.reset();
        }
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
