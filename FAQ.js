document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
});

//burger menu

function toggleMenu() {
    const menuContainer = document.querySelector('.menu-container');
    menuContainer.style.display = menuContainer.style.display === 'flex' ? 'none' : 'flex';
}

//price cards

    function toggleInfo(button) {
        const info = button.nextElementSibling;
        if (info.style.display === 'none' || info.style.display === '') {
            info.style.display = 'block'; // Show more info
            button.textContent = 'Less Info'; // Change button text
        } else {
            info.style.display = 'none'; // Hide more info
            button.textContent = 'More Info'; // Change button text
        }
    }

