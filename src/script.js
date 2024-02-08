'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.header-image');
  let currentImageIndex = 0;

  function changeImageVisibility() {
    images.forEach((image, index) => {
      image.style.opacity = index === currentImageIndex ? 1 : 0;
    });

    currentImageIndex = (currentImageIndex + 1) % images.length;
  }

  setInterval(changeImageVisibility, 5000);
});
