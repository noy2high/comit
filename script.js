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
        'IMAGE_URL_1', 'IMAGE_URL_2', 'IMAGE_URL_3', // Replace with actual URLs
        // ... Add more image URLs up to 30
    ];

    function createFallingImage() {
        const img = document.createElement('img');
        img.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];
        img.style.left = Math.random() * 100 + 'vw';
        imageContainer.appendChild(img);
    }

    // Create a falling image every 4 seconds
    setInterval(createFallingImage, 4000);
}
