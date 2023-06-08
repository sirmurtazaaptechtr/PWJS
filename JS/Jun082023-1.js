// x = 10;

// var x = 20;
// var x = 30;
// console.log(x);

// let x = 5;
// x = 15;
// console.log(x);


// const x = 22;
// x = 21;

// console.log(x);


let data;
// let tod = typeof(data);

// console.log(data);
// console.log(tod);

console.log(data + " is " + typeof(data));

data = 12;
console.log(data + " is " + typeof(data));

data = 22.7;
console.log(data + " is " + typeof(data));

data = 123e-5;
console.log(data + " is " + typeof(data));

data = BigInt("123456789012345678901234567890");
console.log(data + " is " + typeof(data));

data = 'Ali Raza';
console.log(data + " is " + typeof(data));

data = "Aptech Learning";
console.log(data + " is " + typeof(data));

data = true;
console.log(data + " is " + typeof(data));

data = false;
console.log(data + " is " + typeof(data));

data = null;
console.log(data + " is " + typeof(data));

data = ["Clayton",18,"Hamza",19,"Anshara",18,"Khadija",16,"Yusra",17,"Mohib",19,"Arbaz",17,"Huzaifa",17,"Zeeshan",18,"Faraz",18,"Kashan",18];
console.log(data);
console.log(data + " is " + typeof(data));
console.log(data[18] + " is " + typeof(data[18]));
console.log(data[19] + " is " + typeof(data[19]));

data = {name:"Clayton",age:18};
console.log(data);
console.log(data + " is " + typeof(data));
console.log(data.name + " is " + typeof(data.name));
console.log(data.age + " is " + typeof(data.age));

data = [
    {name:"Clayton",age:18},
    {name:"Hamza",age:19},
    {name:"Anshara",age:18},
    {name:"Khadija",age:16},
    {name:"Yusra",age:17},
    {name:"Mohib",age:19},
    {name:"Arbaz",age:17},
    {name:"Huzaifa",age:17},
    {name:"Zeeshan",age:18},
    {name:"Faraz",age:18},
    {name:"Kashan",age:18}
];

console.log(data);
console.log(data + " is " + typeof(data));
console.log(data[4].name + " is " + typeof(data[4].name));
console.log(data[4].age + " is " + typeof(data[4].age));