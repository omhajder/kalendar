// Function to rotate the iframe based on device orientation
function rotateIframeBasedOnOrientation() {
    var iframe = document.getElementById('sheet-iframe');

    // Check the current orientation
    var orientation = window.orientation;

    // Apply rotation based on orientation
    if (orientation === 0 || orientation === 180) {
        // Portrait orientation
        iframe.style.transform = 'rotate(90deg)';
        iframe.style.width = '100vh';
        iframe.style.height = '100vw';
        iframe.style.maxWidth = 'none';
        iframe.style.maxHeight = 'none';
        iframe.style.marginTop = 'calc((100vh - 100vw) / 2)';
        iframe.style.marginLeft = 'auto';
        iframe.style.marginRight = 'auto';
    } else {
        // Landscape orientation
        iframe.style.transform = ''; // Reset rotation
        iframe.style.width = ''; // Reset width
        iframe.style.height = ''; // Reset height
        iframe.style.maxWidth = ''; // Reset max-width
        iframe.style.maxHeight = ''; // Reset max-height
        iframe.style.marginTop = ''; // Reset top margin
        iframe.style.marginLeft = ''; // Reset left margin
        iframe.style.marginRight = ''; // Reset right margin
    }
}

// Add event listener for orientation change
window.addEventListener('orientationchange', rotateIframeBasedOnOrientation);

// Call the function initially to set the correct rotation
rotateIframeBasedOnOrientation();
