
class Logo {
  constructor(url) {
    this.top = 0;
    this.left = 0;
    this.width = 200;
    this.imgUrl = url;
    this.html = null;
  }

  init() {
    document.body.style.backgroundColor = 'black';
    
    let img = document.createElement('img');
    img.src = this.imgUrl;
    
    this.html = img;
    this.render();

    this.buttonEvent();
  }
  
  render() {
    let img = this.html;
    img.style.width = this.width + 'px';
    img.style.position = 'fixed';
    img.style.top = this.top + 'px';
    img.style.left = this.left + 'px';
    document.body.appendChild(img);
  }

  moveUp() {
    this.top -= 20;
    this.render();
  }
  moveDown() {
    this.top += 20;
    this.render();
  }
  moveLeft() {
    this.left -= 20;
    this.render();
  }
  moveRight() {
    this.left += 20;
    this.render();
  }

  buttonEvent() {
    document.body.addEventListener('keydown', (event) => {
      if (event.key == 'ArrowUp') {
        this.moveUp();
      } else if (event.key == 'ArrowDown') {
        this.moveDown();
      } else if (event.key == 'ArrowLeft') {
        this.moveLeft();
      } else if (event.key == 'ArrowRight') {
        this.moveRight();
      }
    })
  }
}

const imgUrl = 'https://bit.ly/2tcDito';
var mfLogotip = new Logo(imgUrl);
console.log(mfLogotip);

// запускаем наше микро-приложение
mfLogotip.init();
