/*
Задать объект с N полей. Создать 2 переменные, которые будут называться так же, как поля, и хранить 2 значения полей объекта. Если  соответствующих полей в объекте нет, задать значения чисел 1 и 2. Все остальные поля объекта записать в переменную fields.
*/

let user = {firstName: 'Alex', lastName: 'Petrov', age: 20};

let {firstName, lastName, email = 'petrov@gmail.com', ...fields} = user;

console.log(firstName, lastName);
console.log(email);
console.log(fields);

