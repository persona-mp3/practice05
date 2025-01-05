document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

})

// gsap.from('.image-container', {duration: 3.5, x: '400%', ease: 'expo'});
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

let elements = document.querySelectorAll('.text');
elements.forEach((element) => {
    //get inner text
    const innerText = element.innerText
    element.innerHTML = ''; //?

    let textContainer = document.createElement('div');  //create div element for each word
    textContainer.classList.add('block');       //add block class to each div for each letter


    for (let character of innerText) {
        let span = document.createElement('span');
        span.innerText = character.trim() === ""?"/xa0" : character;
        span.classList.add('letter');

        textContainer.appendChild(span);

    }

    element.appendChild(textContainer);
    element.appendChild(textContainer.cloneNode(true));
});

elements.addEventListener('mouseover', () => {
    element.classList.remove('play')})
