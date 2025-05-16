// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', function() {
        navUl.classList.toggle('show');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navUl.classList.contains('show')) {
                    navUl.classList.remove('show');
                }
            }
        });
    });
    
    // Highlight current page in navigation
    const currentPage = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        if (currentPage === linkHref) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Simple hover effect for post cards
    const postCards = document.querySelectorAll('.post-card');
    
    postCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.read-more').style.color = 'var(--accent-color)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.read-more').style.color = '';
        });
    });
});