// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Function to toggle hero section content
function toggleHeroContent() {
    const heroContent = document.getElementById('extra-hero-content');
    if (heroContent.style.display === 'none' || heroContent.style.display === '') {
        heroContent.style.display = 'block';
    } else {
        heroContent.style.display = 'none';
    }
}

// Add event listener for the scroll to top button
document.getElementById('scrollToTopBtn').addEventListener('click', scrollToTop);

// Add event listener for the dark mode toggle button
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

// Add event listener for the hero content toggle button
document.getElementById('heroContentToggle').addEventListener('click', toggleHeroContent);

// Show the scroll to top button when scrolling down
window.addEventListener('scroll', () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});
