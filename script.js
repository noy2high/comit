document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.content');

    setTimeout(() => {
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 3000); // Adjust time as needed
});
