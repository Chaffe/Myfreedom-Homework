let a = 10;
let b = 15;

countBiggerNumber(a, b);

function countBiggerNumber(a, b) {
  if (a > b) {
    console.log("Большее число: a");
  } else if (a < b) {
    console.log("Большее число: b");
  } else {console.log("Оба числа равны.")}
}