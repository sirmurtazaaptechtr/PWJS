const d1 = document.getElementById('d1');
let a = 10;
let b = 1.25;

console.log(a);
console.log("the value of a is " + a);
console.log(`the value of a is ${a}`);
console.log(`the multiple of a and b is ${(a*b).toFixed(3)} where a = ${a} and b = ${b}`);

let price = 10;
let VAT = 0.25;
console.log(`Total: ${(price * (1 + VAT)).toFixed(2)}`);

d1.innerHTML = `<p>Total: ${(price * (1 + VAT)).toFixed(2)}</p>`;

//Conditional Statements : JavaScript if, else, else if and switch

// let num = prompt("Enter any Number");

// if(num % 2 == 0){
//     console.log(`${num} is Even`);
// }else{
//     console.log(`${num} is Odd`);
// }

const num = document.getElementById('num');
const d2 = document.getElementById('d2');
const btn1 = document.getElementById('btn1');

function checkEvenOdd (){
    let myNum = num.value;
    if(myNum % 2 == 0){
        d2.innerHTML =`<p>${myNum} is Even</p>`;
    }else{
        d2.innerHTML = `<p>${myNum} is Odd</p>`;
    }
}
btn1.addEventListener("click",checkEvenOdd);

// let op = Number(prompt("Enter Choice : (1-3)"));

// switch(op){
//     case 1:
//         console.log('This is case 1');
//     break;
//     case 2:
//         console.log('This is case 2');
//     break;
//     case 3:
//         console.log('This is case 3');
//     break;

//     default:
//         console.log('No case Match');
//     break;
// }

const alpha = document.getElementById('alpha');
const btn2 = document.getElementById('btn2');
function checkAlphabet(){
    let alphabet = alpha.value;
    if(alphabet >= 'a' && alphabet <= 'z' || alphabet >= 'A' && alphabet <= 'Z'){
        switch(alphabet){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
                d2.innerHTML = `<p>${alphabet} is a Vowel</p>`;
            break;
            default:
                d2.innerHTML = `<p>${alphabet} is a Consonent</p>`;
            break;
        }
    }else{
        d2.innerHTML = `<p>${alphabet} is not an Alphabet!</p>`;
    }
}
btn2.addEventListener("click",checkAlphabet);