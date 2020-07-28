let arr = [];

squareNumber(arr);

function squareNumber (arr) {
  let i = 0;
  do {
    arr.push(i ** 2);
    i++;
  } while (i < 100);
  console.log(arr);
} 