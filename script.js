document.addEventListener("DOMContentLoaded", function () {
    // Stage 1: Loading Animation
    setTimeout(function () {
        document.getElementById('stage1').classList.add('hidden');
        document.getElementById('stage2').classList.remove('hidden');
        startFallingImages();
    }, 7000); // 7 seconds for loading animation

    // Stage 2: Falling Images
    function startFallingImages() {
        const imagesContainer = document.querySelector('.falling-images');
        const totalImages = 30;

        function createFallingImage() {
            const imgNumber = Math.floor(Math.random() * totalImages) + 1;
            const img = document.createElement('img');
            img.src = `https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(${imgNumber}).png`;
            img.style.setProperty('--x-position', Math.random());
            imagesContainer.appendChild(img);

            // Remove the image after falling
            img.addEventListener('animationend', () => {
                img.remove();
            });
        }

        // Create one image every 4 seconds
        setInterval(createFallingImage, 4000);
    }
});
