let arr = [];

squareNumber(arr);

function squareNumber (arr) {
  let i = 0;
  while (i < 100) {
    arr.push(i ** 2);
    i++;
  }
  console.log(arr);
} 