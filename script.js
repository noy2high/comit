// Stage 1: Loading Animation
function showStage1() {
  document.getElementById('stage1').style.display = 'flex';
  document.getElementById('stage2').style.display = 'none';
}

// Stage 2: Show after 7 seconds
function showStage2() {
  document.getElementById('stage1').style.display = 'none';
  document.getElementById('stage2').style.display = 'block';
  startFallingImages();
}

// Start the stages
window.onload = function() {
  showStage1();
  setTimeout(showStage2, 7000); // Show stage 2 after 7 seconds
};

// Falling Images Functionality
const fallingImageUrls = [
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(1).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(2).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(3).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(4).png',
  'https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(5).png',
  // Add all 30 image URLs here
];

function startFallingImages() {
  let usedImages = [];

  function getRandomImage() {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * fallingImageUrls.length);
    } while (usedImages.includes(randomIndex) && usedImages.length < fallingImageUrls.length);

    if (usedImages.length >= fallingImageUrls.length) {
      usedImages = [];
    }

    usedImages.push(randomIndex);
    return fallingImageUrls[randomIndex];
  }

  function createFallingImage() {
    const img = document.createElement('img');
    img.src = getRandomImage();
    img.className = 'falling-image';
    img.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    document.getElementById('stage2').appendChild(img);

    const fallDuration = 6; // Adjust fall speed
    img.style.transition = `top ${fallDuration}s linear`;
    img.style.top = '100vh'; // Start from the top

    setTimeout(() => {
      img.style.top = '-10%'; // Move to the top of the screen
    }, 100);

    setTimeout(() => {
      img.remove();
    }, fallDuration * 1000);
  }

  setInterval(createFallingImage, 4000); // Create new image every 4 seconds
}
