document.addEventListener('DOMContentLoaded', function () {
    // Stage 1: Loading Screen
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
        document.getElementById('stage-2').classList.remove('hidden');
    }, 7000); // 7 seconds delay

    // Stage 2: Falling Images and Buka Aku Button
    const imagePaths = Array.from({ length: 30 }, (_, i) => `images/Vintage Effect Polaroid (${i + 1}).png`);

    function createFallingImage() {
        const img = document.createElement('img');
        img.src = imagePaths[Math.floor(Math.random() * imagePaths.length)];
        img.className = 'falling-image';
        img.style.left = Math.random() * 100 + 'vw';
        img.style.animationDuration = Math.random() * 5 + 4 + 's'; // random speed between 4-9 seconds
        document.body.appendChild(img);

        img.addEventListener('animationend', () => {
            img.remove(); // Remove the image after it falls off the screen
        });
    }

    setInterval(createFallingImage, 4000); // 1 image per 4 seconds

    document.getElementById('buka-aku').addEventListener('click', function () {
        document.getElementById('stage-2').classList.add('hidden');
        document.getElementById('stage-3').classList.remove('hidden');
    });

    // Stage 3: Love Letter Navigation
    const loveLetterImages = [
        'images/Love Letter (1).png',
        'images/Love Letter (2).png',
        'images/Love Letter (3).png'
    ];
    let currentIndex = 0;

    function updateLoveLetter() {
        document.getElementById('love-letter').src = loveLetterImages[currentIndex];
        document.getElementById('prev-image').classList.toggle('hidden', currentIndex === 0);
        document.getElementById('next-image').classList.toggle('hidden', currentIndex === loveLetterImages.length - 1);
    }

    document.getElementById('next-image').addEventListener('click', function () {
        if (currentIndex < loveLetterImages.length - 1) {
            currentIndex++;
            updateLoveLetter();
        }
    });

    document.getElementById('prev-image').addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateLoveLetter();
        }
    });

    document.getElementById('close-button').addEventListener('click', function () {
        document.getElementById('stage-3').classList.add('hidden');
        document.getElementById('stage-2').classList.remove('hidden');
    });

    updateLoveLetter(); // Initialize the first love letter
});
