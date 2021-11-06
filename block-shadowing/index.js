/*Block scope means inside curly braces {} or other words , if we write more than one statement so for that , We use curly braces . curly braces is used to wrap the statement into one statement .

*/

function b() {
    var a = 18;
    console.log(a)
}

b()
/*
//shadowing 
let and const are block scope 
var is a global scope variable

e.g.
*/
var c= 299;
{
    let e = 34;
    c = 34;
    const d= 322;
}
console.log(c)