const printAfter = () => {
  let a = "Hello World";
  return a;
};
printAfter();
const print = () => {
  let b = "Elon Musk";
  return [printAfter(), b].join(",");
};
console.log(print(printAfter));
