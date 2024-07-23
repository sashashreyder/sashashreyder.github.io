// JavaScript for dark mode toggle
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Optionally, save the user's preference in local storage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.removeItem('darkMode');
    }
}

// Check for saved user preference and apply it
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});
