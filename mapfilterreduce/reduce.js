console.log("reduce");
/*
// sum
// Largest Number

const arr = [3, 5, 7, 8, 9, 6];

//Method 1 :- without reduce method
//Sum
const calculate = function (x) {
  let sum = 0;

  console.log(x.length);
  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }

  return sum;
};

// console.log(calculate(arr));

//Largest Number

const largeNum = function (x) {
  let max = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] > max) {
      max = x[i];
    }
  }
  return max;
};

// console.log(largeNum(arr))

// ----------Method 2 :- By Reduce Method ------------------------

//1. Large Number
const reduceLargeNum = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }

  return max;
}, 0);

//console.log(reduceLargeNum);

//2. Summation

const reduceSumNum = arr.reduce(function (accu, curr) {
  accu += curr;

  return accu;
});

//console.log(reduceSumNum);

/* 
     1. Reduce Function :-
     Reduce  Function is used where it takes all elements of array and comes with a single value.


     2. Filter Function :-
     Filter Function is the filtering the element of array.


    3 .Map Function :-
        Map function is the mapping one to one value.


*/

const users = [
  { firstName: "Elon", lastName: "Musk", age: 21 },
  { firstName: "Nishant ", lastName: "Kumar", age: 21 },
  { firstName: "Sachin", lastName: "Tendulkar", age: 35 },
  { firstName: "Jeff", lastName: "Bejos", age: 37 },
];

/* console.log(users.map((x) => { return x.firstName + '' + x.lastName}))
 */
//2 :- Find the number of same age
/*
const output = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] += acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }

  return acc;
}, {});

//console.log(output);

//3 :- Find the number of same age that is less than age 35
const output1 = users
  .filter((x) => x.age <= 35)
  .reduce(function (acc, curr) {
    if (acc[curr.age]) {
      acc[curr.age] += acc[curr.age];
    } else {
      acc[curr.age] = 1;
    }

    return acc;
  }, {});

//console.log(output1);






//4 :- find the name which age is less than 35
//-------Method 1
const nameOutput = users.filter((x) => x.age < 36).map((x) => x.firstName);
//console.log(nameOutput);
*/
// ---------Method 2
const nameOutputReduce = users.reduce(function (acc, curr) {
 
  if (curr.age < 36) {
  console.log(curr.firstName + curr.lastName);
   curr.firstName + curr.lastName
  }

  return 
}, {});

console.log(nameOutputReduce);
