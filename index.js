<<<<<<< HEAD
// Google Sheets Web App URL provided by you
=======
// Google Sheets Web App URL
>>>>>>> 5f5f97a624a4e83791eb84b0c64e20675c33628a
const scriptURL = 'https://script.google.com/macros/s/AKfycbxR1Dl2Jeh2s0AphAPpw_BrhO3v8IlGD8q9xnHHc_9C6t8S8ComSfiTibYylY_zJk3d/exec';

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Navigation scroll effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // 2. Mobile Navigation (Burger Menu)
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    if (burger) {
        burger.addEventListener('click', function() {
            // Toggle Nav
            nav.classList.toggle('nav-active');
            
            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            
            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }
    
    // 3. Project Showcase Slider
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    let currentSlide = 0;
    const slideInterval = 5000;
    let slideTimer;
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = (n + slides.length) % slides.length;
        
        if (slides[currentSlide]) slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) dots[currentSlide].classList.add('active');
        
        // Reset timer
        clearInterval(slideTimer);
        slideTimer = setInterval(nextSlide, slideInterval);
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
    }
    
    if (slides.length > 0) {
        slideTimer = setInterval(nextSlide, slideInterval);
    }
    
    // 4. Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const tDots = document.querySelectorAll('.t-dot');
    let currentTestimonial = 0;
    const testimonialInterval = 6000;
    let testimonialTimer;
    
    function showTestimonial(n) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        tDots.forEach(dot => dot.classList.remove('active'));
        
        currentTestimonial = (n + testimonials.length) % testimonials.length;
        
        if (testimonials[currentTestimonial]) testimonials[currentTestimonial].classList.add('active');
        if (tDots[currentTestimonial]) tDots[currentTestimonial].classList.add('active');
        
        // Reset timer
        clearInterval(testimonialTimer);
        testimonialTimer = setInterval(nextTestimonial, testimonialInterval);
    }
    
    function nextTestimonial() {
        showTestimonial(currentTestimonial + 1);
    }
    
    tDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
    });
    
    if (testimonials.length > 0) {
        testimonialTimer = setInterval(nextTestimonial, testimonialInterval);
    }
    
<<<<<<< HEAD
    // 5. Contact Form Submission (Google Sheets)
=======
    // Scroll animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('show');
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load
    
    // Login form validation
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            let isValid = true;
            let errorMessage = '';
            
            if (!email || !validateEmail(email)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address.';
            } else if (!password || password.length < 6) {
                isValid = false;
                errorMessage = 'Password must be at least 6 characters.';
            }
            
            if (isValid) {
                showFormMessage('Login successful!', 'success');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 2000);
            } else {
                showFormMessage(errorMessage, 'error');
            }
        });
    }
    
    // Contact form validation and Google Sheets submission
>>>>>>> 5f5f97a624a4e83791eb84b0c64e20675c33628a
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            let isValid = true;
            let errorMessage = '';
            
<<<<<<< HEAD
            // Validation: Subject and Email removed per your request
=======
>>>>>>> 5f5f97a624a4e83791eb84b0c64e20675c33628a
            if (!name || name.length < 2) {
                isValid = false;
                errorMessage = 'Please enter your name.';
            } else if (!message || message.length < 10) {
                isValid = false;
                errorMessage = 'Please enter a message (minimum 10 characters).';
            }
            
            if (isValid) {
                // UI feedback: Disable button while sending
<<<<<<< HEAD
                const submitBtn = contactForm.querySelector('button[type="submit"]') || document.getElementById('submit');
=======
                const submitBtn = contactForm.querySelector('button[type="submit"]');
>>>>>>> 5f5f97a624a4e83791eb84b0c64e20675c33628a
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;

<<<<<<< HEAD
                // Send data to Google Sheets script
=======
                // Send data to Google Sheets
>>>>>>> 5f5f97a624a4e83791eb84b0c64e20675c33628a
                fetch(scriptURL, { method: 'POST', body: new FormData(contactForm)})
                .then(response => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
<<<<<<< HEAD
                    showFormMessage('Your message has been sent successfully!', 'success');
=======
                    showFormMessage('Your message has been sent to our records!', 'success');
>>>>>>> 5f5f97a624a4e83791eb84b0c64e20675c33628a
                    contactForm.reset();
                    console.log("Success!", response);
                })
                .catch(error => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    showFormMessage('Submission failed. Please try again.', 'error');
                    console.error('Error!', error.message);
                });
            } else {
                showFormMessage(errorMessage, 'error');
            }
        });
    }
    
    // 6. Project gallery filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

<<<<<<< HEAD
/**
 * Shared Helper Functions
 */

function showFormMessage(message, type) {
    const formMessage = document.querySelector('.form-message') || createMessageElement();
    
    formMessage.textContent = message;
    formMessage.className = 'form-message'; // Reset classes
    formMessage.classList.add(type === 'success' ? 'success-message' : 'error-message');
    formMessage.style.opacity = '1';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        formMessage.style.opacity = '0';
        setTimeout(() => {
            formMessage.remove();
        }, 300);
=======
// Helper and Shared Functions
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function showFormMessage(message, type) {
    const formMessage = document.querySelector('.form-message') || createMessageElement();
    formMessage.textContent = message;
    formMessage.className = 'form-message'; // Reset
    formMessage.classList.add(type === 'success' ? 'success-message' : 'error-message');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        if (formMessage) {
            formMessage.style.opacity = '0';
            setTimeout(() => formMessage.remove(), 300);
        }
>>>>>>> 5f5f97a624a4e83791eb84b0c64e20675c33628a
    }, 5000);
}

function createMessageElement() {
    const messageElement = document.createElement('div');
    messageElement.className = 'form-message';
<<<<<<< HEAD
    
    // Add it to the form container
    const formContainer = document.querySelector('.form-container') || document.body;
    formContainer.insertBefore(messageElement, formContainer.firstChild);
    
    return messageElement;
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
=======
    const formContainer = document.querySelector('.form-container') || document.body;
    formContainer.insertBefore(messageElement, formContainer.firstChild);
    return messageElement;
}
>>>>>>> 5f5f97a624a4e83791eb84b0c64e20675c33628a
