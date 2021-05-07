const arr = [9, 9, 9, 9];
function determineUniques(arr) {
  function sort() {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) {
        yesOrNo = "Yes";
      } else {
        yesOrNo = "No";

        break;
      }
    }
    console.log(yesOrNo);
  }
  return sort;
}
determineUniques(arr)();
