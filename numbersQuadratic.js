const arr = [1, 2, 4, 11, 8, 2];
function toCountSum(arr) {
  let sum = 0;
  function evan(params) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sum = sum + Math.pow(arr[i], 2);
      }
    }
    console.log(sum);
  }
  return evan;
}
toCountSum(arr)();
