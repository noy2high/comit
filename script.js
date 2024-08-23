document.addEventListener('DOMContentLoaded', function() {
    // Show content after a delay to sync with the loading animation
    setTimeout(function() {
        document.querySelector('.loader').style.display = 'none'; // Hide loader
        document.querySelector('.content').style.display = 'block'; // Show content
    }, 7000); // 7 seconds delay
});
