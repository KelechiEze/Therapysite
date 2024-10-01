document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.3}s`; // Incremental delay
        el.classList.add('fade-in'); // Add the fade-in class to start the animation
    });
});

const carouselItems = document.querySelectorAll('.carousel-item');
let currentItem = 0;

function showItem(index) {
    carouselItems.forEach((item, i) => {
        item.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

function nextItem() {
    currentItem = (currentItem + 1) % carouselItems.length;
    showItem(currentItem);
}

setInterval(nextItem, 3000); // Change item every 3 seconds
