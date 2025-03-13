// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Function to embed Google Form
    function embedGoogleForm() {
        const surveyContainer = document.querySelector('.survey__container');
        
        if (surveyContainer) {
            // Remove loading message
            const loadingMessage = document.querySelector('.survey__loading');
            if (loadingMessage) {
                loadingMessage.remove();
            }
            
            // Create container for Google Form
            const formContainer = document.createElement('div');
            formContainer.className = 'google-form-container';
            
            // Create iframe for Google Form
            const formIframe = document.createElement('iframe');
            formIframe.src = 'https://docs.google.com/forms/d/e/1FAIpQLSeD3GKI_IbwlrwurFXrzZIJmnykHv63qNjGO-g-FAw064dwWw/viewform?embedded=true';
            formIframe.title = 'AI Workshop Registration Form';
            formIframe.setAttribute('frameborder', '0');
            formIframe.setAttribute('marginheight', '0');
            formIframe.setAttribute('marginwidth', '0');
            
            // Add iframe to container
            formContainer.appendChild(formIframe);
            
            // Add container to survey section
            surveyContainer.appendChild(formContainer);
        }
    }
    
    // Mobile navigation toggle
    function setupMobileNav() {
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        const navList = document.querySelector('.nav__list');
        
        if (mobileNavToggle && navList) {
            mobileNavToggle.addEventListener('click', function() {
                // Toggle navigation visibility
                navList.classList.toggle('nav__list--active');
                
                // Toggle hamburger animation
                this.classList.toggle('mobile-nav-toggle--active');
                
                // Toggle aria-expanded attribute for accessibility
                const expanded = this.getAttribute('aria-expanded') === 'true' || false;
                this.setAttribute('aria-expanded', !expanded);
            });
            
            // Close mobile nav when clicking on a link
            const navLinks = navList.querySelectorAll('.nav__link');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    if (window.innerWidth <= 576) {
                        navList.classList.remove('nav__list--active');
                        mobileNavToggle.classList.remove('mobile-nav-toggle--active');
                        mobileNavToggle.setAttribute('aria-expanded', 'false');
                    }
                });
            });
        }
    }
    
    // Smooth scrolling for navigation links
    function setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href !== '#') {
                    const targetElement = document.querySelector(href);
                    
                    if (targetElement) {
                        e.preventDefault();
                        
                        const headerHeight = document.querySelector('.header').offsetHeight;
                        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }
    
    // Add animation to elements when they come into view
    function setupScrollAnimations() {
        // Elements to animate
        const animateElements = document.querySelectorAll('.feature-card, .instructor-card, .about__image, .about__text, .faq-item');
        
        // Create IntersectionObserver
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    // Unobserve after animation is triggered
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observe each element
        animateElements.forEach(element => {
            element.classList.add('animate-element');
            observer.observe(element);
        });
    }
    
    // Setup FAQ accordion functionality
    function setupFaqAccordion() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-item__question');
            
            if (question) {
                question.addEventListener('click', () => {
                    // Toggle current item
                    item.classList.toggle('active');
                });
            }
        });
    }
    
    // Initialize functions
    embedGoogleForm();
    setupSmoothScrolling();
    setupMobileNav();
    setupScrollAnimations();
    setupFaqAccordion();
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-element {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .mobile-nav-toggle--active span:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }
        
        .mobile-nav-toggle--active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-nav-toggle--active span:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
        
        .nav__list--active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: white;
            padding: 1rem;
            box-shadow: var(--shadow);
            z-index: 99;
            animation: slideDown 0.3s ease forwards;
        }
        
        /* FAQ Accordion Styles */
        .faq__grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            width: 100%;
        }
        
        .faq-item {
            break-inside: avoid;
            page-break-inside: avoid;
            width: 100%;
            transition: none;
        }
        
        .faq-item__question {
            cursor: pointer;
            width: 100%;
        }
        
        .faq-item__answer {
            display: none;
            padding: 1rem;
            width: 100%;
        }
        
        .faq-item.active .faq-item__answer {
            display: block;
        }
        
        .faq-toggle {
            transition: transform 0.3s ease;
        }
        
        .faq-item.active .faq-toggle {
            transform: rotate(45deg);
        }
        
        @media (max-width: 768px) {
            .faq__grid {
                grid-template-columns: 1fr;
            }
        }
        
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}); 