let currentSlide = 0;

function moveNext() {
    const gallery = document.querySelector('.gallery');
    const items = document.querySelectorAll('.gallery-item');
    currentSlide = (currentSlide + 1) % items.length;
    updateGallery();
}

function movePrev() {
    const gallery = document.querySelector('.gallery');
    const items = document.querySelectorAll('.gallery-item');
    currentSlide = (currentSlide - 1 + items.length) % items.length;
    updateGallery();
}

function updateGallery() {
    const gallery = document.querySelector('.gallery');
    gallery.style.transform = `translateX(-${currentSlide * 100}%)`;
}
