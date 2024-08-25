window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.body.classList.add('show-content');
    }, 7000); // 7 seconds delay
});
