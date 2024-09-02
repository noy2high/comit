document.addEventListener("DOMContentLoaded", function() {
    // Stage 1: Loading Animation for 7 seconds
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none'; // Hide loading screen
        document.getElementById('stage-2').style.display = 'flex'; // Show Stage 2 content
    }, 7000);

    // Dynamically add Polaroid images
    const polaroidsContainer = document.getElementById('polaroids');
    for (let i = 1; i <= 30; i++) {
        const img = document.createElement('img');
        img.src = `https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(${i}).png`;
        img.alt = `Polaroid ${i}`;
        polaroidsContainer.appendChild(img);
    }

    // Handle Pencet Aku button click (Trigger Stage 3)
    document.getElementById('pencet-aku').addEventListener('click', function() {
        // Placeholder for Stage 3 code
        console.log('Pencet Aku clicked! Trigger Stage 3.');
    });
});
