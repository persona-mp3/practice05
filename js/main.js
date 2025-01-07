const navLinks = document.querySelectorAll('.link');
const redirect = document.querySelector('.caption');

navLinks.forEach((link) => {
    link.addEventListener('click', ()=>{
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active')
    });
});

redirect.addEventListener('click', () => {
    window.location.href = 'index.html'
})

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

})

gsap.from('.image-container', {
    scrollTrigger : {
        trigger: '.image-container',
        toggleActions: 'play none none none',
    },

    duration: 2.5,
    x: '-300%',
    ease: 'expo'
});

