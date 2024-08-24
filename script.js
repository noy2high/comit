document.addEventListener('DOMContentLoaded', function() {
    // Delay showing the content until the loader completes
    setTimeout(function() {
        document.querySelector('.loader').style.display = 'none'; // Hide the loader
        document.querySelector('.content').style.display = 'block'; // Show the content
    }, 7000); // 7 seconds duration
});
