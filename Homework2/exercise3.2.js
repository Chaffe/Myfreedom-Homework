let arr = [5, 4, 3, 8, 0];
let sum = 0;


for (let number of arr) {
  if (number % 2 == 0)
  sum += number;
}

console.log(sum);