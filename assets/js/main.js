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
    
    // Mobile navigation toggle (if needed in the future)
    function setupMobileNav() {
        // This is a placeholder for future mobile navigation functionality
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
                        
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }
    
    // Initialize functions
    embedGoogleForm();
    setupSmoothScrolling();
    setupMobileNav();
}); 