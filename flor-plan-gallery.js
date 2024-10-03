let currentSlide = 0;
const galleryItems = document.querySelectorAll('.gallery-item');
const totalSlides = galleryItems.length;

function moveNext() {
    // If we're at the last slide, go back to the first
    currentSlide = (currentSlide + 1) % totalSlides;
    updateGallery();
}

function movePrev() {
    // If we're at the first slide, go to the last
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateGallery();
}

function updateGallery() {
    const gallery = document.querySelector('.gallery');
    const galleryItemWidth = galleryItems[0].offsetWidth + 20; // Include margin
    gallery.style.transform = `translateX(-${currentSlide * galleryItemWidth}px)`;
}
