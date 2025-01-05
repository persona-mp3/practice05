//get all nav links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((linkEl) => {

    //make sure blur is added removed from mouse over
    // linkEl.classList.add('blur');
    linkEl.addEventListener('mouseover', () => {
        
        navLinks.forEach((otherLink) => {
            if (otherLink !== linkEl ) {
                otherLink.classList.add('blur')
            }
        })
    })
    
    linkEl.addEventListener('mouseout', () => {
        navLinks.forEach((otherLink) => {
            otherLink.classList.remove('blur')
        })
    })
})
