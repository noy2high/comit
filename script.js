window.onload = function() {
    // Show Stage 1 and hide Stage 2 initially
    document.getElementById('stage1').style.display = 'flex';
    document.getElementById('stage2').style.display = 'none';

    // Transition from Stage 1 to Stage 2
    setTimeout(function() {
        document.getElementById('stage1').style.display = 'none'; // Hide Stage 1
        document.getElementById('stage2').style.display = 'flex'; // Show Stage 2
    }, 7000); // 7 seconds delay

    // Falling images logic (We'll address this after fixing the base problems)
};
