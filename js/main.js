const navLinks = document.querySelectorAll('.link');
const redirect = document.querySelector('.caption');
const cardAnimate = document.querySelector('.book-card');
const authorDetails = document.querySelector('.author-details');


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

function animateAuthor(){
    gsap.to('.author-details', 
        {
            duration: 0.64, 
            x: '134%', 
            ease: 'power2.out',
            onComplete: () => {authorDetails.classList.add('visible')}
        })
};


let isCardHovered = true;  //check if card is hovered;
let isAuthorDetailsHovered = true; //check if details is hovered

function revertAuthor(){

    if (!isAuthorDetailsHovered && !isCardHovered){
        gsap.to('.author-details', {
            duration: 0.5,
            x: '0%',
            ease: 'back.in',
            onComplete: () => {
                authorDetails.classList.remove('visible')
            }
        })
    }

}


cardAnimate.addEventListener('mouseenter', () => {
    authorDetails.classList.remove('invisible')
    authorDetails.classList.add('visible')
    isCardHovered = true;
    animateAuthor()
})

cardAnimate.addEventListener('mouseleave', () => {
    authorDetails.classList.add('invisible')
    isCardHovered = false;
    revertAuthor()
 
});

authorDetails.addEventListener('mouseenter', () => {
    // authorDetails.classList.remove('invisible');
    authorDetails.classList.add('remain');
    isAuthorDetailsHovered = true;
});

authorDetails.addEventListener('mouseleave', () => {
    authorDetails.classList.remove('remain');
    isAuthorDetailsHovered = false;
    revertAuthor()
})

