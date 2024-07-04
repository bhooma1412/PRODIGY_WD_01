document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    
    // Function to toggle 'scrolled' class for the navbar
    function toggleNavbarBackground() {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Add scroll event listener to toggle navbar background
    window.addEventListener('scroll', toggleNavbarBackground);
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - navbar.offsetHeight,
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('#who-are-we .slide');
    let currentSlide = 0;

    function showNextSlide() {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
        });
        currentSlide = (currentSlide + 2) % slides.length;
    }

    setInterval(showNextSlide, 3000);
});
let slideIndex = 0;

const moveSlider = (direction) => {
    const cards = document.querySelectorAll('.card-schedule');
    const cardWidth = cards[0].getBoundingClientRect().width;
    const cardMargin = parseInt(getComputedStyle(cards[0]).marginRight);
    const slider = document.querySelector('.card-slider-schedule');
    const sliderWidth = slider.getBoundingClientRect().width;
    const maxSlidesInView = Math.floor(sliderWidth / (cardWidth + cardMargin));

    if (direction === 'next') {
        slideIndex = Math.min(cards.length - maxSlidesInView, slideIndex + 1);
    } else if (direction === 'prev') {
        slideIndex = Math.max(0, slideIndex - 1);
    }

    slider.scrollTo({
        left: slideIndex * (cardWidth + cardMargin),
        behavior: 'smooth'
    });
};

// Automatic sliding interval (adjust as needed)
setInterval(() => {
    moveSlider('next');
}, 5000); // Slide every 5 seconds (5000 milliseconds)



