function sum(a) {
  function returnSum(b) {
    b = a + b;
    console.log(b);
  }
  return returnSum;
}
let addTen = sum(10);
let addOne = sum(1);
addTen(2);
addOne(2);
sum(5)(6);
