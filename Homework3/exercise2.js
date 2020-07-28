var arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
var newArray = [];
findPositiveNumbers(arr);

function findPositiveNumbers(arr) {
  
  for (let key of arr) {
    if (key > 0) {
      newArray.push(key);
    }
  }
}

console.log(newArray);