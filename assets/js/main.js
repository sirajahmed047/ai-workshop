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
        // Add mobile navigation functionality
        const header = document.querySelector('.header');
        const navList = document.querySelector('.nav__list');
        
        // Create mobile menu button
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.setAttribute('aria-label', 'Toggle navigation menu');
        mobileMenuBtn.innerHTML = '<span></span><span></span><span></span>';
        
        // Only add mobile menu on smaller screens
        if (window.innerWidth <= 768) {
            header.querySelector('.container').appendChild(mobileMenuBtn);
            navList.classList.add('nav__list--mobile');
            
            // Toggle menu on click
            mobileMenuBtn.addEventListener('click', function() {
                navList.classList.toggle('nav__list--active');
                mobileMenuBtn.classList.toggle('mobile-menu-btn--active');
            });
            
            // Close menu when clicking on a link
            const navLinks = document.querySelectorAll('.nav__link');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navList.classList.remove('nav__list--active');
                    mobileMenuBtn.classList.remove('mobile-menu-btn--active');
                });
            });
        }
        
        // Update on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth <= 768) {
                if (!document.querySelector('.mobile-menu-btn')) {
                    header.querySelector('.container').appendChild(mobileMenuBtn);
                    navList.classList.add('nav__list--mobile');
                }
            } else {
                const existingBtn = document.querySelector('.mobile-menu-btn');
                if (existingBtn) {
                    existingBtn.remove();
                }
                navList.classList.remove('nav__list--mobile');
                navList.classList.remove('nav__list--active');
            }
        });
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
    
    // Add animation on scroll
    function setupScrollAnimation() {
        const sections = document.querySelectorAll('section');
        
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section--visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        sections.forEach(section => {
            section.classList.add('section--hidden');
            observer.observe(section);
        });
    }
    
    // Setup FAQ accordion
    function setupFAQ() {
        const faqItems = document.querySelectorAll('.faq__item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq__question');
            
            question.addEventListener('click', () => {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        });
    }
    
    // Initialize functions
    embedGoogleForm();
    setupSmoothScrolling();
    setupMobileNav();
    setupScrollAnimation();
    setupFAQ();
}); 