// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Handle responsive scaling
    function handleResize() {
        const container = document.querySelector('.fullscreen-container > div');
        if (container) {
            const scale = Math.min(
                window.innerWidth / 1920,
                window.innerHeight / 1080
            );
            document.documentElement.style.setProperty('--scale', scale);
        }
    }

    // Listen for window resize events
    window.addEventListener('resize', handleResize);
    
    // Initial call to set correct scale
    handleResize();
});
