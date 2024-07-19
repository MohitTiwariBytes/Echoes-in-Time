document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.event').forEach(event => {
        gsap.fromTo(event, 
            { opacity: 0, y: 50 }, // from properties
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.5,
                scrollTrigger: {
                    trigger: event,
                    start: "top 80%", 
                    end: "bottom 60%", 
                    toggleActions: "play none none reverse",
                }
            }
        );

        const textElements = event.querySelectorAll('h2, p');
        textElements.forEach(text => {
            gsap.fromTo(text, 
                { opacity: 0, y: 20 }, // from properties
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: event,
                        start: "top 80%", 
                        end: "bottom 60%", 
                        toggleActions: "play none none reverse",
                    }
                }
            );
        });
    });
});
