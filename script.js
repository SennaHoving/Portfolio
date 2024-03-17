let navButton = document.querySelector('nav button');
let nav = document.querySelector('nav');
let navA = document.querySelectorAll('nav div a');

navButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    navButton.classList.toggle('open');
});

navA.forEach(navA => {
        navA.addEventListener('click', () => {
        nav.classList.remove('open');
    });
})

let options = {
    root: null, 
    rootMargin: "0px",
    threshold: 0
}

const observer = new IntersectionObserver (entries =>  {
    entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        })
}, options);

const hiddenElements = document.querySelectorAll(".load");
hiddenElements.forEach(hiddenElement => observer.observe(hiddenElement));