document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const stage2 = document.getElementById('stage2');
    const stage3 = document.getElementById('stage3');
    const bukaAku = document.getElementById('buka-aku');
    const loveLetter = document.getElementById('love-letter');
    const next = document.getElementById('next');
    const previous = document.getElementById('previous');
    const close = document.getElementById('close');
    const fallingImagesContainer = document.getElementById('falling-images');

    // Show stage 2 after 7 seconds
    setTimeout(() => {
        loader.style.display = 'none';
        stage2.style.display = 'flex';
        startFallingImages();
    }, 7000);

    // Button to trigger stage 3
    bukaAku.addEventListener('click', () => {
        stage2.style.display = 'none';
        stage3.style.display = 'flex';
    });

    // Buttons to navigate in stage 3
    let currentIndex = 1;
    const totalLoveLetters = 3;

    function updateLoveLetter(index) {
        loveLetter.src = `https://raw.githubusercontent.com/noy2high/comit/main/images/Love%20Letter%20(${index}).png`;
        next.style.display = (index === totalLoveLetters) ? 'none' : 'block';
        previous.style.display = (index === 1) ? 'none' : 'block';
    }

    next.addEventListener('click', () => {
        if (currentIndex < totalLoveLetters) {
            currentIndex++;
            updateLoveLetter(currentIndex);
        }
    });

    previous.addEventListener('click', () => {
        if (currentIndex > 1) {
            currentIndex--;
            updateLoveLetter(currentIndex);
        }
    });

    close.addEventListener('click', () => {
        stage3.style.display = 'none';
        stage2.style.display = 'flex';
    });

    // Function to start falling images
    function startFallingImages() {
        function createFallingImage() {
            const img = document.createElement('img');
            const randomIndex = Math.floor(Math.random() * 30) + 1;
            img.src = `https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(${randomIndex}).png`;
            img.style.left = `${Math.random() * 100}%`;
            img.style.top = `-${Math.random() * 100}px`;
            fallingImagesContainer.appendChild(img);

            setTimeout(() => {
                img.style.top = '100%';
            }, 100);

            setTimeout(() => {
                fallingImagesContainer.removeChild(img);
            }, 5000);
        }

        setInterval(createFallingImage, 4000);
    }
});
