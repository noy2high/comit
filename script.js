// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Set a timeout to transition to Stage 2 after 7 seconds
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none'; // Hide Stage 1
        document.getElementById('stage-2').style.display = 'flex'; // Show Stage 2
        startPolaroidRotation(); // Start rotating polaroid images
    }, 7000); // 7 seconds delay
});

function startPolaroidRotation() {
    const polaroid = document.getElementById('polaroid-image');
    let index = 1;
    setInterval(function() {
        polaroid.src = `https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(${index}).png`;
        index = (index % 30) + 1; // Loop through images 1 to 30
    }, 5000); // Change image every 5 seconds
}
