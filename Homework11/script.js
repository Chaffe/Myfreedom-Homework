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


function getYoutubeRequest(input) {
  let inputText = input.value;
  let xmlHttp = new XMLHttpRequest();

  xmlHttp.onload = () => {
    let youtubeVideos = JSON.parse(xmlHttp.responseText);
    let videoId = youtubeVideos.items[0].id.videoId;
    
    addVideoFrame(videoId);

    addRelatedVideos(youtubeVideos);
  }

  xmlHttp.open('GET', `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBQd435YohShmfxS1G7GUdAYG-TO_oOH-g&q=${inputText}&type=video`);
  xmlHttp.setRequestHeader('Accept', 'application/json');
  xmlHttp.send();
}

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


function addRelatedVideos(youtubeVideos) {
  let youtubeVideosItems = youtubeVideos.items;
  let relatedVideosDiv = document.createElement('div');
  relatedVideosDiv.className = 'related-videos_div';
  document.body.appendChild(relatedVideosDiv);

  for(let videoItem of youtubeVideosItems) {
    addRelatedVideoPreview(videoItem, relatedVideosDiv);

    addRelatedVideoTitle(videoItem, relatedVideosDiv);
  }
}

function addRelatedVideoPreview(videoItem, div) {
  let previewImageUrl = videoItem.snippet.thumbnails.high.url;
  console.log(previewImageUrl);

  let previewImage = document.createElement('img');
  previewImage.style.marginTop = '20px';
  previewImage.url = previewImageUrl;
  previewImage.style.width = '480px';
  previewImage.style.height = '360px';
  div.appendChild(previewImage);
}


function addRelatedVideoTitle(videoItem, div) {
  let previewImageTitle = videoItem.snippet.title;

  let previewTitle = document.createElement('h3');
  previewTitle.textContent = previewImageTitle;
  div.appendChild(previewTitle);
}