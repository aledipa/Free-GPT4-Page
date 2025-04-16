// Simple animation for the hero section
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('section');
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        hero.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }, 100);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});