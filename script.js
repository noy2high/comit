window.onload = function() {
    // Show Stage 1 and hide Stage 2 initially
    document.getElementById('stage1').style.display = 'flex';
    document.getElementById('stage2').style.display = 'none';

    // Transition from Stage 1 to Stage 2
    setTimeout(function() {
        document.getElementById('stage1').style.display = 'none'; // Hide Stage 1
        document.getElementById('stage2').style.display = 'flex'; // Show Stage 2
    }, 7000); // 7 seconds delay

    // Falling images logic
    const fallingImagesContainer = document.getElementById('falling-images');
    const imageLinks = Array.from({length: 30}, (_, i) => `https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(${i + 1}).png`);
    
    function createFallingImage() {
        const img = document.createElement('img');
        img.src = imageLinks[Math.floor(Math.random() * imageLinks.length)];
        img.style.position = 'absolute';
        img.style.width = '50px'; // Adjust size as needed
        img.style.top = `${Math.random() * 100}vh`;
        img.style.left = `${Math.random() * 100}vw`;
        img.style.transition = 'top 5s linear'; // Adjust fall speed
        fallingImagesContainer.appendChild(img);
        
        setTimeout(() => {
            img.style.top = '100vh'; // Move the image to the bottom
        }, 100);
        
        setTimeout(() => {
            fallingImagesContainer.removeChild(img);
        }, 5000); // Remove image after it falls
    }
    
    setInterval(createFallingImage, 4000); // 1 image every 4 seconds
};
