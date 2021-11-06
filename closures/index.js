//Closures is the combination of a function with the reference to the lexical environment.

function a() {
    
    var x =12;
    function b() {
        
        var y =23;
        function c() {
            console.log(x, y)
        }
        c();

    }
    b();
}
a()
var z = a
console.log(z)
z()



/* Functions remember the reference of it .it is possible because of closure.
Closure is used in :-
Currying 
Memoize
setTimeout
DOM
*/
