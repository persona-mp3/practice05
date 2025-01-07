const navLinks = document.querySelectorAll('.link');
navLinks.forEach((link) => {
    link.addEventListener('click', ()=>{
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active')
    });

    // link.addEventListener('')
});

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

})

gsap.from('.image-container', {
    scrollTrigger : {
        trigger: '.image-container',
        toggleActions: 'play none none none',
        // scrub: 1,
    },

    duration: 2.5,
    x: '-300%',
    ease: 'expo'
});

