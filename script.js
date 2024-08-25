window.addEventListener("load", function() {
    setTimeout(function() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
        document.getElementById("overlay").style.zIndex = "0";
    }, 7000);
});
