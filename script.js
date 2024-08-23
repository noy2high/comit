document.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.content');

    if (loader && content) {
        setTimeout(() => {
            loader.classList.add('hide-loader'); // Hide the loader
            content.style.display = 'block';     // Show the content
        }, 7000); // Match the duration of the delay (7s in this case)
    } else {
        console.error('Loader or content not found');
    }
});
