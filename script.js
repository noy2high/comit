document.addEventListener("DOMContentLoaded", function() {
    const animation = document.getElementById("animation");
    animation.innerHTML = "🎉";
    animation.style.fontSize = "100px";
    animation.style.transition = "transform 1s";
    animation.style.transform = "rotate(360deg)";
});
