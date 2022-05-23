const slideImages = document.getElementsByClassName('image');

const nextImageDelay = 2000;
let currentImageCounter = 0;

slideImages[currentImageCounter].classList.add('opacity');

setInterval(nextImage, nextImageDelay);

function nextImage() {
    slideImages[currentImageCounter].classList.remove('opacity');
    currentImageCounter = (currentImageCounter + 1) % slideImages.length;
    slideImages[currentImageCounter].classList.add('opacity');
}

// Zanggar 26 February
// Nazerke 12 June