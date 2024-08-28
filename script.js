// Stage 1: Loading Screen
const loader = document.querySelector('.loader');
const stage1 = document.querySelector('.stage1');
const stage2 = document.querySelector('.stage2');

function startStage2() {
  stage1.style.display = 'none';
  stage2.style.display = 'block';
}

// Simulate loading for 7 seconds before showing Stage 2
setTimeout(startStage2, 7000);

// Stage 2: Falling Images
const imageUrls = [
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(1).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(2).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(3).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(4).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(5).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(6).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(7).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(8).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(9).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(10).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(11).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(12).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(13).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(14).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(15).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(16).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(17).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(18).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(19).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(20).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(21).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(22).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(23).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(24).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(25).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(26).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(27).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(28).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(29).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(30).png'
];

const stage2ImagesContainer = document.querySelector('.stage2-images');
const imageCount = imageUrls.length;
let usedImages = new Set();

function getRandomImageUrl() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * imageCount);
  } while (usedImages.has(randomIndex) && usedImages.size < imageCount);
  if (usedImages.size === imageCount) {
    usedImages.clear(); // Reset when all images have been used
  }
  usedImages.add(randomIndex);
  return imageUrls[randomIndex];
}

function createFallingImage() {
  const img = document.createElement('img');
  img.src = getRandomImageUrl();
  img.className = 'falling-image';
  img.style.left = Math.random() * (window.innerWidth - 100) + 'px'; // Random horizontal position
  stage2ImagesContainer.appendChild(img);

  // Remove image after it falls past the screen
  setTimeout(() => {
    img.remove();
  }, 8000); // Adjust duration based on desired fall speed
}

setInterval(createFallingImage, 4000); // One image every 4 seconds

