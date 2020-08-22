/*
5*. Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки, поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.
*/

document.addEventListener('DOMContentLoaded', (event) => {
  let button = document.querySelector('button');

  button.addEventListener('mouseenter', (event) => {
    event.preventDefault();

    let bgColor = "#" + Math.floor(Math.random() * (256 ** 3)).toString(16);

    button.style.backgroundColor = bgColor;
  })

  button.addEventListener('mouseleave', (event) => {
    event.preventDefault();
    button.style.backgroundColor = "none";

    let degree = -180 + Math.random() * 360;
    
    button.style.transform = `rotate(${degree}deg)`;
  })
})