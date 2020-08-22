/*2. Вставить в разметку html теги input и div без js (просто предусмотреть в разметке). Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля) 
2.1 Каждый раз при изменении данных в инпуте, в предусмотренный div должна вписываться фраза "Клиент набирает: ВСЕ_ЧТО_НАБРАНО_В_ИНПУТЕ".*/

document.addEventListener('DOMContentLoaded', function() {
  let div = document.body.querySelector('div');
  
  document.querySelector('input').addEventListener('keyup', function(event) {
    event.preventDefault();

    let key = event.key;
    console.log(key);
  });

  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const input = event.target.querySelector('input');
    let p = document.createElement('p');
    p.textContent = "Клиент набирает фразу: " + input.value;
    div.appendChild(p);

    input.value = ''
  });
});