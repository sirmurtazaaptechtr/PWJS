window.localStorage.setItem("username","murtaza");
window.localStorage.setItem("password","admin@123");
window.localStorage.setItem("email","murtaza@hussain.com");

console.log(localStorage.getItem("username"));
console.log(localStorage.key(0));
console.log(localStorage.getItem(localStorage.key(0)));

// localStorage.clear();

for(let i = 0;i < localStorage.length;i++){
    console.log(`${localStorage.key(i)} = ${localStorage.getItem(localStorage.key(i))}`);
}

localStorage.removeItem("username");

for(let i = 0;i < localStorage.length;i++){
    console.log(`${localStorage.key(i)} = ${localStorage.getItem(localStorage.key(i))}`);
}