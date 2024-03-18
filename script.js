let navButton = document.querySelector('nav button');
let nav = document.querySelector('nav');
let navA = document.querySelectorAll('nav div a');
let navHome = document.querySelector('header nav > a');

navButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    navButton.classList.toggle('open');
});

navA.forEach(navA => {
        navA.addEventListener('click', () => {
        nav.classList.remove('open');
    });
})

// navHome 
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        navHome.classList.add('hidden');
    } else {
        navHome.classList.remove('hidden');
    }
});

// intersectionObserver
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

// sliderHome
let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slides img');
    for (let i = 0; i < slides.length; i++) {
        if (slideIndex > slides.length) {
            slideIndex = 1
        } else {
            slides[i].style.display = "none";  
        }
    }
    slideIndex++;
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000);
}

showSlides();