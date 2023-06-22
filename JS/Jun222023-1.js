const d1 = document.getElementById('d1');
const student = {
    firstName:"Hamza",lastName:"Irfan",age:19,
    fullName:function(){
        return `${this.firstName} ${this.lastName}`;
    },
    showBio:function(){
        return `<ul><li>First Name : ${this.firstName}</li>
                <li>Last Name : ${this.lastName}</li>
                <li>age: ${this.age}</li></ul>`;
    }
};
// student.firstName = "Muhammad Hamza";//we can change property value.
// console.log(student.firstName);

// student.age = 21;//we can change property value.
// console.log(student.age);

console.log(student); //show content of the student object
console.log(window); //show content of the built in JS window object

// d1.innerText = student.firstName;
// d1.innerText += student.lastName;
// d1.innerText += student.age;
// d1.innerText += student.fullName();
d1.innerHTML += student.showBio();