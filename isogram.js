const str = " aaAaa aaaa";
const isogram = function (str) {
  let x;
  function solveIsogram() {
    for (let i = 0; i < str.length - 1; i++) {
      str = str.toLowerCase().replace(" ", "");
      if (str[i] === str[i + 1]) {
        x = true;
      } else {
        x = false;
        break;
      }
    }
    console.log(x);
  }
  return solveIsogram;
};
isogram(str)();
