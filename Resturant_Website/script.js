/* ==================== MOBILE MENU TOGGLE ==================== */

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

/* ==================== SMOOTH SCROLLING FOR NAVBAR ==================== */

// This is handled by the CSS scroll-behavior: smooth

/* ==================== FORM SUBMISSION HANDLERS ==================== */

// Reservation Form
const reservationForm = document.getElementById('reservationForm');
if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(reservationForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Reservation Data:', data);
        
        // Show success message (you can customize this)
        alert('✅ Reservation request received! We will confirm via email shortly.');
        
        // Reset form
        reservationForm.reset();
    });
}

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Contact Data:', data);
        
        // Show success message
        alert('✅ Message sent successfully! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Newsletter Form
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        console.log('Newsletter Subscription:', email);
        alert('✅ Thank you for subscribing! Check your email for updates.');
        
        newsletterForm.reset();
    });
}

/* ==================== ORDER BUTTON HANDLERS ==================== */

const orderButtons = document.querySelectorAll('.btn-order');
orderButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get the menu card title
        const menuCard = button.closest('.menu-card');
        const title = menuCard.querySelector('.menu-card-title').textContent;
        
        // You can add to cart, show modal, or navigate to checkout
        alert(`🛒 "${title}" added to cart!`);
        
        // Add a visual feedback
        button.textContent = 'Added ✓';
        button.style.backgroundColor = '#16a34a';
        
        setTimeout(() => {
            button.textContent = 'Order';
            button.style.backgroundColor = '';
        }, 2000);
    });
});

/* ==================== STICKY NAVBAR EFFECTS ==================== */

const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add shadow to navbar on scroll
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
    
    lastScrollTop = scrollTop;
});

/* ==================== INTERSECTION OBSERVER FOR ANIMATIONS ==================== */

// Create an Intersection Observer to trigger animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInLeft 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('.section-header, .about-content, .contact-form-section, .contact-info-section').forEach(el => {
    observer.observe(el);
});

/* ==================== SIGN UP BUTTON ==================== */

const signUpButton = document.querySelector('.btn-signup');
if (signUpButton) {
    signUpButton.addEventListener('click', () => {
        alert('Sign Up feature coming soon! For now, use the contact form.');
    });
}

/* ==================== CTA BUTTONS ==================== */

const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
ctaButtons.forEach(button => {
    // Add ripple effect on click
    button.addEventListener('click', function(e) {
        if (this.textContent.includes('Order') || this.textContent.includes('Reserve')) {
            // Handled by specific form handlers
            return;
        }
        
        // For demo purposes
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        console.log(`Button clicked: "${this.textContent}" at position (${x}, ${y})`);
    });
});

/* ==================== CATEGORY CARD INTERACTION ==================== */

const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const categoryName = card.querySelector('.category-name').textContent;
        console.log(`Category selected: ${categoryName}`);
        // You could scroll to relevant menu items or filter the menu
        const menuSection = document.getElementById('menu');
        menuSection.scrollIntoView({ behavior: 'smooth' });
    });
});

/* ==================== ACCESSIBILITY - FOCUS MANAGEMENT ==================== */

// Improve keyboard navigation
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

/* ==================== UTILITY: SCROLL TO TOP ==================== */

// Optional: Add scroll to top button (uncomment if needed)
// Create a scroll-to-top button
function createScrollToTopButton() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scrollTopBtn';
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: #22C55E;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(scrollTopBtn);
    
    // Show button when scrolled down
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'flex';
            scrollTopBtn.style.alignItems = 'center';
            scrollTopBtn.style.justifyContent = 'center';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });
    
    // Scroll to top on click
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Hover effects
    scrollTopBtn.addEventListener('mouseover', () => {
        scrollTopBtn.style.transform = 'translateY(-5px)';
        scrollTopBtn.style.boxShadow = '0 6px 16px rgba(34, 197, 94, 0.4)';
    });
    
    scrollTopBtn.addEventListener('mouseout', () => {
        scrollTopBtn.style.transform = 'translateY(0)';
        scrollTopBtn.style.boxShadow = '0 4px 12px rgba(34, 197, 94, 0.3)';
    });
}

// Initialize scroll-to-top button
createScrollToTopButton();

/* ==================== PERFORMANCE: LAZY LOADING IMAGES ==================== */

// Add lazy loading to images (optional, for better performance)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

/* ==================== FORM VALIDATION FEEDBACK ==================== */

const allInputs = document.querySelectorAll('input, textarea, select');
allInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.type === 'email' && input.value) {
            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                input.style.borderColor = '#ff6b6b';
            } else {
                input.style.borderColor = '';
            }
        }
    });
    
    input.addEventListener('focus', () => {
        input.style.borderColor = '';
    });
});

/* ==================== CONSOLE WELCOME MESSAGE ==================== */

console.log('%c🍽️ Welcome to Foodly Restaurant!', 'font-size: 20px; font-weight: bold; color: #22C55E;');
console.log('%cEnjoy our premium dining experience with fresh ingredients and authentic taste.', 'font-size: 14px; color: #666;');
