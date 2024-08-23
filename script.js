document.addEventListener("DOMContentLoaded", function() {
    // Hide the loader and show the content when the page has fully loaded
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.content');

    // Optional: Use a timeout to ensure smooth loading experience
    setTimeout(() => {
        loader.classList.add('hide-loader');
        content.style.display = 'block';
    }, 500); // Adjust timeout as needed
});
