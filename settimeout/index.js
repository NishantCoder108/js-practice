/*
-------Example 1 [set Timeout  ]
console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("Time out of while loop");
*/

console.log('Start')

setTimeout(function cb(){
    console.log('callback')
}, 0)


console.log('End')

/*   callback function is execute when whole code is executed , you had see example 1 

    settime out with 0 time gave , when whole code is eexecuted then it will go to callstack queue and move to callstack by in the monitoring of event loop.


    --------What is set timeout  method-------
    The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
*/