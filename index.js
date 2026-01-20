// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Navigation scroll effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
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
    
    // Project Showcase Slider
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
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
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
    
    // Add click events to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Add click events to buttons
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // Start slideshow
    if (slides.length > 0) {
        slideTimer = setInterval(nextSlide, slideInterval);
    }
    
    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const tDots = document.querySelectorAll('.t-dot');
    let currentTestimonial = 0;
    const testimonialInterval = 6000;
    let testimonialTimer;
    
    function showTestimonial(n) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        tDots.forEach(dot => dot.classList.remove('active'));
        
        currentTestimonial = (n + testimonials.length) % testimonials.length;
        
        testimonials[currentTestimonial].classList.add('active');
        tDots[currentTestimonial].classList.add('active');
        
        // Reset timer
        clearInterval(testimonialTimer);
        testimonialTimer = setInterval(nextTestimonial, testimonialInterval);
    }
    
    function nextTestimonial() {
        showTestimonial(currentTestimonial + 1);
    }
    
    // Add click events to testimonial dots
    tDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
    });
    
    // Start testimonial rotation
    if (testimonials.length > 0) {
        testimonialTimer = setInterval(nextTestimonial, testimonialInterval);
    }
    
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
            
            // Basic validation
            if (!email || !validateEmail(email)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address.';
            } else if (!password || password.length < 6) {
                isValid = false;
                errorMessage = 'Password must be at least 6 characters.';
            }
            
            if (isValid) {
                // In a real scenario, you'd send this to a server
                // For demo purposes, simulating success
                showFormMessage('Login successful!', 'success');
                // Redirect after 2 seconds
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 2000);
            } else {
                showFormMessage(errorMessage, 'error');
            }
        });
    }
    
    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            let isValid = true;
            let errorMessage = '';
            
            // Basic validation
            if (!name || name.length < 2) {
                isValid = false;
                errorMessage = 'Please enter your name.';
            } else if (!email || !validateEmail(email)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address.';
            } else if (!message || message.length < 10) {
                isValid = false;
                errorMessage = 'Please enter a message (minimum 10 characters).';
            }
            
            if (isValid) {
                // In a real scenario, you'd send this to a server
                // For demo purposes, simulating success
                showFormMessage('Your message has been sent. We\'ll get back to you soon!', 'success');
                contactForm.reset();
            } else {
                showFormMessage(errorMessage, 'error');
            }
        });
    }
    
    // Project gallery filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
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
    
    // Helper functions
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    function showFormMessage(message, type) {
        const formMessage = document.querySelector('.form-message') || createMessageElement();
        
        formMessage.textContent = message;
        formMessage.className = 'form-message'; // Reset classes
        formMessage.classList.add(type === 'success' ? 'success-message' : 'error-message');
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            formMessage.style.opacity = '0';
            setTimeout(() => {
                formMessage.remove();
            }, 300);
        }, 5000);
    }
    
    function createMessageElement() {
        const messageElement = document.createElement('div');
        messageElement.className = 'form-message';
        
        // Add it to the form or its container
        const formContainer = document.querySelector('.form-container') || document.body;
        formContainer.insertBefore(messageElement, formContainer.firstChild);
        
        return messageElement;
    }
});