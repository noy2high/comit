window.onload = function() {
    // Wait 7 seconds, then transition from Stage 1 to Stage 2
    setTimeout(() => {
        document.getElementById('stage1').classList.add('hidden');
        document.getElementById('stage2').classList.remove('hidden');
    }, 7000); // 7 seconds
};
