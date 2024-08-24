document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    
    // Show content after 7 seconds
    setTimeout(() => {
        loader.style.display = 'none'; // Hide the loader
        content.classList.remove('hidden'); // Show the content
    }, 7000);
});
