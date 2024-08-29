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
        'YOUR_IMAGE_URL_1', 'YOUR_IMAGE_URL_2', 'YOUR_IMAGE_URL_3', 
        // Add all 30 image URLs here
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
