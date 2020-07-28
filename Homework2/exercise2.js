let arr = [5, 4, 3, 8, 0];
let limit = 5;
let newArr = [];

for (let number of arr) {
  if (number >= limit) {
    newArr[newArr.length] = number;
  }
}

console.log(newArr);