window.onload = function () {
  // Wait 7 seconds, then transition from Stage 1 to Stage 2
  setTimeout(() => {
    document.getElementById('stage1').classList.add('hidden');
    document.getElementById('stage2').classList.remove('hidden');
    startSlideshow();
  }, 7000); // 7 seconds
};

// Function to start the polaroid slideshow
function startSlideshow() {
  const polaroidSlideshow = document.getElementById('polaroid-slideshow');
  const imageUrls = [
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(1).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(2).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(3).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(4).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(5).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(6).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(7).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(8).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(9).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(10).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(11).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(12).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(13).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(14).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(15).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(16).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(17).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(18).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(19).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(20).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(21).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(22).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(23).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(24).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(25).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(26).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(27).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(28).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(29).png",
    "https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(30).png"
  ];
  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % imageUrls.length; // Increment index, loop back to start if at end
    polaroidSlideshow.src = imageUrls[currentIndex]; // Change image
  }, 5000); // 5 seconds interval
}
