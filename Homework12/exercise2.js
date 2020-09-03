/*
2) Запромисифаить setTimeout
Сделать функцию timeout, которая в свою очередь будет возвращать промис, внутри которого будет setTimeout, как только время будет доходить до конца, необходимо реджектить ( дергать коллбек reject() ). Функция timeout принимает один параметр - время в миллисекундах
*/


function timeout(time) {
  return new Promise((reject) => {
    setTimeout(() => {
      reject('Error!')
    }, time)
  });
}
timeout(1000).then(data => console.log(data));