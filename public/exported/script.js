document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const header = document.getElementById('header');
    const burgerBtn = document.getElementById('burgerBtn');
    const headerNav = document.getElementById('headerNav');
    const headerOverlay = document.getElementById('headerOverlay');
    const headerMenuLinks = document.querySelectorAll('.header__menu-link');
    const consultBtn = document.getElementById('consultBtn');
    const heroBtn = document.getElementById('heroBtn');
    const whyChooseCards = document.querySelectorAll('.why-choose__card');
    
    // Create mobile navigation
    function createMobileNav() {
        const mobileNav = document.createElement('nav');
        mobileNav.className = 'header__nav--mobile';
        mobileNav.id = 'mobileNav';
        mobileNav.innerHTML = headerNav.innerHTML;
        document.querySelector('.header').appendChild(mobileNav);
        
        // Add click handlers to mobile nav links
        const mobileLinks = mobileNav.querySelectorAll('.header__menu-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                closeMobileMenu();
                
                setTimeout(() => {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }, 300);
            });
        });
        
        return mobileNav;
    }
    
    const mobileNav = createMobileNav();
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        burgerBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
        headerOverlay.classList.toggle('active');
        
        if (mobileNav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    // Close mobile menu
    function closeMobileMenu() {
        burgerBtn.classList.remove('active');
        mobileNav.classList.remove('active');
        headerOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Event handlers
    burgerBtn.addEventListener('click', toggleMobileMenu);
    headerOverlay.addEventListener('click', closeMobileMenu);
    
    // Desktop navigation smooth scroll
    headerMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // CTA buttons handler
    function handleConsultationClick() {
        const contactsSection = document.querySelector('#contacts');
        if (contactsSection) {
            contactsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    if (consultBtn) consultBtn.addEventListener('click', handleConsultationClick);
    if (heroBtn) heroBtn.addEventListener('click', handleConsultationClick);
    
    // Card hover/touch animations
    whyChooseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
        
        // Mobile touch toggle
        card.addEventListener('click', function() {
            if (window.innerWidth < 768) {
                this.classList.toggle('active');
            }
        });
    });
    
    // Header scroll shadow effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Close menu on resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && mobileNav.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Close menu on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Intersection Observer for card animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards for scroll animation
    whyChooseCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});