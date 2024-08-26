// Stage control
function showStage2() {
    document.getElementById('loading-screen').classList.add('hidden');
    document.getElementById('stage2').classList.remove('hidden');
}

function showStage3() {
    document.getElementById('stage2').classList.add('hidden');
    document.getElementById('stage3').classList.remove('hidden');
    document.getElementById('falling-images').classList.add('hidden');
}

// Simulate the 7-second loading time
setTimeout(showStage2, 7000);

// Falling images logic
function createFallingImage(src) {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('falling-image');
    img.style.left = Math.random() * 100 + 'vw';
    img.style.animationDuration = 5 + Math.random() * 5 + 's';
    document.getElementById('falling-images').appendChild(img);

    img.onload = () => {
        setTimeout(() => {
            img.remove();
            createFallingImage(src); // Create a new one after the previous one is removed
        }, parseFloat(img.style.animationDuration) * 1000);
    };
}

const imagePaths = Array.from({ length: 30 }, (_, i) => `images/Vintage Effect Polaroid (${i + 1}).png`);

imagePaths.forEach(src => createFallingImage(src));

// Love letter logic (same as before)
let currentLetter = 1;

function nextLetter() {
    currentLetter++;
    updateLetter();
}

function prevLetter() {
    currentLetter--;
    updateLetter();
}

function updateLetter() {
    document.getElementById('love-letter').src = `images/Love Letter (${currentLetter}).png`;
    document.getElementById('prev').classList.toggle('hidden', currentLetter === 1);
    document.getElementById('next').classList.toggle('hidden', currentLetter === 3);
}

function closeStage3() {
    document.getElementById('stage3').classList.add('hidden');
    showStage2();
}
