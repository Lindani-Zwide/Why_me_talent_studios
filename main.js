// Why Me Talent Studios - Main JavaScript
// Premium interactions and animations

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    new Splide('#hero-slider', {
        type       : 'loop',      // Infinite loop
        autoplay   : true,
        interval   : 6000,
        speed      : 3500,
        arrows     : false,
        pagination : true,
        pauseOnHover: true,
        pauseOnFocus: true,
        drag       : true,
    }).mount();

    initNavigation();
    initHeroAnimations();
    initScrollReveal();
    initCarousels();
    initMobileMenu();
    initSmoothScroll();
});




// // Navigation functionality
// function initNavigation() {
//     const nav = document.querySelector('nav');
//     let lastScrollY = window.scrollY;
    
//     window.addEventListener('scroll', () => {
//         const currentScrollY = window.scrollY;
        
//         // Add/remove blur effect based on scroll position
//         if (currentScrollY > 100) {
//             nav.classList.add('nav-blur');
//         } else {
//             nav.classList.remove('nav-blur');
//         }
        
//         lastScrollY = currentScrollY;
//     });
// }

// Hero section animations
function initHeroAnimations() {
    // Initialize Splitting.js for text animations
    Splitting();
    
    // Animate hero text on load
    anime.timeline({
        easing: 'easeOutExpo',
        duration: 1200
    })
    .add({
        targets: '[data-splitting] .char',
        translateY: [100, 0],
        opacity: [0, 1],
        delay: anime.stagger(50, {start: 500})
    })
    .add({
        targets: '.hero-content .btn-primary, .hero-content .btn-secondary',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(200),
        duration: 800
    }, '-=800');
    
    // Floating animation for decorative elements
    anime({
        targets: '.hero-content .absolute',
        translateY: [-10, 10],
        rotate: [-5, 5],
        duration: 4000,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
    });
}

// Scroll reveal animations
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    // Observe all reveal elements
    document.querySelectorAll('.reveal-up').forEach(el => {
        observer.observe(el);
    });
}

// Carousel initialization
function initCarousels() {
    // Featured talent carousel
    const talentCarousel = document.querySelector('.talent-carousel');
    if (talentCarousel) {
        new Splide(talentCarousel, {
            type: 'loop',
            perPage: 4,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            breakpoints: {
                1024: { perPage: 3 },
                768: { perPage: 2 },
                480: { perPage: 1 }
            }
        }).mount();
    }
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            // Create mobile menu if it doesn't exist
            let mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu) {
                mobileMenu = createMobileMenu();
                nav.appendChild(mobileMenu);
            }
            
            // Toggle menu visibility
            mobileMenu.classList.toggle('hidden');
            
            // Animate menu items
            if (!mobileMenu.classList.contains('hidden')) {
                const menuItems = mobileMenu.querySelectorAll('a');
                anime({
                    targets: menuItems,
                    translateX: [-50, 0],
                    opacity: [0, 1],
                    delay: anime.stagger(100),
                    duration: 400,
                    easing: 'easeOutQuart'
                });
            }
        });
    }
}

// Create mobile menu
function createMobileMenu() {
    const mobileMenu = document.createElement('div');
    mobileMenu.id = 'mobile-menu';
    mobileMenu.className = 'show md:show absolute top-full left-0 right-0 bg-white shadow-lg py-4';
    mobileMenu.innerHTML = `
        <div class="px-6 py-4 space-y-4">
            <a href="#home" class="block text-soft-black hover:text-muted-gold transition-colors">Home</a>
            <a href="talent.html" class="block text-soft-black hover:text-muted-gold transition-colors">Talent</a>
            <a href="about.html" class="block text-soft-black hover:text-muted-gold transition-colors">About</a>
            <a href="contact.html" class="block text-soft-black hover:text-muted-gold transition-colors">Contact</a>
        </div>
    `;
    return mobileMenu;
}

// Smooth scroll functionality
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Category card interactions
function initCategoryCards() {
    const cards = document.querySelectorAll('.category-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            anime({
                targets: card.querySelector('img'),
                scale: 1.1,
                duration: 600,
                easing: 'easeOutQuart'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            anime({
                targets: card.querySelector('img'),
                scale: 1,
                duration: 600,
                easing: 'easeOutQuart'
            });
        });
    });
}

// Button hover effects
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            anime({
                targets: button,
                scale: 1.05,
                duration: 300,
                easing: 'easeOutQuart'
            });
        });
        
        button.addEventListener('mouseleave', () => {
            anime({
                targets: button,
                scale: 1,
                duration: 300,
                easing: 'easeOutQuart'
            });
        });
    });
}

// Parallax effect for hero background
function initParallax() {
    const hero = document.querySelector('.hero-bg');
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        hero.style.transform = `translateY(${rate}px)`;
    });
}

// Liquid background animation
function initLiquidBackground() {
    const liquidBg = document.querySelector('.liquid-bg');
    if (!liquidBg) return;
    
    // Create multiple animated layers
    for (let i = 0; i < 3; i++) {
        const layer = document.createElement('div');
        layer.style.position = 'absolute';
        layer.style.width = '100%';
        layer.style.height = '100%';
        layer.style.background = `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, rgba(201, 169, 97, 0.05) 0%, transparent 50%)`;
        layer.style.animation = `liquidFlow ${15 + i * 5}s ease-in-out infinite`;
        layer.style.animationDelay = `${i * 2}s`;
        liquidBg.appendChild(layer);
    }
}

// Initialize additional effects after DOM load
document.addEventListener('DOMContentLoaded', function() {
    initCategoryCards();
    initButtonEffects();
    initParallax();
    initLiquidBackground();
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
const debouncedScroll = debounce(() => {
    // Handle scroll events efficiently
}, 16); // ~60fps


// Initialize preloading
preloadImages();