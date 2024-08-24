window.addEventListener("load", function() {
    setTimeout(function() {
        document.getElementById("loader").style.display = "none"; // Hide loading animation
        document.getElementById("content").style.display = "block"; // Show the image
    }, 7000); // Wait for 7 seconds
});
