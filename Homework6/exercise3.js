/*3. Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст. После отправки формы инпут должен быть очищен (проставить пустую строку в value). Подсказки смотрите в последнем задании с предыдущего занятия в конспекте.*/

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const input = event.target.querySelector('input');
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.textContent = input.value;
    ul.appendChild(li);

    input.value = "";
  });
})