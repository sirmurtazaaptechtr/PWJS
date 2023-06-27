const myHeader = document.getElementById('myHeader');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

function showDate(){
    myHeader.innerHTML = Date();
}

btn2.addEventListener("click",showDate);

btn3.addEventListener("click",function(){
    myHeader.innerHTML = '';
});

p2.addEventListener("dblclick",function(){
    this.innerHTML = ``;
});
p1.addEventListener("mouseenter",function(){
    this.innerHTML = `<img src="img/Tulips.jpg" width="200">`;
});
p1.addEventListener("mouseleave",function(){
    this.innerHTML = ` <img src="img/Desert.jpg" width="200">`;
});