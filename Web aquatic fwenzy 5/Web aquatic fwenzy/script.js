let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(${-currentIndex * 100}%)`;

    slides.forEach((slide, idx) => {
        if (idx === currentIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

// Initialize the carousel
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
