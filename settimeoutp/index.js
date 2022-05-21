console.log("hello");
/*
let number;

for (var i = 0; i < 5; i++) {
  number = i;

  console.log("Before settime" + number);
  setTimeout(() => {
    console.log(number);
  }, 1000);

  console.log("After settime" + number);
}
//Result : 4(5)  



for (var i = 0; i < 5; i++) {
  console.log("Before settime" + i);
  setTimeout(() => {
    console.log(i);
  }, 1000);

  console.log("After settime" + i);
}

//5(5)
*/
for (let i = 0; i < 5; i++) {
  console.log("Before settime" + i);
  setTimeout(() => {
    console.log(i);
  }, 1000);

  console.log("After settime" + i);
}
// Result : 0 1 2 3 4