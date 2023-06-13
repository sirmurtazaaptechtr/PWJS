let x = 10;
let y = 5;


let z = x + y;
console.log(z);

z = x - y;
console.log(z);

z = x * y;
console.log(z);

z = x / y;
console.log(z);

z = x % y;
console.log(z);

z = x ** y;
console.log(z);

x++; // x = x + 1; //Post increment
console.log(x);

++x; // x = x + 1; //Pre increment
console.log(x);

x--; // x = x - 1; // Post decrement
console.log(x);

--x; // x = x - 1; // Pre decrement
console.log(x);


let num1 = num2 = 10;
let res1 = res2 = 0;
console.log(`num1=${num1} and res1=${res1}`);
res1 = ++num1 + 5;
console.log(`num1=${num1} and res1=${res1}`);

console.log(`num2=${num2} and res2=${res2}`);
res2 = num2++ + 5;
console.log(`num2=${num2} and res2=${res2}`);

console.log(`num1=${num1} and res1=${res1}`);
res1 = --num1 + 5;
console.log(`num1=${num1} and res1=${res1}`);

console.log(`num2=${num2} and res2=${res2}`);
res2 = num2-- + 5;
console.log(`num2=${num2} and res2=${res2}`);

let a = 12;
let b = 6;

console.log(`a=${a} and b=${b}`);
a = b;
// b = a; // not same as above
console.log(`a=${a} and b=${b}`);
a += b; //a = a + b
console.log(`a=${a} and b=${b}`);
a -= b; //a = a - b
console.log(`a=${a} and b=${b}`);
a *= b; //a = a * b
console.log(`a=${a} and b=${b}`);
a /= b; //a = a / b
console.log(`a=${a} and b=${b}`);
a %= b; //a = a % b
console.log(`a=${a} and b=${b}`);
a **= b; //a = a ** b
console.log(`a=${a} and b=${b}`);


let p = '4';
let q = 4;

let cr = p == q;
console.log(cr);

cr = p === q;
console.log(cr);

p = 19;
cr = p > q;
console.log(cr);

cr = p >= q;
console.log(cr);

cr = p < q;
console.log(cr);

cr = p <= q;
console.log(cr);

cr = p != q;
console.log(cr);

cr = p !== q;
console.log(cr);

let age = 19;
let msg ='';

// if(age >= 18){
//     msg = `You can apply for DL`;
// }else{
//     msg = `You come after ${(18-age)*12} Months`;
// }

//Conditional (Ternary) Operator ' ? : '
msg = age >= 18 ? `You can apply for DL`: msg = `You come after ${(18-age)*12} Months`;

console.log(msg);