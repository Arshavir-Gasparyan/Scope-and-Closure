const numbers = [5, 25, 7, 8, 1, 11, 9];
function largestProduct(numbers) {
  let newArr = [];
  let y;
  function returnNumber() {
    for (let i = 0; i < numbers.length - 1; i++) {
      let x = numbers[i] * numbers[i + 1];
      newArr.push(x);
    }
    console.log(Math.max.apply(null, newArr));
  }
  return returnNumber;
}
largestProduct(numbers)();
