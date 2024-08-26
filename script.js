document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
    const stage3 = document.getElementById('stage3');
    const buttonImage = document.getElementById('button-image');
    const centerImage = document.getElementById('center-image');
    const fallingImagesContainer = document.getElementById('falling-images');
    const images = Array.from({ length: 30 }, (_, i) => `https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(${i + 1}).png`);

    // Handle the transition from loading screen to main content
    setTimeout(() => {
        loader.style.display = 'none';
        mainContent.style.display = 'block';
    }, 7000); // 7 seconds

    // Handle button click to transition to Stage 3
    buttonImage.addEventListener('click', () => {
        mainContent.style.display = 'none';
        stage3.style.display = 'flex';
    });

    // Handle next, previous, and close actions in Stage 3
    const loveLetterImages = [
        'https://raw.githubusercontent.com/noy2high/comit/main/images/Love%20Letter%20(1).png',
        'https://raw.githubusercontent.com/noy2high/comit/main/images/Love%20Letter%20(2).png',
        'https://raw.githubusercontent.com/noy2high/comit/main/images/Love%20Letter%20(3).png'
    ];

    let currentIndex = 0;

    document.getElementById('next-button').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % loveLetterImages.length;
        centerImage.src = loveLetterImages[currentIndex];
    });

    document.getElementById('prev-button').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + loveLetterImages.length) % loveLetterImages.length;
        centerImage.src = loveLetterImages[currentIndex];
    });

    document.getElementById('close-button').addEventListener('click', () => {
        stage3.style.display = 'none';
        mainContent.style.display = 'block';
    });

    // Handle falling images
    const createFallingImage = () => {
        const img = document.createElement('img');
        img.src = images[Math.floor(Math.random() * images.length)];
        img.classList.add('falling-image');
        img.style.left = `${Math.random() * 100}%`; // Random horizontal position
        fallingImagesContainer.appendChild(img);
        setTimeout(() => img.remove(), 10000); // Remove image after 10 seconds
    };

    setInterval(createFallingImage, 4000); // Create a new falling image every 4 seconds
});
