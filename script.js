document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelector('.loader').classList.add('hide-loader');
        document.querySelector('.content').classList.remove('hide-loader');
    }, 7000); // 7 seconds delay
});
