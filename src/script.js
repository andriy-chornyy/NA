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
  './Photo/telegram.jpg',
  './Photo/viber.jpg',
  './Photo/close.jpg',
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

document.addEventListener('DOMContentLoaded', function() {
  button = document.querySelector('#social-button');
  buttonImage = document.getElementById('buttonImage');
  socialIcons = document.querySelector('.social-icons');

  socialIcons.style.display = 'none';

  function stopAnimation() {
    clearInterval(animationInterval);
    animationInterval = null;
  }

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




document.addEventListener("DOMContentLoaded", function() {
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
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
