document.addEventListener('DOMContentLoaded', () => {
    // Stage 1: Show stage 2 after 7 seconds
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('stage-2').style.display = 'flex';
    }, 7000);

    // Stage 2: Show stage 3 on clicking 'Pencet Aku'
    document.getElementById('pencet-aku').addEventListener('click', () => {
        document.getElementById('stage-2').style.display = 'none';
        document.getElementById('stage-3').style.display = 'flex';
    });

    // Stage 3: Image navigation
    const loveLetterImages = [
        'https://raw.githubusercontent.com/noy2high/comit/main/images/Love%20Letter%20(1).png',
        'https://raw.githubusercontent.com/noy2high/comit/main/images/Love%20Letter%20(2).png',
        'https://raw.githubusercontent.com/noy2high/comit/main/images/Love%20Letter%20(3).png',
        // Add more image URLs if needed
    ];

    let currentIndex = 0;
    const loveLetterImage = document.getElementById('love-letter');
    const leftBtn = document.getElementById('left-btn');
    const rightBtn = document.getElementById('right-btn');

    function updateImage(index) {
        if (index >= 0 && index < loveLetterImages.length) {
            loveLetterImage.src = loveLetterImages[index];
        }
    }

    rightBtn.addEventListener('click', () => {
        if (currentIndex < loveLetterImages.length - 1) {
            currentIndex++;
            updateImage(currentIndex);
        }
    });

    leftBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateImage(currentIndex);
        }
    });
});
