let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
let newArr = []


for (let number of arr) {
  if (number > 0) {
    //newArr.push(arr[number]);
    newArr[newArr.length] = number;
  }
}

console.log(newArr);