function toggleInfo(button) {
    const info = button.nextElementSibling;
    if (info.style.display === 'none' || info.style.display === '') {
        info.style.display = 'block'; 
        button.textContent = 'Less Info';
    } else {
        info.style.display = 'none';
        button.textContent = 'More Info';
    }
}

function toggleCard(element) {
    const extraInfo = element.parentElement.querySelector('.extra-info');
    extraInfo.classList.toggle('show');
}


