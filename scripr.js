let advocateEmotions = 60;  
let advocatePragmatism = 70; 

let judgeEmotions = 30; 
let judgePragmatism = 80; 

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const looseText = document.querySelector("#looseText");
const protectionText = document.querySelector("#protectionText");
const winText = document.querySelector("#winText");
const progressBar = document.querySelector("#progressBar");

const jury = [
    { name: "John", age: 68, pragmatism: 80, emotions: 30 },
    { name: "Alice", age: 29, pragmatism: 40, emotions: 90 },
    { name: "Maria", age: 55, pragmatism: 90, emotions: 5 },
    { name: "Bart", age: 20, pragmatism: 50, emotions: 50 },
    { name: "Paul", age: 36, pragmatism: 80, emotions: 80 },
    { name: "Olga", age: 60, pragmatism: 85, emotions: 60 },
];

function getRandomTarget() {
    const isJury = Math.random() < 0.5;
    return isJury ? jury[Math.floor(Math.random() * jury.length)] : { emotions: judgeEmotions, pragmatism: judgePragmatism };
}

function updateUI(progress) {
    progressBar.style.width = `${progress}%`;

    if (progress <= 0) {
        looseText.style.display = 'block';
        protectionText.style.display = 'none';
        winText.style.display = 'none';
    } else if (progress === 100) { // Fixed equality check
        winText.style.display = 'block';
        looseText.style.display = 'none';
        protectionText.style.display = 'none';
    } else {
        protectionText.style.display = 'block';
        looseText.style.display = 'none';
        winText.style.display = 'none';
    }
}

function defend(isEmotional) {
    const target = getRandomTarget();
    let successChance;

    if (isEmotional) {
        successChance = advocateEmotions - target.emotions + (Math.random() * 40 - 15); 
    } else {
        successChance = advocatePragmatism - target.pragmatism + (Math.random() * 20 - 10); 
    }

    let currentProgress = parseInt(progressBar.style.width) || 0;
    currentProgress = successChance > 0 ? Math.min(currentProgress + 20, 100) : Math.max(currentProgress - 20, 0);
    
    updateUI(currentProgress);
}

button1.addEventListener('click', () => defend(true));  
button2.addEventListener('click', () => defend(false));  






