let navButton = document.querySelector('nav button');
let navMenu = document.querySelector('nav div');

navButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

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