// script.js
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.navigation button:first-child');
const nextButton = document.querySelector('.navigation button:last-child');
const dotsContainer = document.querySelector('.dots');

let currentSlideIndex = 0;

// Create dots based on the number of slides
slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) {
        dot.classList.add('active');
    }
    dot.addEventListener('click', () => {
        currentSlideIndex = index;
        updateSlide();
    });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateSlide() {
    slider.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    updateNavigation();
}

function updateNavigation() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex === 0) ? slides.length - 1 : currentSlideIndex - 1;
    updateSlide();
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex === slides.length - 1) ? 0 : currentSlideIndex + 1;
    updateSlide();
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Initialize the slider
updateSlide();
