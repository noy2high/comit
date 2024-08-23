document.addEventListener("DOMContentLoaded", function() {
    // Hide the loader and show the content when the page has fully loaded
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.content');

    // Check if loader and content exist
    if (loader && content) {
        setTimeout(() => {
            loader.classList.add('hide-loader'); // Hide the loader
            content.style.display = 'block';     // Show the content
        }, 7000); // Match the duration of the CSS animation (7s in this case)
    } else {
        console.error('Loader or content not found');
    }
});
