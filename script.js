// Wait 7 seconds, then transition from Stage 1 to Stage 2
window.onload = function() {
    setTimeout(() => {
        document.getElementById('stage1').classList.add('hidden');
        document.getElementById('stage2').classList.remove('hidden');
        startFallingImages();
    }, 7000); // 7 seconds
};

// Falling images URLs
const imageUrls = [
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(1).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(2).png",
    // Add all URLs up to 30 here
];

let usedImages = new Set();

function startFallingImages() {
    setInterval(() => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * imageUrls.length);
        } while (usedImages.has(randomIndex));
        
        usedImages.add(randomIndex);
        if (usedImages.size === imageUrls.length) {
            usedImages.clear(); // Reset after all images have been used
        }

        const img = document.createElement('img');
        img.src = imageUrls[randomIndex];
        img.className = 'falling-image';
        img.style.left = Math.random() * (window.innerWidth - 60) + 'px';
        img.style.animationDuration = (5 + Math.random() * 5) + 's'; // Between 5 and 10 seconds

        document.body.appendChild(img);

        img.addEventListener('animationend', () => {
            img.remove(); // Remove image after it falls off screen
        });
    }, 5000); // New image every 5 seconds
}
