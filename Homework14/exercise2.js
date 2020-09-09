/*
2) Написать класс, который будет работать как калькулятор. Предусмотреть методы plus, minus, multiply, divide
Пример использования:

const calc = new Calc(10); // 10 это начальное число, с него надо начинать последующие действия, если параметра нет, то по умолчанию ноль
calc.plus(100); // 110
calc.multiply(2); // 220
calc.divide(10); // 22
*/

class Calculator {
  constructor(number) {
    this.number = 0;
    this.number = number;
    console.log(this.number);
  }

  plus() {
    this.number += this.number;
    console.log('Result: ' + this.number);
  }

  minus() {
    this.number -= this.number;
    console.log('Result: ' + this.number);
  }

  multiply() {
    this.number *= this.number;
    console.log('Result: ' + this.number);
  }

  divide() {
    this.number /= this.number;
    console.log('Result: ' + this.number);
  }
}

let calc = new Calculator(10);
