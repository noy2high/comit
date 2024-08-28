document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById('loading-screen');
    const stage2 = document.getElementById('stage-2');
    const fallingImagesContainer = document.getElementById('falling-images-container');

    // Stage 1: Loading screen delay
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // Hide Stage 1
        stage2.classList.remove('hidden'); // Show Stage 2
        startFallingImages();
    }, 7000); // 7 seconds

    // Falling Images Logic
    const images = [];
    for (let i = 1; i <= 30; i++) {
        images.push(`images/Vintage%20Effect%20Polaroid%20(${i}).png`);
    }

    function startFallingImages() {
        setInterval(() => {
            const imgElement = document.createElement('img');
            imgElement.src = images[Math.floor(Math.random() * images.length)];
            imgElement.classList.add('falling-image');
            imgElement.style.left = `${Math.random() * 100}%`;
            imgElement.style.animationDuration = `${4 + Math.random() * 2}s`; // Slower fall
            fallingImagesContainer.appendChild(imgElement);

            // Remove image after animation ends
            setTimeout(() => {
                imgElement.remove();
            }, 6000); // Duration of fall + buffer
        }, 4000); // 1 image per 4 seconds
    }
