/*
//for loop
let user={
    name:"kani",
    age:19,
    "is Singer":true,
}
for(let key in user){
    console.log(key+";"+user[key]);
}
const array=[1,2,3,6,4,5]
for(let value of array){
    console.log(value);
}*/

//Ternary operator
/*let num=3;
let n=(num%2==0)?"Even":"odd"
console.log(n)
mark=50
let grade = (mark>=90)?"A":(mark>=70)?"B":(mark>=40)?"C":"F";
console.log(grade)

//objCopy VS dataCopy
let data=42;
let dataCopy=data;
dataCopy=49;
console.log(data);
const obj={data:42}
const objCopy=obj;
objCopy.data=48;
console.log(obj.data);*/


//spread operator(...)
let array=[2,3,4,1,5]
let arrayc=[...array,7,10]//spread operator
console.log(arrayc)

//create two obj data & merge , log
const object={name:"kani",city:"cbe"}
const ob2={age:19}
const res={...object,...ob2}
console.log(res)