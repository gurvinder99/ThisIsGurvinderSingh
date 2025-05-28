 document.addEventListener('DOMContentLoaded', () => {
            // Register GSAP plugins
            gsap.registerPlugin(ScrollTrigger);
            
            // Cursor effect
            const cursor = document.querySelector('.cursor');
            
            document.addEventListener('mousemove', (e) => {
                gsap.to(cursor, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.1,
                    ease: "power2.out"
                });
            });
            
            // Hover effects
            document.querySelectorAll('a, .photo-item, .fact-card').forEach(el => {
                el.addEventListener('mouseenter', () => {
                    gsap.to(cursor, { scale: 2, duration: 0.3 });
                });
                
                el.addEventListener('mouseleave', () => {
                    gsap.to(cursor, { scale: 1, duration: 0.3 });
                });
            });
            
            // Hero animations
            const heroTitle = document.querySelector('.hero-title');
            const heroSubtitle = document.querySelector('.hero-subtitle');
            
            gsap.from([heroTitle, heroSubtitle], {
                duration: 1.5,
                y: 50,
                opacity: 0,
                stagger: 0.2,
                ease: "power3.out"
            });
            
            // Scroll animations
            gsap.utils.toArray('.section-title').forEach(title => {
                gsap.from(title, {
                    scrollTrigger: {
                        trigger: title,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    },
                    x: -50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out"
                });
                
                gsap.from(title.querySelector('::after'), {
                    scrollTrigger: {
                        trigger: title,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    },
                    scaleX: 1,
                    duration: 1.2,
                    ease: "power3.out"
                });
            });
            
            // Photo grid animation
            gsap.utils.toArray('.photo-item').forEach((item, i) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%",
                        toggleActions: "play none none none"
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: "back.out(1.7)"
                });
            });


// Enhanced Fact Card Hover Animation
gsap.utils.toArray('.fact-card').forEach(card => {
    // Create border element
    const border = document.createElement('div');
    border.style.position = 'absolute';
    border.style.top = '0';
    border.style.left = '0';
    border.style.width = '100%';
    border.style.height = '100%';
    border.style.border = '1px solid var(--primary)';
    border.style.borderRadius = '5px';
    border.style.opacity = '0';
    card.appendChild(border);
    
    // Set initial state
    gsap.set(card, { transformOrigin: "center", position: "relative" });
    gsap.set(border, { scale: 0.9 });
    
    // Hover animation
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
        });
        gsap.to(border, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1,
            duration: 0.3
        });
        gsap.to(border, {
            opacity: 0,
            scale: 0.9,
            duration: 0.4
        });
    });
});
            
            // Facts animation
            gsap.utils.toArray('.fact-card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none none"
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: "back.out(1.7)"
                });
            });



            
            // Footer animation
            gsap.from('.footer-title', {
                scrollTrigger: {
                    trigger: '.footer',
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            });
            
            gsap.from('.footer-link', {
                scrollTrigger: {
                    trigger: '.footer',
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            });
        });