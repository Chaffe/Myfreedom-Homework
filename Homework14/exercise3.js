/*
3) Сделать цепочку запросов. 
- пишем объект для транслита:
{ a: 'a', б: 'b', в: 'v', ...  } 
- сходить по адресу https://api.chucknorris.io/jokes/random, получить ответ
- сходить по адресу https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191101T200328Z.8d2b79e4806fbe46.18ba90eb15c52539aa3cf485e08fffabcd60629f&text=ПЕРЕВОДИМЫЙ_ТЕКСТ&lang=en-ru&format=plain, где ПЕРЕВОДИМЫЙ_ТЕКСТ должен быть текстом шутки Чака Норриса.
- найти среди переведенного текста первое попавшееся слово, в составе которого есть буква 'а'. Берем первую букву этого слова. Подставляем в объект для транслита и находим транлитерацию это первой буквы нашего слова.
- идем по адресу https://indian-cities-api-nocbegfhqg.now.sh/cities за индийскими городами, находим первый City, в названии которого есть наша транслитная буква. Фиксируем штат (State), соответствующий найденному городу. 
-  идем по адресу https://api.openweathermap.org/data/2.5/weather?q=ШТАТ&appid=a94d0a5ac08570add4b47b8da933f247, где ШТАТ - штат индийскийского города, полученный в прошлом пункте, берем температуру, переводим в Цельсии. Округляем до целых
- запускаем setTimeout промисифицированный, выдерживающий столько секунд, сколько Цельсий погода в индийском штате.
- пишем в консоль лог ‘Готово’

Делаем с помощью async/await
*/

function getChakNorriesRequest() {
  return fetch('https://api.chucknorris.io/jokes/random');
}

async function getFirstWorkJoke() {
  let request = await getChakNorriesRequest();
  let responseText = await request;
  console.log(responseText);
}

/*
let responseText = await getChakNorriesRequest();
console.log(responseText);
*/

