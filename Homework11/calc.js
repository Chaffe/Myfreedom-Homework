/*
4) сделать очень простой калькулятор calc. Он умеет добавлять и вычитать единицу. Сделать на основе объекта. Одно свойство value: текущее значение калькулятора (по умолчанию ноль), 3 метода: plus, minus и read (просто выводит в консоль текущее значение)
*/


let calcObject = { value: 0 };

calcObject.plus = function() {
  this.value += 1;
}

calcObject.minus = function(){
  this.value -= 1;
}

calcObject.read = function() {
  console.log(this.value);
}
