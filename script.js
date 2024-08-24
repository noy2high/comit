document.addEventListener('DOMContentLoaded', function() {
    // Wait for the content to be fully loaded before showing it
    setTimeout(function() {
        document.querySelector('.loader').style.display = 'none'; // Hide the loader
        document.querySelector('.content').style.display = 'block'; // Show the content
    }, 7000); // 7 seconds duration
});
