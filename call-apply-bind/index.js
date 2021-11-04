const users = {
  firstName: "Nishant ",
  lastName: "Kumar",
  fullName: function (branch, reg) {
    console.log(
      this.firstName +
        " " +
        this.lastName +
        " of Branch " +
        branch +
        " and registration no is " +
        reg
    );
  },
};

const users2 = {
  firstName: "Abhishek",
  lastName: "Kumar",
};

// let  fullName = function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
// we can make function outside the object and call with call , apply or bind method . it same work as inside the other object.

users.fullName.call(users, "civil", 18101125045); // call method takes ,first argument as reference of object , other is separated by comma ','.
users.fullName.apply(users2, ["Electrical", 458955226]); //apply method takes first argument as reference of object , and other argument is in  array list form.

let printFullname = users.fullName.bind(users2, "Computer Science");
console.log(printFullname, "");
printFullname(784448); //bind method , It bind the objct with function  where i passed data through that function. it copy the method and use it . we can invoked later.

/**
 Call Method :- We borrow the function from the other objects and use it with other data  it directly invoked .

 Apply Method :- it same as call method but it takes second argument  in array list.

 Bind Method :-  it same as call method but it is not invoked directly . we can invoked later. it binds the object with functions .
 */
