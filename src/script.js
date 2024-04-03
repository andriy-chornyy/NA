'use strict';

import telegramImage from './images/telegram.png';
import viberImage from './images/viber.png';
import closeImage from './images/close.png';

import test1 from './images/test1.jpg';
import test2 from './images/test2.jpg';
import test3 from './images/test3.jpg';
import test4 from './images/test4.jpg';
import test5 from './images/test5.jpg';
import test6 from './images/test6.jpg';
import test7 from './images/test7.jpg';
import test8 from './images/test8.jpg';

document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.header-image');
  let currentImageIndex = 0;

  function changeImageVisibility() {
    images.forEach((image, index) => {
      image.style.opacity = index === currentImageIndex ? 1 : 0;
    });

    currentImageIndex = (currentImageIndex + 1) % images.length;
  }

  setInterval(changeImageVisibility, 3000);
});

// coment функція яка відправляє данні форми
document.getElementById('myForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Зупинити стандартну подію подання форми

  // Отримати дані з форми
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  const phone = document.getElementById('phone').value;

  try {
    // Виконати POST-запит на сервер і передати дані
    const response = await fetch('https://send-data-to-telegram.onrender.com/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, message, phone }),
    });

    // Перевірити, чи відповідь успішна
    if (!response.ok) {
      throw new Error('Помилка при відправленні даних на сервер');
    }

    // Вивести повідомлення про успіх
    alert('Дані успішно відправлено у чат Telegram!');

    // Очистити поля форми
    this.reset();
  } catch (error) {
    // Вивести повідомлення про помилку у разі неуспішної відправки
    console.error('Сталася помилка:', error);
    alert('Виникла помилка при відправленні даних');
  }
});

// кнопка для соц сетей
let button;
let buttonImage;
let socialIcons;
let animationInterval = null;
let currentIndex = 0;

const images = [
  telegramImage,
  viberImage,
  closeImage,
];

function startAnimation() {
  buttonImage.style.width = '40px';
  buttonImage.style.height = '40px';

  if (animationInterval === null) {
    animationInterval = setInterval(function() {
      currentIndex = (currentIndex + 1) % (images.length - 1);
      buttonImage.classList.add('scale-out');

      setTimeout(() => {
        buttonImage.src = images[currentIndex];
        buttonImage.classList.remove('scale-out');
      }, 500);
    }, 1500);
  }
}

function stopAnimation() {
  clearInterval(animationInterval);
  animationInterval = null;
}

document.addEventListener('DOMContentLoaded', function() {
  button = document.querySelector('#social-button');
  buttonImage = document.getElementById('buttonImage');
  socialIcons = document.querySelector('.social-icons');

  socialIcons.style.display = 'none';

  // function stopAnimation() {
  //   clearInterval(animationInterval);
  //   animationInterval = null;
  // }

  startAnimation();

  button.addEventListener('click', function() {
    if (currentIndex === (images.length - 1)) {
      buttonImage.src = images[0];
      socialIcons.style.display = 'none';
      socialIcons.classList.remove('show-icons');
      startAnimation();
      currentIndex = 0;
    } else {
      buttonImage.src = images[images.length - 1];
      socialIcons.style.display = 'flex';
      socialIcons.classList.add('show-icons');
      stopAnimation();
      currentIndex = images.length - 1;

      buttonImage.style.width = '20px';
      buttonImage.style.height = '20px';
    }
  });
});

document.addEventListener('click', function(event) {
  const isClickInsideButton = button.contains(event.target);
  const isClickInsideSocialIcons = socialIcons.contains(event.target);

  if (!isClickInsideButton && !isClickInsideSocialIcons) {
    socialIcons.style.display = 'none';
    socialIcons.classList.remove('show-icons');
    buttonImage.src = images[0];
    startAnimation();
    currentIndex = 0;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Получаем все элементы с классом .animate-on-visible
  const animateOnVisibleElements = document.querySelectorAll('.animate-on-visible');

  // Для каждого такого элемента
  animateOnVisibleElements.forEach(function(element) {
    // Проверяем, если элемент видим в окне просмотра
    if (isElementInViewport(element)) {
      // Добавляем класс для запуска анимации
      setTimeout(function() {
        element.classList.add('visible');
      }, 500); // Задержка в 0.5 секунды перед запуском анимации
    }
  });

  // Добавляем обработчик события прокрутки страницы, чтобы запускать анимацию при прокрутке
  window.addEventListener('scroll', function() {
    animateOnVisibleElements.forEach(function(element) {
      if (isElementInViewport(element)) {
        element.classList.add('visible');
      }
    });
  });
});

// Функция для проверки, виден ли элемент в окне просмотра
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= 0
    && rect.left >= 0
    && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


let slideIndex = 0;
const slides = document.getElementsByClassName('slides');

function showImage(n) {
  let i;
  const dots = document.getElementsByClassName('dots');

  if (n >= slides.length) {
    slideIndex = 0;
  }

  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';

  const images = JSON.parse(slides[slideIndex].getAttribute('data-images'));
  // здесь вам нужно обновить второй слайдер с images
}

showImage(slideIndex);

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let autoSlideInterval;

// Додаємо обробник події для кліку на кнопку prev
prevButton.addEventListener('click', function() {
  plusIndex(-1);
  resetAutoSlide();
});

// Додаємо обробник події для кліку на кнопку next
nextButton.addEventListener('click', function() {
  plusIndex(1);
  resetAutoSlide();
});

// Запускаємо автоматичне перелистування кожні 2 секунди
autoSlideInterval = setInterval(function() {
  plusIndex(1);
}, 2000);

// Функція для призупинення та знову запуску автоматичного перелистування
function resetAutoSlide() {
  clearInterval(autoSlideInterval); // Призупиняємо поточне автоперемикання

  autoSlideInterval = setInterval(function() {
    plusIndex(1); // Запускаємо автоперемикання знову
  }, 2000);
}

// Функція plusIndex, яка викликає showImage зі зміненим значенням slideIndex
function plusIndex(n) {
  showImage(slideIndex += n);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(function() {
    plusIndex(1);
  }, 2000);
}

// Функція для призупинення автоматичного перелистування
function pauseAutoSlide() {
  clearInterval(autoSlideInterval);
}

// pauseAutoSlide()

// SECOND SLIDER

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
let currIndex = 0;

const current = document.querySelector('#current');
// select all sub images
let imgs = document.querySelectorAll('.sub-imgs img');
const img_opacity = 0.6;

// set the first image opacity directly
// imgs[0].style.opacity = img_opacity;

// Using Event delegation to select an image
document.querySelector('.sub-imgs').addEventListener('click', imgClick);

// // Loop through the nodeList and reach out each image, method 1
// imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
  // Reset the opacity of all the images
  imgs.forEach(img => (img.style.opacity = 1));

  // Change current image to source of clicked image
  changeImageTo(e.target);
}

function changeImageTo(image) {
  imgs.forEach((img) => (img.style.opacity = 1));

  if (image.tagName === 'IMG') {
    current.src = image.src;

    // Add fade in class
    current.classList.add('fade-in');

    // Remove fade-in after 0.5 seconds
    setTimeout(() => current.classList.remove('fade-in'), 500);

    // Change the current image opacity
    image.style.opacity = img_opacity;
  }
}

// Selections
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');

// Event listener
leftButton.addEventListener('click', leftScroll);
rightButton.addEventListener('click', rightScroll);

// functions

function leftScroll() {
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].src === current.src) {
      currIndex = i - 1;

      if (currIndex < 0) {
        currIndex += imgs.length;
      }
      changeImageTo(imgs[currIndex]);
      break;
    }
  }
}

function rightScroll() {
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].src === current.src) {
      currIndex = i + 1;

      if (currIndex > imgs.length - 1) {
        currIndex -= imgs.length;
      }
      changeImageTo(imgs[currIndex]);
      break;
    }
  }
}

const sliderContainer = document.getElementById('slider-container');
// Масиви зображень для кожної кнопки
const imagesForButtons = {
  button1: [
    test1,
    test2,
    test3,
    test4,
    test5,
    test6,
    test7,
  ],
  button2: [
    test3,
    test1,
    test7,
    test8,
  ],
  button3: [
    test6,
    test3,
    test8,
    test3,
  ],
  button4: [
    test8,
    test2,
    test6,
    test3,
  ],
  button5: [
    test7,
    test8,
    test3,
    test1,
  ],
};

function onSecondSliderShow() {
  document.body.style.overflow = 'hidden';

  const sections = document.querySelectorAll('section:not(#projects)');

  sections.forEach(section => {
    section.style.filter = 'blur(10px)';
    section.style.pointerEvents = 'none';
    pauseAutoSlide();

    document.addEventListener('click', onClickOutsideSecondSlider);
  });
}

const mainSliderButtons = document.querySelectorAll('#main-slider .slider-button');

// Додаємо обробник кліків до кожної кнопки основного слайдера
mainSliderButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Отримуємо масив зображень для поточної кнопки основного слайдера
    const images = imagesForButtons[`button${index + 1}`];

    // Змінюємо зображення в другому слайдері
    changeImages(images);
    // Показуємо контейнер другого слайдера
    sliderContainer.style.display = 'block';
    console.log('test');
    // Прокручуємо до контейнера другого слайдера
    sliderContainer.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      onSecondSliderShow();
    }, 100);
  });
});

const mainImg = document.getElementById('current');

function changeImages(images) {
  const subImgsContainer = document.querySelector('#slider-container .sub-imgs');

  subImgsContainer.innerHTML = '';

  images.forEach((imageSrc, index) => {
    const imgElement = document.createElement('img');

    imgElement.setAttribute('src', imageSrc);
    imgElement.setAttribute('style', 'height: 90px');
    subImgsContainer.appendChild(imgElement);

    // Якщо це перше зображення, змінюємо основне зображення
    if (index === 0) {
      mainImg.setAttribute('src', imageSrc);
    }
  });

  imgs = document.querySelectorAll('.sub-imgs img');

  imgs.forEach(img => img.addEventListener('click', imgClick));
}

function onClickOutsideSecondSlider(event) {
  const readMoreButton = document.getElementById('read-more-button');

  if (!sliderContainer.contains(event.target) && event.target !== readMoreButton) {
    onHideSecondSlider(); // Приховуємо другий слайдер
  }
}

function onHideSecondSlider() {
  document.body.style.overflow = 'auto'; // Відновлюємо можливість прокрутки сторінки

  const sections = document.querySelectorAll('section:not(#projects)');

  sections.forEach(section => {
    section.style.filter = 'none'; // Скасовуємо розмите фони
    section.style.pointerEvents = 'auto'; // Включаємо pointer-events
  });
  sliderContainer.style.display = 'none'; // Приховуємо другий слайдер
  document.getElementById('main-slider').scrollIntoView({ behavior: 'smooth' }); // Прокручуємо до основного слайдера
  document.removeEventListener('click', onClickOutsideSecondSlider);
  startAutoSlide();
}
