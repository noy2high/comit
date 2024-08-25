window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').classList.remove('hidden');
    }, 7000); // 7 seconds delay
});
