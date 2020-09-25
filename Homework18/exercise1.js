/*
1. Задача на ООП. Она немного искусственная, но, если бы она была реальной, пришлось бы делать ее очень большой и сложной.

Реализовать модель работы автомастерской (мастерская - это класс). В мастерскую могут приезжать 2 типа автомобилей (легковые, грузовые), с ними можно выполнять 3 типа работ. Также есть 2 типа инструментов, которыми можно выполнять эти работы.
Методы всех классов должны выполнять что-то вроде
console.log("Работник X делает работу Y").
По данному условию должно быть минимум 11 классов. Объекты должны передаваться из одного метода в другой.
Происходить должно что-то произвольное, но более-менее логичное.
Всё целиком делать не обязательно, можно ограничиться стольким кол-вом классов (типов), сколько вам интересно.
*/

class AutoRepair {
  constructor() {
    console.log('Машина приезжает в автомастерскую...');
  }
}

let autorepair = new AutoRepair();

class Car {
  constructor(color, cleanliness, wheelState) {
    this.color = color;
    this.cleanliness = cleanliness;
    this.wheelState = wheelState;
  }
}

class PassengerCar extends Car {
  constructor(color, cleanliness, wheelState) {
    super(color, cleanliness, wheelState);
    this.carType = 'легковая'
    this.bodyHeight = 2;
    console.log(color)
  } 
}

class Truck extends Car {
  constructor() {
    this.carType = 'грузовая';
    this.bodyHeight = 4;
  } 
}

let car = new Car('черный', 'грязный', 'сдутые');
let passengerCar = new PassengerCar();
let truck = new Truck();