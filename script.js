document.addEventListener("DOMContentLoaded", function() {
    // Show Stage 1 for 7 seconds
    setTimeout(function() {
        document.getElementById('stage1').classList.add('hidden');
        document.getElementById('stage2').classList.remove('hidden');
        startFallingImages();
    }, 7000);
});

function startFallingImages() {
    const imageContainer = document.querySelector('.falling-images');
    const imageUrls = [
        'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(1).png',
        'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(2).png',
        'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(3).png',
        'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(4).png',
        'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(5).png',
        // Continue with all 30 URLs
        'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(30).png'
    ];

    const usedImages = new Set(); // To ensure no repetition

    function createFallingImage() {
        if (usedImages.size === imageUrls.length) usedImages.clear(); // Reset when all images are used

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * imageUrls.length);
        } while (usedImages.has(randomIndex));

        usedImages.add(randomIndex);
        const img = document.createElement('img');
        img.src = imageUrls[randomIndex];
        img.style.left = Math.random() * 100 + 'vw';
        img.style.animationDuration = (5 + Math.random() * 3) + 's'; // Adjust speed

        imageContainer.appendChild(img);

        // Remove image after animation ends to avoid memory leaks
        img.addEventListener('animationend', () => img.remove());
    }

    // Create a falling image every 5 seconds
    setInterval(createFallingImage, 5000);
}
