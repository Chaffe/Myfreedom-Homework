/*4*. Калькулятор 2.0. Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Опции select - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму, над двумя числами выполняется действие, выбранное в select. Результат отображается в div. Делать можно как с eval, так и с if-else.*/

document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    let number1 = Number(document.querySelector('.input_number1').value);
    let number2 = Number(document.querySelector('.input_number2').value);
    let equality = document.querySelector('select').value;

    let result = 0;
    
    switch(equality) {
      case "+":
        result = number1 + number2;
      break;
      case "-":
        result = number1 - number2;
      break;
      case "*":
        result = number1 * number2;
      break;
      case "/":
        result = number1 / number2;
      break;
    }

    let div = document.querySelector('div');
    div.textContent = "Результат: " + result;
  });
})