/*1. Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша */

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('input').addEventListener('keyup', function(event) {
    event.preventDefault();

    const input = event.target;
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    let key = event.key;

    li.textContent = key;
    ul.appendChild(li);
    input.value = '';
  });
});