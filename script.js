/* Set the body to cover the full screen with the layered background */
body {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #269144;
    background-image: url('https://raw.githubusercontent.com/noy2high/comit/main/images/background.png'),
                      linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
}

/* Loader styles */
.loader {
    width: 50px;
    aspect-ratio: 1;
    color: #5efc58;
    background:
        radial-gradient(circle at 60% 65%, currentColor 62%, #0000 65%) top left,
        radial-gradient(circle at 40% 65%, currentColor 62%, #0000 65%) top right,
        linear-gradient(to bottom left, currentColor 42%,#0000 43%) bottom left ,
        linear-gradient(to bottom right, currentColor 42%,#0000 43%) bottom right;
    background-size: 50% 50%;
    background-repeat: no-repeat;
    position: relative;
    animation: l3 1s infinite;
}

/* Animation for loader */
@keyframes l3 {
    to {
        transform: scale(1.8);
        opacity: 0;
    }
}
