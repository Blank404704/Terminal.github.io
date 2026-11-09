// Function to enter fullscreen mode
function enterFullscreen() {
    if (document.fullscreenElement || !document.documentElement.requestFullscreen) {
        return;
    }

    document.documentElement.requestFullscreen().catch((error) => {
        console.warn("Unable to enter fullscreen:", error);
    });
}

// Lisening events for entering fullscreen mode
document.addEventListener("pointerdown", enterFullscreen, { once: true });

document.addEventListener("keydown", enterFullscreen, { once: true });
