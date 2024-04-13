'use strict';

import telegramImage from './images/telegram.png';
import instagramImage from './images/instagram.png';
import viberImage from './images/viber.png';
import closeImage from './images/close.png';


import BS0 from './images/main1.jpg';
import BS1 from './images/BS-1.jpg';
import BS2 from './images/BS-2.jpg';
import BS3 from './images/BS-3.jpg';
import BS4 from './images/BS-4.jpg';

import BF0 from './images/main2.jpg';
import BF1 from './images/BF-1.jpg';
import BF2 from './images/BF-2.jpg';
import BF3 from './images/BF-3.jpg';
import BF4 from './images/BF-4.jpg';
import BF5 from './images/BF-5.jpg';
import BF6 from './images/BF-6.jpg';
import BF7 from './images/BF-7.jpg';
import BF8 from './images/BF-8.jpg';
import BF9 from './images/BF-9.jpg';
import BF10 from './images/BF-10.jpg';
import BF11 from './images/BF-11.jpg';
import BF12 from './images/BF-12.jpg';
import BF13 from './images/BF-13.jpg';
import BF14 from './images/BF-14.jpg';
import BF15 from './images/BF-15.jpg';
import BF16 from './images/BF-16.jpg';
import BF17 from './images/BF-17.jpg';
import BF18 from './images/BF-18.jpg';
import BF19 from './images/BF-19.jpg';
import BF20 from './images/BF-20.jpg';
import BF21 from './images/BF-21.jpg';
import BF22 from './images/BF-22.jpg';
import BF23 from './images/BF-23.jpg';

import RES0 from './images/main3.jpg';
import RES1 from './images/RES-1.jpg';
import RES2 from './images/RES-2.jpg';
import RES3 from './images/RES-3.jpg';
import RES4 from './images/RES-4.jpg';
import RES5 from './images/RES-5.jpg';
import RES6 from './images/RES-6.jpg';
import RES7 from './images/RES-7.jpg';
import RES8 from './images/RES-8.jpg';
import RES9 from './images/RES-9.jpg';
import RES10 from './images/RES-10.jpg';
import RES11 from './images/RES-11.jpg';
import RES12 from './images/RES-12.jpg';
import RES13 from './images/RES-13.jpg';
import RES14 from './images/RES-14.jpg';
import RES15 from './images/RES-15.jpg';
import RES16 from './images/RES-16.jpg';
import RES17 from './images/RES-17.jpg';
import RES18 from './images/RES-18.jpg';

import A0 from './images/main4.jpg';
import A1 from './images/A-1.jpg';
import A2 from './images/A-2.jpg';
import A3 from './images/A-3.jpg';
import A4 from './images/A-4.jpg';
import A5 from './images/A-5.jpg';
import A6 from './images/A-6.jpg';
import A7 from './images/A-7.jpg';
import A8 from './images/A-8.jpg';
import A9 from './images/A-9.jpg';
import A10 from './images/A-10.jpg';
import A11 from './images/A-11.jpg';
import A12 from './images/A-12.jpg';
import A13 from './images/A-13.jpg';
import A14 from './images/A-14.jpg';
import A15 from './images/A-15.jpg';
import A16 from './images/A-16.jpg';
import A17 from './images/A-17.jpg';
import A18 from './images/A-18.jpg';
import A19 from './images/A-19.jpg';
import A20 from './images/A-20.jpg';
import A21 from './images/A-21.jpg';
import A22 from './images/A-22.jpg';
import A23 from './images/A-23.jpg';
import A24 from './images/A-24.jpg';
import A25 from './images/A-25.jpg';
import A26 from './images/A-26.jpg';
import A27 from './images/A-27.jpg';
import A28 from './images/A-28.jpg';
import A29 from './images/A-29.jpg';
import A30 from './images/A-30.jpg';
import A31 from './images/A-31.jpg';

import CH0 from './images/main5.jpg';
import CH1 from './images/CH-1.jpg';
import CH2 from './images/CH-2.jpg';
import CH3 from './images/CH-3.jpg';
import CH4 from './images/CH-4.jpg';
import CH5 from './images/CH-5.jpg';
import CH6 from './images/CH-6.jpg';
import CH7 from './images/CH-7.jpg';
import CH8 from './images/CH-8.jpg';
import CH9 from './images/CH-9.jpg';
import CH10 from './images/CH-10.jpg';
import CH11 from './images/CH-11.jpg';
import CH12 from './images/CH-12.jpg';
import CH13 from './images/CH-13.jpg';
import CH14 from './images/CH-14.jpg';
import CH15 from './images/CH-15.jpg';
import CH16 from './images/CH-16.jpg';

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
  instagramImage,
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

// Запускаємо автоматичне перелистування кожні 5 секунди
autoSlideInterval = setInterval(function() {
  plusIndex(1);
}, 5500);

// Функція для призупинення та знову запуску автоматичного перелистування
function resetAutoSlide() {
  clearInterval(autoSlideInterval); // Призупиняємо поточне автоперемикання

  autoSlideInterval = setInterval(function() {
    plusIndex(1); // Запускаємо автоперемикання знову
  }, 5500);
}

// Функція plusIndex, яка викликає showImage зі зміненим значенням slideIndex
function plusIndex(n) {
  showImage(slideIndex += n);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(function() {
    plusIndex(1);
  }, 5500);
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
    BS0,
    BS1,
    BS2,
    BS3,
    BS4,
  ],
  button2: [
    BF0,
    BF1,
    BF2,
    BF3,
    BF4,
    BF5,
    BF6,
    BF7,
    BF8,
    BF9,
    BF10,
    BF11,
    BF12,
    BF13,
    BF14,
    BF15,
    BF16,
    BF17,
    BF18,
    BF19,
    BF20,
    BF21,
    BF22,
    BF23,
  ],
  button3: [
    RES0,
    RES1,
    RES2,
    RES3,
    RES4,
    RES5,
    RES6,
    RES7,
    RES8,
    RES9,
    RES10,
    RES11,
    RES12,
    RES13,
    RES14,
    RES15,
    RES16,
    RES17,
    RES18,
  ],
  button4: [
    A0,
    A1,
    A2,
    A3,
    A4,
    A5,
    A6,
    A7,
    A8,
    A9,
    A10,
    A11,
    A12,
    A13,
    A14,
    A15,
    A16,
    A17,
    A18,
    A19,
    A20,
    A21,
    A22,
    A23,
    A24,
    A25,
    A26,
    A27,
    A28,
    A29,
    A30,
    A31,
  ],
  button5: [
    CH0,
    CH1,
    CH2,
    CH3,
    CH4,
    CH5,
    CH6,
    CH7,
    CH8,
    CH9,
    CH10,
    CH11,
    CH12,
    CH13,
    CH14,
    CH15,
    CH16,
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
