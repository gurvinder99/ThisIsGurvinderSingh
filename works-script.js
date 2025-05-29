        // Initialize GSAP and ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        document.addEventListener('DOMContentLoaded', () => {
            // Custom cursor
            const cursor = document.getElementById('cursor');
            
            // Update cursor position
            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });
            
            // Cursor hover effects
            const hoverables = document.querySelectorAll('a, button, .project-card, .btn, .close-btn');
            hoverables.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursor.classList.add('cursor-hover');
                });
                
                el.addEventListener('mouseleave', () => {
                    cursor.classList.remove('cursor-hover');
                });
            });
            
            // Cursor active effects
            const clickables = document.querySelectorAll('button, .project-card, .btn, .close-btn');
            clickables.forEach(el => {
                el.addEventListener('mousedown', () => {
                    cursor.classList.add('cursor-active');
                });
                
                el.addEventListener('mouseup', () => {
                    cursor.classList.remove('cursor-active');
                });
            });

            // Hero animations
            gsap.to('.hero-title', {
                duration: 1.5,
                y: 0,
                opacity: 1,
                ease: 'expo.out',
                delay: 0.3
            });

            gsap.to('.hero-subtitle', {
                duration: 1.2,
                y: 0,
                opacity: 1,
                ease: 'expo.out',
                delay: 0.8
            });

            gsap.to('.hero-scroll-indicator', {
                duration: 1,
                opacity: 1,
                delay: 1.5
            });

            // Section title animation
            gsap.to('.section-title', {
                scrollTrigger: {
                    trigger: '.projects-section',
                    start: 'top 85%'
                },
                duration: 1.2,
                y: 0,
                opacity: 1,
                ease: 'expo.out'
            });

            // Project card animations
            gsap.to('.project-card', {
                scrollTrigger: {
                    trigger: '.project-card',
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                duration: 1,
                y: 0,
                opacity: 1,
                scale: 1,
                stagger: 0.1,
                ease: 'expo.out'
            });

            // Card click effects
            document.querySelectorAll('.project-card').forEach(card => {
                card.addEventListener('click', (e) => {
                    // Close any other open cards
                    document.querySelectorAll('.project-card').forEach(otherCard => {
                        if (otherCard !== card && otherCard.classList.contains('active')) {
                            otherCard.classList.remove('active');
                        }
                    });
                    
                    // Toggle current card
                    card.classList.toggle('active');
                    
                    // Add overflow hidden to body when card is active
                    if (card.classList.contains('active')) {
                        document.body.style.overflow = 'hidden';
                    } else {
                        document.body.style.overflow = '';
                    }
                });
                
                // Close button
                const closeBtn = card.querySelector('.close-btn');
                if (closeBtn) {
                    closeBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        card.classList.remove('active');
                        document.body.style.overflow = '';
                    });
                }
            });

            // Close card when clicking outside
            document.addEventListener('click', (e) => {
                const activeCard = document.querySelector('.project-card.active');
                if (activeCard && !activeCard.contains(e.target)) {
                    activeCard.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });

            // Scroll-based hero text animation
            gsap.to(".hero-title", {
                scrollTrigger: {
                    trigger: ".projects-section",
                    start: "top 40%",
                    end: "top 10%",
                    scrub: true,
                },
                y: -100,
                scale: 0.9,
                opacity: 0.5
            });
            
            gsap.to(".hero-subtitle", {
                scrollTrigger: {
                    trigger: ".projects-section",
                    start: "top 40%",
                    end: "top 10%",
                    scrub: true,
                },
                y: -80,
                opacity: 0
            });
        });