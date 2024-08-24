window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').classList.add('show');
    }, 7000); // 7 seconds
});
