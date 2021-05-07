const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
function filterFalsyValues(values) {
  let newArr = [];
  function filterFalsy() {
    for (let i = 0; i < values.length; i++) {
      if (values[i]) {
        newArr.push(values[i]);
      }
    }
    console.log(newArr);
  }
  return filterFalsy;
}
filterFalsyValues(values)();
