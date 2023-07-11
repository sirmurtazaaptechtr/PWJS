const dateTime = document.getElementById('dateTime');
const p1 = document.getElementById('p1');
function showDate(){
    const d = new Date();
    dateTime.innerText = d;
}
// showDate();
setInterval(showDate,1000);
// There are 9 ways to create a new date object:
// 1.new Date()
// 2.new Date(date string)
// 3.new Date(year,month)
// 4.new Date(year,month,day)
// 5.new Date(year,month,day,hours)
// 6.new Date(year,month,day,hours,minutes)
// 7.new Date(year,month,day,hours,minutes,seconds)
// 8.new Date(year,month,day,hours,minutes,seconds,ms)
// 9.new Date(milliseconds)
//1.new Date(date string)_______________________________
let dt = new Date("July 03, 1983 18:40:10");
p1.innerHTML += `<span>${dt}</span><br />`;
//8.new Date(year,month,day,hours,minutes,seconds,ms)___
dt = new Date(2018, 11, 24, 10, 33, 30, 0);
p1.innerHTML += `<span>${dt}</span><br />`;

// Specifying a month higher than 11, will not result in an error but add the overflow to the next year:

dt = new Date(2018, 15, 24, 10, 33, 30);
p1.innerHTML += `<span>${dt}</span><br />`;
// same as above
dt = new Date(2019, 3, 24, 10, 33, 30);
p1.innerHTML += `<span>${dt}</span><br />`;

