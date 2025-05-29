        document.addEventListener('DOMContentLoaded', () => {
            // Register GSAP plugins
            gsap.registerPlugin(ScrollTrigger);

            // Create interactive background bubbles
            const bg = document.getElementById('interactiveBg');
            for (let i = 0; i < 20; i++) {
                const bubble = document.createElement('div');
                bubble.classList.add('bg-bubble');
                
                const size = Math.random() * 200 + 50;
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                const opacity = Math.random() * 0.3 + 0.1;
                
                bubble.style.width = `${size}px`;
                bubble.style.height = `${size}px`;
                bubble.style.left = `${x}%`;
                bubble.style.top = `${y}%`;
                bubble.style.opacity = opacity;
                
                bg.appendChild(bubble);
            }

            // Mouse move effects
            document.addEventListener('mousemove', (e) => {
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;
                
                // Move background slightly
                gsap.to('.interactive-bg', {
                    backgroundPosition: `${x * 20}px ${y * 20}px`,
                    duration: 1,
                    ease: "power2.out"
                });
                
                // Move bubbles opposite to mouse
                gsap.to('.bg-bubble', {
                    x: -e.movementX * 0.5,
                    y: -e.movementY * 0.5,
                    duration: 2,
                    ease: "power2.out"
                });
            });

            // Scroll-triggered animations with different speeds
            gsap.utils.toArray('.foreground-element').forEach(el => {
                gsap.to(el, {
                    scrollTrigger: {
                        trigger: '.scroll-container',
                        start: "top top",
                        end: "bottom bottom",
                        scrub: true
                    },
                    y: 200,
                    ease: "none"
                });
            });

            gsap.utils.toArray('.background-element').forEach(el => {
                gsap.to(el, {
                    scrollTrigger: {
                        trigger: '.scroll-container',
                        start: "top top",
                        end: "bottom bottom",
                        scrub: true
                    },
                    y: 50,
                    ease: "none"
                });
            });

            // Skill cards animations
            gsap.utils.toArray('.skill-card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end: "top 50%",
                        toggleActions: "play none none none"
                    },
                    y: 100,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: "back.out(1.7)"
                });

                // Tilt effect on hover
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    gsap.to(card, {
                        rotationY: ((x - centerX) / centerX) * 5,
                        rotationX: ((centerY - y) / centerY) * -5,
                        transformPerspective: 1000,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        rotationY: 0,
                        rotationX: 0,
                        duration: 0.7,
                        ease: "elastic.out(1, 0.5)"
                    });
                });
            });

            // Hero section animations
            gsap.from('.hero-title', {
                scrollTrigger: {
                    trigger: '.aquatic-hero',
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                },
                y: 100,
                opacity: 0,
                ease: "none"
            });

            gsap.from('.hero-subtitle', {
                scrollTrigger: {
                    trigger: '.aquatic-hero',
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                },
                y: 100,
                opacity: 0,
                delay: 0.2,
                ease: "none"
            });

            // Contact section animations
            gsap.from('.contact-title', {
                scrollTrigger: {
                    trigger: '.aquatic-contact',
                    start: "top bottom",
                    end: "top center",
                    scrub: true
                },
                y: 100,
                opacity: 0,
                ease: "power2.out"
            });

            gsap.from('.contact-link', {
                scrollTrigger: {
                    trigger: '.aquatic-contact',
                    start: "top bottom",
                    end: "top center",
                    scrub: true
                },
                y: 50,
                opacity: 0,
                stagger: 0.1,
                ease: "power2.out"
            });
        });