document.addEventListener('DOMContentLoaded', function() {
    // Play audio after a delay to sync with the loading animation (removed if not used)
    setTimeout(function() {
        document.querySelector('.loader').classList.add('hide-loader');
        document.querySelector('.content').classList.remove('hide-loader');
        document.querySelector('.content').classList.add('show-content');
    }, 7000); // 7 seconds delay
});
