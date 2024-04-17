let navButton = document.querySelector('nav button:nth-of-type(2)');
let nav = document.querySelector('nav');
let navA = document.querySelectorAll('nav a');

navButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    navButton.classList.toggle('open');
    if (navButton.textContent === 'Menu') {
        navButton.textContent = "Close";
    } else {
        navButton.textContent = "Menu";
    }
});

navA.forEach(navA => {
        navA.addEventListener('click', () => {
        nav.classList.remove('open');
    });
})

// navHome 
// window.addEventListener('scroll', function() {
//     if (window.scrollY > 500) {
//         nav.classList.add('clear');
//     } else {
//         nav.classList.remove('clear');
//     }
// });

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