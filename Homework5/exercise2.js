/*2. Создать разметку формы с инпутом для текста и селектом для категории (добавить несколько option). 
Под формой должны должен быть список ul. В этот список каждую секунду добавляется новый элемент li. 
Для добавления можно использовать функцию setInterval https://learn.javascript.ru/settimeout-setinterval
Вся разметка должна быть создана джаваскриптом. В HTML в начале body должен быть пустой. 
Старайтесь дробить код на небольшие функции (не обязательно. 
2.1* Использовать bootstrap для стилей*/

createForm();

function createForm () {
  let form = document.createElement('form');
  document.body.appendChild(form);

  let input = document.createElement('input');
  form.appendChild(input);

  let select = document.createElement('select');
  form.appendChild(select);

  for (let i = 1; i < 6; i++) {
    let option = document.createElement('option');
    option.textContent = i;
    select.appendChild(option);
  }
}

createList();

function createList() {
  let ul = document.createElement('ul');
  document.body.appendChild(ul);

  setInterval(createListElement, 1000);
}

function createListElement() {
  let ul = document.querySelector('ul');
  li = document.createElement('li');
  li.textContent = "123";
  ul.appendChild(li);
}