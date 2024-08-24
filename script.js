document.addEventListener('DOMContentLoaded', function() {
    // Simulate a loading process
    setTimeout(function() {
        document.querySelector('.loader').style.display = 'none'; // Hide the loader
        document.querySelector('.content').style.display = 'block'; // Show the content
    }, 3000); // Adjust time as needed (3000ms = 3 seconds)
});
