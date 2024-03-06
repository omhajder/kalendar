window.addEventListener('resize', function() {
    adjustIframeSize();
});

function adjustIframeSize() {
    var container = document.getElementById('iframe-container');
    var iframe = container.querySelector('iframe');
    var aspectRatio = 16 / 9; // Change this if needed

    var containerWidth = container.offsetWidth;
    var containerHeight = containerWidth / aspectRatio;

    iframe.style.width = containerWidth + 'px';
    iframe.style.height = containerHeight + 'px';
}

// Call the function initially
adjustIframeSize();
