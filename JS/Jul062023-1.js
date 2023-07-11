let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
delete fruits[1];
console.log(fruits);

const myGirls = ["Yusra", "Mahnoor", "Anshara"];
const myBoys = ["Huzaifa", "Mohaib", "Arbaz", "Hamza"];

let myClass = myGirls.concat(myBoys);
console.log(myClass);

myClass = myClass.concat("Murtaza");
console.log(myClass);

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();

console.log(newArr);

console.log(fruits);

fruits.splice(1,1,'Orange', "Lemon", "Kiwi");
console.log(fruits);

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus1 = fruits.slice(1);
const citrus2 = fruits.slice(1,3);

console.log(citrus1);
console.log(citrus2);

console.log(fruits);

fruits.sort();
console.log(fruits);

fruits.reverse();
console.log(fruits);