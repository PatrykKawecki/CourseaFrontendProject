function toggleMenu() {
    const navMenu = document.querySelector('nav ul');
    if (navMenu.style.display === 'none' || navMenu.style.display === '') {
        navMenu.style.display = 'flex';
    } else {
        navMenu.style.display = 'none';
    }
}

// Attach the toggle function to the hamburger icon
const hamburgerIcon = document.querySelector('.hamburger');
if (hamburgerIcon) {
    hamburgerIcon.addEventListener('click', toggleMenu);
}

// Implement smooth scrolling for in-page links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

function filterProjects(category) {
    const projects = document.querySelectorAll('#projects article');
    projects.forEach(project => {
        if (category === 'all' || project.getAttribute('data-category') === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');
    document.getElementById('form-success').style.display = 'none';

    // Validate name
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('name-error').textContent = 'Name is required.';
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Invalid email address.';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    }

    // Validate message
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        document.getElementById('message-error').textContent = 'Message is required.';
        document.getElementById('message-error').style.display = 'block';
        isValid = false;
    }

    // Show success message if form is valid
    if (isValid) {
        document.getElementById('form-success').textContent = 'Form submitted successfully!';
        document.getElementById('form-success').style.display = 'block';
    }

    return isValid;
}

// Real-time feedback
document.getElementById('contact-form').addEventListener('input', function(event) {
    const target = event.target;
    const errorElement = document.getElementById(target.id + '-error');

    if (target.validity.valid) {
        errorElement.style.display = 'none';
    } else {
        errorElement.textContent = target.validationMessage;
        errorElement.style.display = 'block';
    }
});