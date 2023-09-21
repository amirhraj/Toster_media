  // Определение целевой даты и времени для обратного отсчета
  let startTime = new Date("2023-09-21T00:00:00");
  let endTime = new Date("2023-09-29T23:59:59")


  // Функция для обновления времени на таймере
  function updateTimer() {
    var currentDate = new Date();

    

    if (currentDate < startTime) {
      // Вычисление оставшегося времени
      let timeDifference = startDate.getTime() - currentDate.getTime();


      document.getElementById("timer").textContent = formattedTime;
    } else if ( currentDate > endTime) {
      
      let timeDifference = endTime.getTime() - currentDate.getTime();
    }else{
        var timeDifference = endTime.getTime() - currentDate.getTime();
    }

    let seconds = Math.floor(timeDifference / 1000) % 60;
    let minutes = Math.floor(timeDifference / 1000 / 60) % 60;
    let hours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
       // Форматирование времени
       var formattedTime =
       ("0" + hours).slice(-2) +
       ":" +
       ("0" + minutes).slice(-2) +
       ":" +
       ("0" + seconds).slice(-2);
 
     // Обновление текста на таймере
     document.getElementById("timer").textContent = formattedTime;
  }

  // Обновление времени каждую секунду
  let timerInterval = setInterval(updateTimer, 1000);

let thumbnails = document.querySelectorAll('.thumbnails img');
let mainImage = document.querySelector('.main_image img');

// Обновленный массив больших изображений
let largeImages = [
  'media/taps_black.png',
  'media/pink.png',
  'media/yellow.png',
  'media/orange.png'
];

// Добавляем обработчик события клика на каждое маленькое изображение
thumbnails.forEach(function(thumbnail, index) {
  thumbnail.addEventListener('click', function() {
    // Получаем путь к большому изображению из массива
    
    let largeImageSrc = largeImages[index];
    console.log(largeImageSrc)
    console.log(mainImage)
    // Заменяем большое изображение
    mainImage.setAttribute('src', largeImageSrc);
    
  });
});