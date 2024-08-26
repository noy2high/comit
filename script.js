document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        // Stage 2: Falling Images
        for (let i = 1; i <= 30; i++) {
            let img = document.createElement('img');
            img.src = `https://raw.githubusercontent.com/noy2high/comit/main/images/Vintage%20Effect%20Polaroid%20(${i}).png`;
            img.classList.add('falling-image');
            document.body.appendChild(img);
        }
    }, 7000); // 7 seconds
});
