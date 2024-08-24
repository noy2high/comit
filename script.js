document.addEventListener('DOMContentLoaded', function() {
    // Ensure the background color is applied
    document.body.style.backgroundColor = '#aaddce';

    // Ensure the loader is visible
    document.querySelector('.loader').style.display = 'block';

    // Wait for the specified duration before showing content
    setTimeout(function() {
        document.querySelector('.loader').style.display = 'none'; // Hide the loader
        document.querySelector('.content').style.display = 'block'; // Show the content
    }, 7000); // 7 seconds duration
});
