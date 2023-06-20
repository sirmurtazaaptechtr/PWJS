/*
function functionName (parameters){
    defination of the function
}
*/

// Function Library
function showName(){
    console.log("My Name is Hussain.");
}

function add2Nums(num1,num2){
    console.log(`${num1} + ${num2} = ${num1+num2}`);
    return num1+num2;
}

const myFun = function(name){
    console.log(`Dear ${name}, how are you?`);
}

const myFun2 = (name) => {
    console.log(`Dear ${name}, bye bye`);
}
// END of Function Library
showName();
add2Nums(12,35);
add2Nums(1,3);
add2Nums(11,23);
showName();
let res = 2 * add2Nums(3,4);
console.log(res);
const array = [10,20,30,40,50,60,70,80,90];
array.forEach(function (element)  {
    console.log(element);
});
array.forEach((element,index) => {
    console.log(`[${index}] = ${element}`);    
});
showName();
console.log(add2Nums(1,2));
myFun("Ayesha");
myFun2("Huzaifa");