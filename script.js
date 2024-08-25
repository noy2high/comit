window.addEventListener('load', function() {
  // Hide loader and show content after 7 seconds
  setTimeout(function() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
  }, 7000); // 7 seconds
});
