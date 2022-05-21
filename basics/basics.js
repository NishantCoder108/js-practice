//Math method
let num = 10.9;
console.log(Math.round(num)) ; /*Result -->11. This is traditional method . when, after point any integer >= 5 then they will have upper value of that integer and < 5 then lowest value will return of his integer. */
console.log(Math.floor(num)); /*Result -->10. Any number after point (.)  , his lowest value will return to his num*/
console.log(Math.random()); /*Result -->0.4381636607553949. It generates random number between 0 and 1 */
console.log(Math.pow(2,3));/*Result -->8 . It will do power of 2 or 2*2*2  or 2is three times or 2 have power 3 */



//Change to Number
let strNum = '10.8px'
console.log(Number(strNum)); /*Result -->NaN. when number is only string , then it work , it change to number .but in this case which have both number and also string so it return NaN. */
console.log(parseInt(strNum));/*Result -->10. It will separate the number and string , it return lowest value of that number */
console.log(parseFloat(strNum)); /*Result -->10.8. It will help in directly separated the number as it is. */



//Difference == and  ===
console.log('10' == 10);   /* Result --> true. Both are same as value. But one is string and second one is number.it compares the value */
console.log('10' === 10); /* Result --> false. They are same as value level but they are differ as type. one are string and other is number. it compares the type*/



//We can do with Number
let numb = 10;
console.log(numb/2);/* Result --> 5 */
console.log(numb*2);/* Result --> 20 */
console.log(numb+2);/* Result --> 12 */
console.log(numb-2);/* Result --> 8 */
console.log(Infinity);/* Result --> Infinity */
console.log(BigInt(100));/* Result --> 100n , this is big number */
console.log(100n);/* Result --> 100n , this is big number , it will work */
console.log(typeof 100n);/*Result --> bigint , this is bigint i.e.big Number */



//Iterating the string
let str = 'abcd';
console.log('abcd' < 'ebah'); /*Result --> true , it is iterating all letter and check in sequence . first they see a is equal and then what is second letter and finally they decide what will come after . */
console.log('abcd' ==='abcd') /*they are true */



//Single quote (') inside single quote(') 
console.log('Hello I am single\'s   quote'); /* Result --> Hello I am single's   quote,  For using single quote inside single use, \ . It is good way  */



//Line Break
console.log('Hello \nWorld');/*Result --> Hello World  , World is next line . use \n */



//Template Literals
console.log(`I am using template literals ,${2+ 3} `); /*Result --> I am using template literals ,5   , we can give any iteger or adding etc in template literals*/



//includes , startsWith , endsWith , toUpperCase ,toLowerCase
let str1  = 'abcd'; 
console.log(str1.includes('a'));/*Result: true , a is includes in str1 */
console.log(str1.startsWith('b'));/*Result: false , str1 is not starting with b*/
console.log(str1.endsWith('d'));/*Result: true , str1 is ending with d */
console.log(str1.toUpperCase());/*Result: ABCD , str1 will be in uppercase */
console.log(str1.toLowerCase());/*Result: abcd , str1 will be in lowercase */



//substr , slice , padStart ,padEnd
let str2 = 'abcd';
console.log(str2.substr(1,2)); /*Result: bc , first argument is where to start for substr and we can say , this is index of str2. second is How much and it is move with index  */
console.log(str2.substr(1)); /* Result: bcd , It will remove from starting side.it is remove of index 0 place . and show all the index's value of str2 as it is.*/

console.log(str2.slice(2));/*Result : cd , it is same as str2.substr(1) . removing from the starting side. */
console.log(str2.slice(1,2))/*Resutl : b  , first is index  or which index to start and second is how many Means (second - first), it will show . */

console.log(str2.padStart(5,'-')); /* Result: -abcd   ,it have four character. it've not fifth character so first character starts with - or anything you want.*/
console.log(str2.padEnd(6, '-'));/*Result: abcd--   , it is same as padStart but it will move to end. */




//trim  
let str3 = '         abcd  ';
console.log(str3.trim()); /*Result : abcd , it will remove white space both sides*/
console.log(str3.trimStart()); /*Result : abcd , it will remove white space left sides*/
console.log(str3.trimEnd()); /*Result : abcd , it will remove white space righ sides*/



//split Method
let str4 = 'a ,v, c ,d';
console.log(str4);/*Result: a ,v, c ,d  , this is string*/
console.log(str4.split(','));/*Result:[ 'a ', 'v', ' c ', 'd' ] , here is spliting by comma(,) so it necessary when we split that must be present in str4 . separated by anything such as '' or ' ' , it space between two words*/
console.log(str4.split('e'));/*Result:[ 'a ,v, c ,d' ] , it will only change into array as it is */



//Object in Javascript
const person = {
    name: 'Nishant Kumar',
    branch:'civil'

}
console.log(person) ; /*Res:{ name: 'Nishant Kumar', branch: 'civil' } , it directly tocopy send . */
console.log(person.name) //Nishant Kumar
console.log(person.branch);//civil
console.log(JSON.stringify(person));//{"name":"Nishant Kumar","branch":"civil"} , it just stringify the object.
console.log(JSON.parse(JSON.stringify(person)));//{ name: 'Nishant Kumar', branch: 'civil' } , After the stringify and then we return in object.
console.log(typeof JSON.stringify(person)); //string , it will return string.



//Map method
const map = new Map() // it is constructor .
   map.set(342, "First");
   map.set(24, 'Second'); //first is key and second is Value
   map.set(4, 5);
console.log(map.get(4)); //First  , here we can show data ,only with the of key.
console.log(map.size)



//Set method
const set = new Set();
set.add("First");
set.add('second');
set.add('second');
console.log(set.size);//2   | No duplicate will write
console.log(set);//Set(2) { 'First', 'second' }   | It have no key ,it's value is unique 
set.delete('first')
console.log(set.has('first')); //false  | first value have deleted.



//Array
const arr1 = [1,2,3,4]
console.log(arr1);//[ 1, 2, 3, 4 ]
arr1.push('sfhwehffh');
console.log(arr1);//[ 1, 2, 3, 4, 'sfhwehffh' ]  | we can't directly push in console to show, it will not happen in right way. so first push and then show in console.log



//Functions 
function addTwo(num =5) {
    return num + 3;
}
console.log(addTwo(5));//8 | when not give any argument then it takes default num=5.

function callFunc(func , param) {  
    console.log(func(param))  ;    // Javascript is the first class function . Here , function is parameter.
}
callFunc(addTwo, 35)  //38 | function as a argument.




//For loops
for(let i =0; i<4; i++){
    console.log(i)     //0  1  2  3   |this is simple method,nothing else.

    if(i ===1){
        break;     //0 1 | when i = 1 ,then it will stop    
    }
}


for(let i=0; i< 5 ; i++){
    if(i===1){
        continue;
    }

    console.log(i) ;//0 2 3 4   | when continue then they  not print but loop will be continue
}




//While loops
let i = 0;
while(i< 4){
    console.log(i)     //0 1 2 3
    i++;
}



//do while loops
let j = 0;
do{
    console.log(i)
    j++;
}
while(j< 0) // it only atleast one time due to , it is not check the condition




//for--of  loop
for(const value of [2,4,5 ,6]){
    console.log(value)//2 4 5 ,6  | it directly return value, it iterate the whole array
   
}
for(const value of 'Ketu Surya'){
    console.log(value)// | it directly return value, it iterate the whole string
/*K
e
t
u
S
u
r
y   */
}



//for--in loop
const obj1 = {
    name:'Ketu Surya',
    course : 'Frontend Expert'
}
for(const key in obj1){
    console.log(key,obj1[key]); /*
    name Ketu Surya
    course Frontend Expert    | it mostly used in object , here we give key ,we can show of key in console and also value with obj1[key] */
}




//forEach method
[1,3,4].forEach(function(value){
    console.log(value);
    /*
1
3
4  |it iterate direct value*/
})



//Conditions
const conditon = false;
if(conditon){
    console.log("Yes is true" , conditon)
}
else if( conditon ===false){
    console.log('No , it is false' ,conditon) //No , it is false false
}
else{
  console.log('default' , conditon)
} // if is by default , it is true and all are same.




//Switch case
const myNum = 3;

switch(myNum){
    case 1: console.log(myNum); break;
    case 2: console.log(myNum) ;break;
    case 3:
    case 4: console.log(myNum);break;
    default : console.log("default")
} //3  | we can give case together.




//Ternary Operator
let num2 = 5;
console.log(num2 > 3 ? ' greater than3' : ' Lessthan3')  



//Error Handling
/*throw 'oh no'  //It will throw error but it is not better way so use below
throw new Error('oh no , this is new Error')
*/



//Error Catch
try{
    throw new Error('oh no')
}catch(error){
    console.log(error)
}
console.log( 'we can handle error through this method ');//we are writing after erroring due to error handling



//Console Logging
console.log('value')
console.error('Error Message')
console.warn("Warning Message")
console.debug('Debug Message')




//Console Table 
console.table([['Nishant ' ,'Kumar'] ,['Ketu ','Surya ']]); //it creates table in console
/*
┌─────────┬────────────┬──────────┐
│ (index) │     0      │    1     │
├─────────┼────────────┼──────────┤
│    0    │ 'Nishant ' │ 'Kumar'  │
│    1    │  'Ketu '   │ 'Surya ' │
└─────────┴────────────┴──────────┘
*/



//Count in Console
console.count()//default: 1
console.count()//default: 2
console.count()//default: 3
console.count('Key')//Key: 1
console.count('Key')//Key: 2
console.count(5)//Key: 2
/* Here we are seeing ,when directly write count ,it direct default 1 like as and when give any string or Number by default ,that will taken and move to accordingly */




//Console Time
console.time();
console.timeLog(); //default: 0.386ms  | it is checking the code ,how much it is taking the time to execution code.

console.time('key');
for(let k = 0; k<100000; k++){}
console.timeLog('key') //key: 18.954s   | it take this time to code execution run time

console.timeEnd()//it will stop the timing frame or end



//Trace method
console.trace()//where am i present , it will trace the place.



//use strict
function foo(){
     'use strict';
    let x =5;   //use strict is strict the type of that ,here x is variable but it is not with var or const or let so it throw error
    console.log('i am in foo function')
}
foo()