// Function to rotate the iframe based on device orientation
function rotateIframeBasedOnOrientation() {
    var iframe = document.getElementById('sheet-iframe');
    var orientation = window.orientation;

    if (orientation === 0 || orientation === 180) {
        iframe.style.transform = 'rotate(90deg)';
        iframe.style.width = '100vh';
        iframe.style.height = '100vw';
        iframe.style.maxWidth = 'none';
        iframe.style.maxHeight = 'none';
        iframe.style.margin = '0';
    } else {
        iframe.style.transform = '';
        iframe.style.width = '';
        iframe.style.height = '';
        iframe.style.maxWidth = '';
        iframe.style.maxHeight = '';
        iframe.style.margin = '';
    }
}

// Add event listener for orientation change
window.addEventListener('orientationchange', rotateIframeBasedOnOrientation);

// Call the function initially to set the correct rotation
rotateIframeBasedOnOrientation();
