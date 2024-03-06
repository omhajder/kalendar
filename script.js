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

        // Calculate margin dynamically based on viewport dimensions
        var viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        var viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        var marginTop = Math.max((viewportHeight - viewportWidth) / 2, 0);
        iframe.style.marginTop = marginTop + 'px';
        iframe.style.marginLeft = 'auto';
        iframe.style.marginRight = 'auto';
    }
}

// Call the rotation function when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    rotateIframeForMobile();
});
