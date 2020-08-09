titleImg = document.querySelector('#titleImg');
const faders = document.querySelectorAll('.fadein');


// Triggers Fade Into View
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);
  
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

//Functions

const scrollToChosenElement = (className) => {
    const element = document.querySelector(`.${className}`);
    element.scrollIntoView({behavior: "smooth", block: "center"});
}


//  UIEvents


window.onscroll = () => {
    if(scrollY > window.innerHeight){
        const nav = document.getElementsByTagName('nav');
        nav[0].classList.add('fixed');
        nav[0].style.background = 'transparent';
    } else {
        const nav = document.getElementsByTagName('nav');
        nav[0].classList.remove('fixed');
        nav[0].style.background = 'var(--lgreen)';
    }
}
