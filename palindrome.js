let firstStr = "My gym";
function palidrom(firstStr) {
  firstStr = firstStr.toLowerCase().replace(" ", "");
  secondStr = firstStr.split("").reverse().join("");
  function reverse(params) {
    if (firstStr === secondStr) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  return reverse;
}
palidrom(firstStr)();
