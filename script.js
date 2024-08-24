document.addEventListener('DOMContentLoaded', function() {
    // Show content after the loading animation completes (7 seconds delay)
    setTimeout(function() {
        document.querySelector('.loader').style.display = 'none'; // Hide loader
        document.querySelector('.content').style.display = 'block'; // Show content
    }, 7000); // 7 seconds delay
});
