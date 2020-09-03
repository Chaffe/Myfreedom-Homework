/*
3) Написать функцию, которая принимает на вход массив чисел, а возвращает массив только из значений, встречающихся в массиве лишь один раз
[1,3,5,5,7,9,9,1,3,3,5,6,10,11,10,5] => [1,3,5,7,9,6,10,11]
*/

let array = [1,3,5,5,7,9,9,1,3,3,5,6,10,11,10,5];
getUniqueArray(array)

function getUniqueArray(array) {
  let result = [];
  for (let number of array) {
    if (!result.includes(number)) {
      result.push(number);
    }
  }
  console.log(result);
}


