const p1 = document.getElementById('p1');
let myArr = ["Ayesha","Zeeshan","Kashan","Anshara","Hamza","Mohib","Faraz"];

console.log(myArr);
console.log(myArr[2]);
console.log(myArr[0]);

let len = myArr.length;

console.log(len);

p1.innerText = myArr.toString();
p1.innerText = myArr.join(" * ");

let nameArr = ["Syed","Murtaza","Hussain"];

p1.innerText = nameArr.toString();
p1.innerText = nameArr.join(" ");

console.log(myArr);

myArr.push("Murtaza");

console.log(myArr);

myArr.push("Huzaifa");

myArr.push("Arbaz");

console.log(myArr);

myArr.pop();
myArr.pop();
myArr.pop();

console.log(myArr);

myArr.unshift("Arbaz");
myArr.unshift("Huzaifa");
myArr.unshift("Murtaza");

console.log(myArr);

myArr.shift();
myArr.shift();
myArr.shift();

console.log(myArr);