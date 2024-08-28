document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById('loading-screen');
    const stage2 = document.getElementById('stage-2');
    const fallingImagesContainer = document.getElementById('falling-images-container');

    // Stage 1: Display the loading screen for 7 seconds
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // Hide Stage 1
        stage2.style.display = 'flex'; // Show Stage 2
        startFallingImages(); // Start the falling images animation
    }, 7000); // Wait for 7 seconds

    // Falling Images Logic
    const images = [];
    for (let i = 1; i <= 30; i++) {
        images.push(`https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(${i}).png`);
    }

    function startFallingImages() {
        setInterval(() => {
            const imgElement = document.createElement('img');
            const randomImage = images[Math.floor(Math.random() * images.length)];
            imgElement.src = randomImage;
            imgElement.classList.add('falling-image');
            imgElement.style.left = `${Math.random() * 100}%`;
            imgElement.style.width = '50px'; // Smaller image size
            imgElement.style.animationDuration = `${4 + Math.random() * 2}s`; // Slower fall
            imgElement.style.position = 'absolute';
            imgElement.style.top = '-100px'; // Start off-screen
            fallingImagesContainer.appendChild(imgElement);

            // Remove image after animation ends
            setTimeout(() => {
                imgElement.remove();
            }, 6000); // Duration of fall + buffer
        }, 4000); // 1 image per 4 seconds
    }
});
