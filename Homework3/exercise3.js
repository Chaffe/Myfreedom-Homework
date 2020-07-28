let arr = [5, 4, 3, 8, 0];
let newArray = [];
let a = 10;

filterFor(arr, a);

function filterFor(arr, a) {
  for (let key of arr) {
    if (key >= a) {
      newArray.push(key);
    }
  }
  console.log(newArray);
}
