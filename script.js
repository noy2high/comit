document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const stage2 = document.getElementById("stage-2");
  const stage3 = document.getElementById("stage-3");
  const pencetAku = document.getElementById("pencet-aku");
  const loveLetterImage = document.getElementById("love-letter-image");
  const leftButton = document.getElementById("left-button");
  const rightButton = document.getElementById("right-button");

  // Function to get a random polaroid variant URL (1-30)
  function getRandomPolaroidImage() {
    const randomPolaroidNumber = Math.floor(Math.random() * 30) + 1;
    return `https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(${randomPolaroidNumber}).png`;
  }

  // Stage 1: Show loading screen for 7 seconds
  setTimeout(() => {
    loadingScreen.style.display = "none";
    stage2.style.display = "flex"; // Show Stage 2 after 7 seconds
  }, 7000);

  // Change polaroid image every 5 seconds
  const polaroidImage = document.getElementById("polaroid-image");
  setInterval(() => {
    polaroidImage.src = getRandomPolaroidImage();
  }, 5000);

  // Make 'Pencet Aku' interactive to show Stage 3
  pencetAku.addEventListener("click", function () {
    stage2.style.display = "none";
    stage3.style.display = "flex"; // Show Stage 3 on click
  });

  // Love Letter images navigation logic
  const loveLetterImages = [
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Love%20Letter%20(1).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Love%20Letter%20(2).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Love%20Letter%20(3).png"
  ];
  let currentImageIndex = 0;

  rightButton.addEventListener("click", function () {
    currentImageIndex = (currentImageIndex + 1) % loveLetterImages.length;
    loveLetterImage.src = loveLetterImages[currentImageIndex];
  });

  leftButton.addEventListener("click", function () {
    currentImageIndex = (currentImageIndex - 1 + loveLetterImages.length) % loveLetterImages.length;
    loveLetterImage.src = loveLetterImages[currentImageIndex];
  });
});
