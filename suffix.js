const addWord = function (first) {
  return function (second) {
    first = second + first;
    console.log(first);
  };
};
const add_ly = addWord("ly");
const add_less = addWord("less");
add_ly("first");
add_less("first");
