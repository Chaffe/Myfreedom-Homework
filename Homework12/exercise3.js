/*
3*) Не используя промисы релизовать функцию httpGet, с которой будет выполняться следующий код
  let promise = httpGet('https://todoappexamplejs.herokuapp.com/items.json')
  setTimeout(() => promise.then(response => document.body.textContent = response), 2000)

Функция может выглядеть как-то так:
function httpGet(url) {
  let result = {};
  result.then = function() {
    ...
  }
  ...
  return result;
}
*/

function httpGet(url) {
  let xhr = new XMLHttpRequest;
  xhr.open('GET', url);
  let result = {};

  result.then = function() {
    
  }
  
  return result;
}

httpGet('https://todoappexamplejs.herokuapp.com/items.json')

