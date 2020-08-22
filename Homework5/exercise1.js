/*1. На странице в html задать список элементов li с числами.
Джававскриптом нужно выбрать из этого списка четные числа и создать из них массив.
Затем, используя метод forEach, создать из массива новый список элементов li и поместить эти элементы в исходный тег ul.
Для обхода через querySelectorAll использовать цикл for-of (forEach работать не будет)*/

addNumbersElements();

function addNumbersElements () {
  let ul = document.querySelector('ul');
  let numbers = [];
  let evenNumbers = [];

  for (let i = 1; i <= 10; i++) {
    let li = document.createElement('li');
    li.textContent = i;
    ul.appendChild(li);
  
    numbers.push(i);
  }

  addEvenNumbersElements(numbers);
}


function addEvenNumbersElements(numbers) {
  let ul = document.querySelector('ul');
  let evenNumbers = [];

  evenNumbers = numbers.filter(function(evenNumber) {
    return (evenNumber % 2 === 0);
  });
  
  console.log(evenNumbers);
  
  evenNumbers.forEach(function(evenNumber) {
    let li = document.createElement('li');
    li.textContent = evenNumber;
    ul.appendChild(li);
  });
}







