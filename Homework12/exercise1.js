/*
1) Запромисифаить setTimeout
Сделать функцию delay, которая в свою очередь будет возвращать промис, внутри которого будет setTimeout, как только время будет доходить до конца, необходимо резолвить ( дергать коллбек resolve() ). Функция delay принимает один параметр - время в миллисекундах
*/


function delay(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(123);
    }, time)
  })
}

delay(1000).then((data) => console.log(data));