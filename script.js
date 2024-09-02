document.addEventListener("DOMContentLoaded", function() {
    // Stage 1: Loading Animation for 7 seconds
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none'; // Hide loading screen
        document.getElementById('stage-2').classList.remove('hidden'); // Show Stage 2
    }, 7000);

    // Stage 2: Polaroid Images Change Every 5 Seconds
    const polaroidImage = document.getElementById('polaroid');
    let currentImageIndex = 1;
    const totalImages = 30;

    setInterval(function() {
        currentImageIndex = (currentImageIndex % totalImages) + 1; // Cycle through images
        polaroidImage.src = `https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(${currentImageIndex}).png`; // Update the source
    }, 5000); // Change every 5 seconds
});
