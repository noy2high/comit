document.addEventListener('DOMContentLoaded', function () {
    const loader = document.querySelector('.loader');
    const orphicImage = document.querySelector('.orphic-image');
    const pencetAku = document.querySelector('.pencet-aku');
    const stage3Content = document.getElementById('stage-3-content');
    const loveLetter = document.getElementById('love-letter');
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('prev-button');
    const closeButton = document.getElementById('close-button');
    const fallingImagesContainer = document.getElementById('falling-images-container');
    const imageCount = 30; // Number of images

    // Simulate loading screen
    setTimeout(() => {
        loader.style.display = 'none';
        orphicImage.style.display = 'block';
    }, 7000);

    // Falling images
    function createFallingImage() {
        const img = document.createElement('img');
        img.src = `https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(${Math.floor(Math.random() * imageCount) + 1}).png`;
        img.style.position = 'absolute';
        img.style.width = '60px'; // Adjust size as needed
        img.style.left = `${Math.random() * 100}vw`;
        img.style.top = '-100px';
        fallingImagesContainer.appendChild(img);

        let interval = setInterval(() => {
            if (parseFloat(img.style.top) > window.innerHeight) {
                clearInterval(interval);
                fallingImagesContainer.removeChild(img);
            }
            img.style.top = `${parseFloat(img.style.top) + 5}px`; // Adjust speed as needed
        }, 20);
    }

    function startFallingImages() {
        setInterval(createFallingImage, 1000); // Create new falling image every second
    }

    // Show Stage 3 content on clicking "Pencet Aku"
    pencetAku.addEventListener('click', function () {
        orphicImage.style.display = 'none';
        stage3Content.style.display = 'block';
    });

    // Stage 3 navigation
    let currentImageIndex = 1;

    nextButton.addEventListener('click', function () {
        currentImageIndex++;
        if (currentImageIndex > 3) {
            currentImageIndex = 1;
        }
        loveLetter.src = `https://raw.githubusercontent.com/noy2high/comit/main/images/Love%20Letter%20(${currentImageIndex}).png`;
    });

    prevButton.addEventListener('click', function () {
        currentImageIndex--;
        if (currentImageIndex < 1) {
            currentImageIndex = 3;
        }
        loveLetter.src = `https://raw.githubusercontent.com/noy2high/comit/main/images/Love%20Letter%20(${currentImageIndex}).png`;
    });

    closeButton.addEventListener('click', function () {
        stage3Content.style.display = 'none';
        orphicImage.style.display = 'block';
    });

    // Start falling images
    startFallingImages();
});
