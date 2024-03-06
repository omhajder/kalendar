// Function to adjust the top margin of the iframe based on device orientation
function adjustTopMarginBasedOnOrientation() {
    var iframe = document.getElementById('sheet-iframe');
    var orientation = window.orientation;

    if (orientation === 0 || orientation === 180) {
        // Portrait orientation
        iframe.style.marginTop = '0';
    } else {
        // Landscape orientation
        // Reset margin to original value
        iframe.style.marginTop = ''; 
    }
}

// Add event listener for orientation change
window.addEventListener('orientationchange', adjustTopMarginBasedOnOrientation);

// Call the function initially to set the correct top margin
adjustTopMarginBasedOnOrientation();
