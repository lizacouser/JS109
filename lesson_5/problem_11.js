// Practice Problem 11
// Given the following data structure, use the map method to
// return a **new array** identical in structure to the original
// but, with each number incremented by 1. Do not modify the
// original data structure.
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
let answer = arr.map(obj => {
  let newObj = {};  //NEW OBJECT!
  Object.keys(obj).forEach(key => {
    newObj[key] = obj[key] + 1; //this doesn't work because it mutates object?
  });
  return newObj;
});

console.log(answer);