let arr = [];
let newArray = [];

for (let i = 0; i < 100; i++) {
  arr.push(i);
}

squareNumber(arr);

function squareNumber (arr) {
  for (let key of arr) {
    newArray.push(key**2);
  }
  console.log(newArray);
}