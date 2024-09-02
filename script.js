body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  overflow: hidden;
  /* Prevent scrolling */
  background-color: #013220;
  /* Dark green background color */
  position: relative;
  /* Ensure the overlay and content are positioned relative to body */
}

/* Background Image with Dark Overlay */
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://raw.githubusercontent.com/noy2high/comit/main/images/background.png') no-repeat center center fixed;
  /* Background image */
  background-size: cover;
  /* Ensure background image covers the area */
  opacity: 0.75;
  /* Black overlay with 75% opacity */
  z-index: -1;
  /* Ensure it's below everything */
}

/* Stage 1: Loading Screen */
#loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  /* Dark overlay for loading screen */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  /* On top of everything */
}

/* Custom Loading Animation */
.loader {
  width: 50px;
  aspect-ratio: 1;
  color: #90deb2;
  background:
    radial-gradient(circle at 60% 65%, currentColor 62%, #0000 65%) top left,
    radial-gradient(circle at 40% 65%, currentColor 62%, #0000 65%) top right,
    linear-gradient(to bottom left, currentColor 42%, #0000 43%) bottom left,
    linear-gradient(to bottom right, currentColor 42%, #0000 43%) bottom right;
  background-size: 50% 50%;
  background-repeat: no-repeat;
  position: relative;
}

.loader:after {
  content: "";
  position: absolute;
  inset: 0;
  background: inherit;
  opacity: 0.4;
  animation: l3 1s infinite;
}

@keyframes l3 {
  to {
    transform: scale(1.8);
    opacity: 0;
  }
}

/* Stage 2: Content */
#stage-2 {
  display: none;
  /* Hidden initially */
  position: fixed;
  /* Use fixed positioning to cover the viewport */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Use flexbox to center content */
  flex-direction: column;
  align-items: center;
  /* Center items horizontally */
  justify-content: center;
  /* Center items vertically */
  background-color: rgba(0, 0, 0, 0.75);
  /* Dark overlay for Stage 2 */
  z-index: 1;
  /* On top of background-content */
}

/* Orphic Image */
#orphic-image {
  position: absolute;
  top: 5%;
  /* Positioned 5% from the top */
  width: 80%;
  /* Adjust size as needed */
  max-width: 400px;
  /* Max width for larger screens */
  left: 50%;
  transform: translate(-50%, 0);
  /* Center horizontally */
}

/* Polaroid Image */
#polaroid-image {
  position: absolute;
  top: 40%;
  /* Adjusted to ensure more space between images */
  width: 150px;
  /* Adjust size as needed */
  height: auto;
  /* Maintain aspect ratio */
  left: 50%;
  transform: translate(-50%, 0);
  /* Center horizontally */
}

/* Pencet Aku Button */
#pencet-aku {
  position: absolute;
  bottom: 10%;
  /* Positioned 10% from the bottom */
  width: 60%;
  /* Adjust size as needed */
  max-width: 300px;
  /* Max width for larger screens */
  left: 50%;
  transform: translate(-50%, 0);
  /* Center horizontally */
}
