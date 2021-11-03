/*Hoisting is the phenomena by which we can access variables and function
 even before you have initialez it.*/

// If not 'a' present it , it show not defined

if (a === undefined) {
  console.log("a is undefided");
} else {
  console.log("a is not undefined");
}
console.log(a);

//whenever 'a' is present in my code then it show  special word 'undefined'
var a;
a = 4;
//we can access copy of whole code of  function

function lovejs() {
  console.log("I love Javascript");
}

lovejs();

console.log(lovejs);
