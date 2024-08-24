document.addEventListener('DOMContentLoaded', function() {
    // Hide the loader and show content after 7 seconds
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'flex'; // Ensure content is displayed
    }, 7000);
});
