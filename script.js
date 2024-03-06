// Function to rotate and scale the iframe based on device orientation
function rotateAndScaleIframeBasedOnOrientation() {
    var iframe = document.getElementById('sheet-iframe');

    // Check the current orientation
    var orientation = window.orientation;

    // Apply rotation and scaling based on orientation
    if (orientation === 0 || orientation === 180) {
        // Portrait orientation
        iframe.style.transform = 'rotate(90deg)';
        iframe.style.width = '100vh';
        iframe.style.height = '105vw';
        iframe.style.maxWidth = 'none';
        iframe.style.maxHeight = 'none';
        iframe.style.marginTop = 'calc((100vh - 110vw) / 2)';
        iframe.style.marginLeft = 'auto';
        iframe.style.marginRight = 'auto';
    } else {
        // Landscape orientation
        iframe.style.transform = ''; // Reset rotation
        iframe.style.width = '100vw'; // Adjust width for landscape mode
        iframe.style.height = '100vh'; // Adjust height for landscape mode
        iframe.style.maxWidth = 'none'; // Reset max-width
        iframe.style.maxHeight = 'none'; // Reset max-height
        iframe.style.marginTop = ''; // Reset top margin
        iframe.style.marginLeft = ''; // Reset left margin
        iframe.style.marginRight = ''; // Reset right margin
    }
}

// Add event listener for orientation change
window.addEventListener('orientationchange', rotateAndScaleIframeBasedOnOrientation);

// Call the function initially to set the correct rotation and scaling
rotateAndScaleIframeBasedOnOrientation();
