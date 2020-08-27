/*
Перевести введенный текст, для этого использовать запрос
GET: https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191101T200328Z.8d2b79e4806fbe46.18ba90eb15c52539aa3cf485e08fffabcd60629f&text=ПЕРЕВОДИМЫЙ_ТЕКСТ&lang=ru-en&format=plain
*/

let form = document.querySelector('form');
form.addEventListener('submit', () => {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.onload = () => { 
    let p = document.createElement('p');
    p.textContent = xmlHttp.responseText;
    document.body.appendChild(p);
  }

  let inputText = document.querySelector('input').value;
  xmlHttp.open('GET', `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180711T185018Z.677da5616098f5c1.c2be27c01cb9d0d3ab809b255f2d4b4bc878b0dd&text=${inputText}&lang=ru-en&format=plain`);
  xmlHttp.setRequestHeader('Accept', 'application/json');
  xmlHttp.send();
})

