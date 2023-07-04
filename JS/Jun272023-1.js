let message1 = 'Hi, My name is "Murtaza"';
console.log(message1);
let message2 = "I have my brother's notebook.";
console.log(message2);
let message3 = `"Ali" is my best friend he lives in his sister's house`;
console.log(message3);

let myName = "Syed Murtaza Hussain";
let firendName = "Ali Raza";

message1 = 'Hi, my name is "' + myName + '"';
console.log(message1);
message1 = `Hi my name is "${myName}"`;
console.log(message1);

message3 = `"${firendName}" is my best friend he lives in his sister's house.`;
console.log(message3);

let len = message3.length;
console.log(`${message3} has ${len} characters in it.`);

let midName = myName.slice(5,11+1);
console.log(midName);

let lastName = myName.substring(13,19+1);
console.log(lastName);

let firstName = myName.substr(0,4);
console.log(firstName);
midName = myName.substr(5,7);
console.log(midName);
lastName = myName.substr(13,7);
console.log(lastName);

let newName = myName.replace("Murtaza","M");
console.log(newName);

let message4 = `My full name is Syed Mortaza Hussain but my friends call my just Murtaza`;

newName =  message4.replace("Murtaza","M");
console.log(newName);

newName =  message4.replace(/M[ou]rtaza/gi,"M");
console.log(newName);

let myNameUC = myName.toUpperCase();
console.log(myNameUC);
let myNameLC = myName.toLowerCase();
console.log(myNameLC);

newName = midName.concat(" ");
newName = newName.concat(lastName);
newName = newName.concat(", ");
newName = newName.concat(firstName);
console.log(newName);

let newName1 = midName + " " + lastName + ", " + firstName;
console.log(newName1);

let newName2 = `${midName} ${lastName}, ${firstName}`;
console.log(newName2);

let text1 = "      Hello World!      ";
console.log(text1);
console.log(text1.trim());
console.log(text1.trimStart());
console.log(text1.trimEnd());

let month = 2;
let monthStr = month.toString();
let paddedMonth = monthStr.padStart(2,"*");
console.log(paddedMonth);

let nameArr = myName.split(" ");

console.log(`First Name = ${nameArr[0]}`);
console.log(`Middle Name = ${nameArr[1]}`);
console.log(`Last Name = ${nameArr[2]}`);