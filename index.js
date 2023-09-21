  // Определение целевой даты и времени для обратного отсчета
  let startTime = new Date("2023-09-21T00:00:00");
  let endTime = new Date("2023-09-29T23:59:59")


  // Функция для обновления времени на таймере
  function updateTimer() {
    let currentDate = new Date();
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
  'media/orange.png',
  'media/pink.png',
  'media/yellow.png',
];
// Добавляем обработчик события клика на каждое маленькое изображение
thumbnails.forEach(function(thumbnail, index) {
  thumbnail.addEventListener('click', function() {
    // Получаем путь к большому изображению из массива
    let largeImageSrc = largeImages[index];
    // Заменяем большое изображение
    mainImage.setAttribute('src', largeImageSrc);
    
  });
});

let selctBtns = document.querySelector('.custom-select');
let selctBtn = document.querySelectorAll('.custom-select');
let options = Array.from(selctBtns.options);
options.map((e)=>{
  selctBtns.addEventListener('change', event =>{
    let selectValue = event.target.value;
    if (selectValue === 'option1'){
      mainImage.setAttribute('src', largeImages[0]);
    }
    if (selectValue === 'option2'){
      mainImage.setAttribute('src', largeImages[1]);
    }
    if (selectValue === 'option3'){
      mainImage.setAttribute('src', largeImages[2]);
    }
    if (selectValue === 'option4'){
      mainImage.setAttribute('src', largeImages[3]);
    }
  })
})

