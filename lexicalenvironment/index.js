//Scope means where  can i access a specific variables or function in our code called scope.

function a() {
  var a = 34;

  function b() {
    console.log(a);
  }
  b();
}

a();

//scope is directly depends on lexical environment .
//Lexical environment is the local memory along with lexical environment to its parents.

//the chain of lexical environment called scope chain.

/*
-----------------Shortest JavaScript Program-----------
      window ===  this 
      don't write a single line of code
      Any variables or function is not inside the function called global scope .
*/

var w = 3;
function h() {
  let a = 4;
  console.log(w);
}

h();
