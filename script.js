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
        iframe.style.marginTop = 'calc((100vh - 100vw) / 2)';
        iframe.style.marginLeft = 'auto';
        iframe.style.marginRight = 'auto';
    }
}

// Call the rotation function when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    rotateIframeForMobile();
});
