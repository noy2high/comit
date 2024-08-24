window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    // Simulate a loading delay (adjust as needed)
    setTimeout(() => {
        loader.style.display = 'none';
        content.classList.remove('hidden');
        content.classList.add('show');
    }, 3000); // 3 seconds delay
});
