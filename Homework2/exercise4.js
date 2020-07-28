let arr = ["Картошка", "Морковь", "Укроп", "Помидор"];
let wordArr = [];

for (let words of arr) {
  wordArr[wordArr.length] = {word: words, length: words.length}
  console.log(words + "- " + words.length);
}
