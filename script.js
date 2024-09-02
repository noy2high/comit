document.addEventListener("DOMContentLoaded", function() {
    // Stage 1: Loading Animation for 7 seconds
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none'; // Hide loading screen
        document.getElementById('stage-2').style.display = 'flex'; // Show Stage 2 content
    }, 7000);

    // Polaroid Image Transition
    const polaroidImage = document.getElementById('polaroid-image');
    let currentIndex = 1;
    
    function updatePolaroid() {
        currentIndex = (currentIndex % 30) + 1; // Cycle through 1 to 30
        polaroidImage.src = `https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(${currentIndex}).png`;
    }
    
    setInterval(updatePolaroid, 5000); // Change image every 5 seconds

    // Handle Pencet Aku button click (Trigger Stage 3)
    document.getElementById('pencet-aku').addEventListener('click', function() {
        // Placeholder for Stage 3 code
        console.log('Pencet Aku clicked! Trigger Stage 3.');
    });
});
