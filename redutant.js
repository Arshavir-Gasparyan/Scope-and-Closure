function redundant(name) {
  function returnString() {
    console.log(name);
  }
  return returnString;
}
const f1 = redundant("Davit");
const f2 = redundant("Ann");
const f3 = redundant("");
f1();
f2();
f3();
