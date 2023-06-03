const zoomableImages = document.querySelectorAll('.zoomable');

zoomableImages.forEach(image => {
    image.addEventListener('click', () => {
        const zoomableContainer  = document.createElement('div');
        zoomableContainer.classList.add('zoomed');

        const zoomableImage = document.createElement('img');
        zoomableImage.src = image.src;

        zoomableContainer.appendChild(zoomableImage);
        document.body.appendChild(zoomableContainer);

        zoomableContainer.addEventListener('click', () => {
            zoomableContainer.remove();
        })
    })
})