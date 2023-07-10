const the_animationx = document.querySelectorAll('.hiddenx')
const observerx = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showx')
        }
            else {
                entry.target.classList.remove('showx')
            }
        
    })
});

const the_animationy = document.querySelectorAll('.hiddeny')
const observery = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showy')
        }
            else {
                entry.target.classList.remove('showy')
            }
        
    })
});
for (let i = 0; i < the_animationx.length; i++) {
    const elements = the_animationx[i];
    observerx.observe(elements);
} 
for (let i = 0; i < the_animationy.length; i++) {
    const elements = the_animationy[i];
    observery.observe(elements);
}  