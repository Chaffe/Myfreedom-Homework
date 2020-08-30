/*
1. Перевести введенный текст, для этого использовать запрос
GET: https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191101T200328Z.8d2b79e4806fbe46.18ba90eb15c52539aa3cf485e08fffabcd60629f&text=ПЕРЕВОДИМЫЙ_ТЕКСТ&lang=ru-en&format=plain
*/

let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let input = document.querySelector('input');

  checkExistVideoTitle();

  checkExistVideoFrame();

  addVideoTitle(input);

  getYoutubeRequest(input);

  input.value = '';
});


function checkExistVideoTitle() {
  let title = document.querySelector('.video_title');
  if (title) {
    title.remove();
  }
}


function checkExistVideoFrame() {
  let iframe = document.querySelector('iframe');
  if (iframe) {
    iframe.remove();
  }
}


function addVideoTitle(input) {
  let p = document.createElement('p');
  p.className = 'video_title';
  p.textContent = 'Ролик: ' + input.value;
  document.body.appendChild(p);
}

/*
2. Получив текст на английском, отправить его как запрос для поиска видео:
GET: https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBrmaj7j0yIJGWcGPYH3THz_Rh8BYAtlQs&q=ИСКОМАЯ_ФРАЗА&type=video
*/

function getYoutubeRequest(input) {
  let inputText = input.value;
  let xmlHttp = new XMLHttpRequest();

  xmlHttp.onload = () => {
    let youtubeVideos = JSON.parse(xmlHttp.responseText);
    let videoId = youtubeVideos.items[0].id.videoId;
    
    addVideoFrame(videoId);
  }

  xmlHttp.open('GET', `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBQd435YohShmfxS1G7GUdAYG-TO_oOH-g&q=${inputText}&type=video`);
  xmlHttp.setRequestHeader('Accept', 'application/json');
  xmlHttp.send();
}


/*
3*. Cгенерировать плеер для первого видео (первый элемент в массиве)
ps разметка для плеера <iframe width="560" height="315" src="https://www.youtube.com/embed/ВИДЕО_ID?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>. Сгенерировать ее отдельной спец функцией. Она создаст тег iframe, нафарширует всеми необходимыми атрибутами и принимать будет только один параметр - id видоса. 
*/

function addVideoFrame(videoId) {
  let videoFrame = document.createElement('iframe');
  videoFrame.width = '560';
  videoFrame.height = '315';
  videoFrame.frameBorder = '0';
  videoFrame.allow = 'autoplay';
  videoFrame.allowFullscreen;
  videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  document.body.appendChild(videoFrame);
}