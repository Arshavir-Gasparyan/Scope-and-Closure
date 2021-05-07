const filterByLength = ["kia", "tesla", "bmw", "mercedes"];
function filterArr(filterByLength) {
  let newArr = [];
  function arr() {
    for (let i = 0; i < filterByLength.length; i++) {
      if (filterByLength[i].length > 3) {
        newArr.push(filterByLength[i]);
      }
    }
    console.log(newArr);
  }
  return arr;
}
filterArr(filterByLength)();
