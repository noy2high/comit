// Falling Images Logic
function createFallingImage(imageUrl) {
  const img = document.createElement('img');
  img.src = imageUrl;
  img.className = 'falling-image';
  img.style.left = Math.random() * 100 + 'vw';
  img.style.width = '10%';
  img.style.height = 'auto';
  img.style.animationDuration = Math.random() * 3 + 5 + 's';
  document.body.appendChild(img);

  // Remove image after it falls
  img.addEventListener('animationend', () => {
    img.remove();
  });
}

function startFallingImages() {
  const images = [];
  for (let i = 1; i <= 30; i++) {
    images.push(`https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(${i}).png`);
  }

  setInterval(() => {
    const imageUrl = images[Math.floor(Math.random() * images.length)];
    createFallingImage(imageUrl);
  }, 200); // Falling speed: 5 images per second
}

document.addEventListener('DOMContentLoaded', () => {
  startFallingImages();
});
