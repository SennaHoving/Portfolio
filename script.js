let navButton = document.querySelector('nav button:nth-of-type(2)');
let nav = document.querySelector('nav');
let navA = document.querySelectorAll('nav a');
let slides = document.querySelectorAll('.slides img');

navButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    navButton.classList.toggle('open');
    if (navButton.textContent === 'Menu') {
        navButton.textContent = "Close";
    } else {
        navButton.textContent = "Menu";
    }
});

// Nav button 
navA.forEach(navA => {
        navA.addEventListener('click', () => {
        nav.classList.remove('open');
    });
})

// Nav color
window.addEventListener('scroll', function() {
    if (window.scrollY > ((window.innerHeight * 0.7) - 45)) {
        nav.classList.add('fill');
    } else {
        nav.classList.remove('fill');
    }
});

// Nav scrolling up
let lastScroll = 0

window.addEventListener('scroll', function() {
    let scroll = window.pageYOffset || document.documentElement.scrollTop;

    if (scroll > lastScroll) {
        nav.classList.add('hidden');
      } else {
        nav.classList.remove('hidden');
      }

      lastScroll = scroll;
})


// intersectionObserver
let options = {
    root: null, 
    rootMargin: "0px",
    threshold: 0
}

let observer = new IntersectionObserver (entries =>  {
    entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        })
}, options);

let hiddenElements = document.querySelectorAll(".load");
hiddenElements.forEach(hiddenElement => observer.observe(hiddenElement));

// sliderHome
let slideIndex = 0;

function showSlides() {
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