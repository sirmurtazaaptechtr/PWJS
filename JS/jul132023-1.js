// let num = Number(prompt("Enter any Number"));

// if(num % 2 == 0){
//     console.log(`${num} is Even.`);
// }
// else{
//     console.log(`${num} is Odd.`);
// }

// let username = prompt("Enter Username");
// let password = prompt("Enter Password");

// if(username == "admin" && password == "123"){
//     console.log(`Welcome ${username}`);
// }else{
//     console.log("Invalid username or password!");
// }

// let num1 = Number(prompt("Enter First Number"));
// let num2 = Number(prompt("Enter Second Number"));
// let op = prompt("Enter you Choice (+, -,  *, / or %)");

// if(op == "+"){
//     console.log(`${num1} + ${num2} = ${num1 + num2}`);
// }else if(op == "-"){
//     console.log(`${num1} - ${num2} = ${num1 - num2}`);
// }else if(op == "*"){
//     console.log(`${num1} x ${num2} = ${num1 * num2}`);
// }else if(op == "/"){
//     console.log(`${num1} / ${num2} = ${num1 / num2}`);
// }else if(op == "%"){
//     console.log(`${num1} % ${num2} = ${num1 % num2}`);
// }else{
//     console.error("Invalid Input!");
// }

// switch(op){
//     case '+':
//         console.log(`${num1} + ${num2} = ${num1 + num2}`);
//     break;
//     case '-':
//         console.log(`${num1} - ${num2} = ${num1 - num2}`);
//     break;
//     case '*':
//         console.log(`${num1} x ${num2} = ${num1 * num2}`);
//     break;
//     case '/':
//         console.log(`${num1} / ${num2} = ${num1 / num2}`);
//     break;
//     case '%':
//         console.log(`${num1} % ${num2} = ${num1 % num2}`);
//     break;
//     default:
//         console.error("Invalid Input!");
//     break;    
// }

const d1 = document.getElementById('d1');

// d1.innerHTML += `<p>1. My name is Hussain</p>`;
// d1.innerHTML += `<p>2. My name is Hussain</p>`;
// d1.innerHTML += `<p>3. My name is Hussain</p>`;
// d1.innerHTML += `<p>4. My name is Hussain</p>`;
// d1.innerHTML += `<p>5. My name is Hussain</p>`;

d1.innerHTML += `<h3>For Loop</h3>`;   
for(let c = 6;c <= 5;c++){
        d1.innerHTML += `<p>${c}. My name is Hussain</p>`;
}
       
d1.innerHTML += `<h3>While Loop</h3>`;
let c = 6;
while(c <= 5){
    d1.innerHTML += `<p>${c}. My name is Hussain</p>`;
    c++;
}

d1.innerHTML += `<h3>DO While Loop</h3>`;
c = 6;
do{
    d1.innerHTML += `<p>${c}. My name is Hussain</p>`;
    c++
}while(c <= 5);
