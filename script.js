// Rotate the iframe when viewed on mobile devices
function rotateIframeForMobile() {
    var userAgent = navigator.userAgent.toLowerCase();
    var isIphone = /iphone/.test(userAgent);
    var isMobile = /mobile/.test(userAgent);

    if (isIphone || isMobile) {
        var iframe = document.getElementById('sheet-iframe');
        iframe.style.transform = 'rotate(90deg)';
        iframe.style.width = '100vh';
        iframe.style.height = '100vw';
        iframe.style.maxWidth = 'none';
        iframe.style.maxHeight = 'none';

        // Calculate left position to center iframe horizontally
        var viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        var leftPosition = Math.max((viewportWidth - iframe.offsetHeight) / 2, 0);
        iframe.style.left = leftPosition + 'px';

        // Adjust top position to align iframe to the top of the viewport
        iframe.style.top = '0';

        // Reset margins
        iframe.style.marginTop = '0';
        iframe.style.marginLeft = '0';
        iframe.style.marginRight = '0';
    }
}

// Call the rotation function when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    rotateIframeForMobile();
});
