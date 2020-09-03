let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let input = document.querySelector('input');

  getYoutubeRequest(input);

  input.value = '';
});


function getYoutubeRequest(input) {
  let inputText = input.value;
  let xmlHttp = new XMLHttpRequest();

  xmlHttp.onload = () => {
    let youtubeVideos = JSON.parse(xmlHttp.responseText);
    
    checkExistVideoTitle();

    checkExistVideoFrame();

    addVideoContainer(youtubeVideos);

    addRelatedVideos(youtubeVideos);
  }

  //AIzaSyAgBL1-H2Lp0SOqM3ulDjC07eyGec-gB7w

  xmlHttp.open('GET', `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyA1IXkWQBqrXs8UBMfZPAIVULxs9L_D_Q4&q=${inputText}&type=video`);
  xmlHttp.setRequestHeader('Accept', 'application/json');
  xmlHttp.send();
}


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


function addVideoContainer(youtubeVideos) {
  let httpVideoId = youtubeVideos.items[0].id.videoId;
  let httpVideoTitle = youtubeVideos.items[0].snippet.title;

  let videoContainer = document.createElement('div');
  videoContainer.className = 'video_container';
  videoContainer.style.marginTop = '10px';
  document.body.appendChild(videoContainer);

  addVideoTitle(videoContainer, httpVideoTitle);

  addVideoFrame(videoContainer, httpVideoId);
}


function addVideoTitle(videoContainer, httpVideoTitle) {
  let videoTitle = document.createElement('p');
  videoTitle.className = 'video_title';
  videoTitle.textContent = 'Название: ' + httpVideoTitle;
  videoContainer.appendChild(videoTitle);
}


function addVideoFrame(videoContainer, httpVideoId) {
  let videoFrame = document.createElement('iframe');
  videoFrame.width = '560';
  videoFrame.height = '315';
  videoFrame.frameBorder = '0';
  videoFrame.allow = 'autoplay';
  videoFrame.allowFullscreen;
  videoFrame.src = `https://www.youtube.com/embed/${httpVideoId}?autoplay=1`;
  videoContainer.appendChild(videoFrame);
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
  previewImage.src = previewImageUrl;
  previewImage.style.width = '480px';
  previewImage.style.height = '360px';
  previewImage.style.cursor = 'pointer';
  div.appendChild(previewImage);

  previewImage.addEventListener('click', (event) => {
    let videoContainer = document.querySelector('.video_container');
    
    let httpVideoId = videoItem.id.videoId;
    let httpVideoTitle = videoItem.snippet.title;

    checkExistVideoTitle();

    checkExistVideoFrame();

    addVideoTitle(videoContainer, httpVideoTitle);

    addVideoFrame(videoContainer, httpVideoId);
  })
}

/*
function addNewVideoTitle(videoItem) {
  let title = videoItem.snippet.title;
  let videoContainer = document.querySelector('.video_container');
  let newVideoTitle = document.createElement('p');
  newVideoTitle.className = 'new-video_title';
  newVideoTitle.textContent = 'Название: ' + title;
  videoContainer.appendChild(newVideoTitle);
}
*/

function addRelatedVideoTitle(videoItem, div) {
  let previewImageTitle = videoItem.snippet.title;

  let previewTitle = document.createElement('h3');
  previewTitle.textContent = previewImageTitle;
  div.appendChild(previewTitle);
}