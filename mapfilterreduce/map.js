/*
console.log("Map Filter Reduce");

//Method 1 :- [Without filter , reduce , map]

//  double , triple , binary

const arr = [2, 4, 5, 6, 7, 5];

const calculate = function (arr ,logic) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(logic(arr[i]));
  }
  return output;
};

function double(x) {
    return 2 * x
}

function triple(x) {
    return 3 * x
}

function binary(x) {
    return x.toString(2)
}
console.log(calculate(arr , double))
console.log(calculate(arr , triple))
console.log(calculate(arr , binary))


//Method 2 :- By Map function

console.log(arr.map(double))
console.log(arr.map(triple))
console.log(arr.map(binary))

//we can also give directt function in map function as parameter

console.log(arr.map(function x4(x) {
    return 4 * x
}))

console.log(arr)
*/