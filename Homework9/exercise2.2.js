/*
Задать массив имен. Задать функцию, которая принимает 3 параметра и выводит их в консоль. Передать массив в функцию. Внутри функции каждый параметр должен быть равен одному из элементов массива
*/

let names = ['Petya', 'Ivan', 'Oleg'];

function logNames(name1, name2, name3) {
  console.log(name1);
  console.log(name2);
  console.log(name3);
}

logNames(...names);