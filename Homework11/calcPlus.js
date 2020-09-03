/*
5) сделать очень простой калькулятор calcPlus. Он умеет добавлять и вычитать любое число, приходящее в качестве параметра в соответствующий метод. Сделать на основе объекта. Одно свойство value: текущее значение калькулятора (по умолчанию ноль), 3 метода: plus, minus, multiply, divide и read (просто выводит в консоль текущее значение)
*/


let calcObject = { value: 0 };

calcObject.plus = function(number) {
  this.value += number;
}

calcObject.minus = function(number){
  this.value -= number;
}

calcObject.multiply = function(number){
  this.value *= number;
}

calcObject.divide = function(number){
  this.value /= number;
}

calcObject.read = function() {
  console.log(this.value);
}


