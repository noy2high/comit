document.addEventListener('DOMContentLoaded', () => {
    // Hide loader after 7 seconds
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 7000);

    // Create falling images
    const fallingImagesContainer = document.getElementById('falling-images');
    const imageUrls = [];
    for (let i = 1; i <= 30; i++) {
        imageUrls.push(`https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(${i}).png`);
    }

    function createFallingImage() {
        const img = document.createElement('img');
        img.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];
        img.className = 'falling-image';
        img.style.top = `-${Math.random() * 100}px`;
        img.style.left = `${Math.random() * 100}vw`;
        fallingImagesContainer.appendChild(img);

        setTimeout(() => {
            img.remove();
        }, 4000); // Image falls for 4 seconds
    }

    setInterval(createFallingImage, 4000); // Create 1 image every 4 seconds
});
