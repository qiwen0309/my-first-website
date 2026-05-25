(function () {
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation triggers (buttons, links with data-nav attribute)
    const navTriggers = document.querySelectorAll('[data-nav]');
    
    // Add click event to each navigation trigger
    navTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target page ID from data-nav attribute
            const targetPageId = this.getAttribute('data-nav');
            
            // Special handling for 'home' - uses 'page-home' as target
            // For all others, target is 'page-' + targetPageId
            let targetId;
            if (targetPageId === 'home') {
                targetId = 'page-home';
            } else {
                targetId = 'page-' + targetPageId;
            }
            
            // Hide all pages
            const allPages = document.querySelectorAll('.page');
            allPages.forEach(page => {
                page.classList.remove('active');
            });
            
            // Show the target page
            const targetPage = document.getElementById(targetId);
            if (targetPage) {
                targetPage.classList.add('active');
                
                // Scroll to top when navigating
                window.scrollTo(0, 0);
            } else {
                console.warn('Page not found:', targetId);
            }
        });
    });
});
})();