console.log("Start");

const radius = [3, 4, 5, 6, 2, 7];

const calculate = (radius, logic) => {
  const output = [];

  for (i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

const area = (radius) => {
  return Math.PI * radius * radius;
};

const circumference = (radius) => {
  return 2 * Math.PI * radius;
};

const diameter = (radius) => {
  return 2 * radius;
};
console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

console.log(radius.map(area));

/*

Higher Order Function : - A function which inside the another function and return function itself this is called higher order function . 

Callback Function : -  When a function which is passed into higher order function is known as callback function.

Function is first class citizen in javascript.




//--------------- The upper code is in higher order function.-------------
    _____ which is scalable , reausable , modularable



    
//-----We can also write this code this type but it is not recommended----------
_____________________________________________________________________________________
console.log("Start");

const radius = [3, 4, 5, 6, 2, 7];

const areaCalculate = function area(radius) {
  const output = [];

  for (i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }

  return output;
};

console.log(areaCalculate(radius));

//____________________________________________

const circumferenceCalculate = function circumference(radius) {
  const output = [];

  for (i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};

console.log(circumferenceCalculate(radius));

//________________________________________________

const diameter = function diameter(radius) {
  const output = [];

  for (i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }

  return output;
};

console.log(diameter(radius));

*/
