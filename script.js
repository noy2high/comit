document.addEventListener("DOMContentLoaded", function() {
    // Hide the loader and show the content when the page has fully loaded
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.content');

    // Check if loader and content exist
    if (loader && content) {
        setTimeout(() => {
            loader.classList.add('hide-loader');
            content.style.display = 'block';
        }, 4000); // Match the duration of the CSS animation (4s in this case)
    } else {
        console.error('Loader or content not found');
    }
});
