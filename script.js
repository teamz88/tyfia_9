document.addEventListener('DOMContentLoaded', function () {
    // Page Loader
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
    }, 1500);

    // Sticky Navigation
    window.addEventListener('scroll', function () {
        const header = document.getElementById('main-header');
        header.classList.toggle('sticky', window.scrollY > 100);
    });

    // Smooth Scroll
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Learn More Button Scroll
    const learnMoreButton = document.getElementById('learn-more');
    learnMoreButton.addEventListener('click', function () {
        document.getElementById('about-ai').scrollIntoView({ behavior: 'smooth' });
    });

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });

    // AJAX Form Submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        fetch('form-submit-endpoint', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                document.getElementById('form-response').innerText = 'Thank you! Your message has been sent.';
            })
            .catch(error => {
                document.getElementById('form-response').innerText = 'Error submitting form. Please try again.';
            });
    });
});
