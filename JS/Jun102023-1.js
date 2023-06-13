const p1 = document.getElementById('p1');
const dt = new Date();
console.log(`${dt} is ${typeof(dt)}`);
console.log(dt);

const dt1 = new Date("July 03, 1983 18:30:00");
console.log(dt1);

const dt2 = new Date("1983-07-03")
console.log(dt2);

// const dt = new Date(year,month,day,hours,minutes,seconds,ms)

const dt3 = new Date(1983, 06, 03, 18, 45, 59, 123);
console.log(dt3);

console.log("obj.toString() : "+dt.toString());
p1.innerHTML = "<p><b>obj.toString() : </b>"+dt.toString()+"</p>";
p1.innerHTML += "<p><b>obj.toDateString() : </b>"+dt.toDateString()+"</p>";
p1.innerHTML += "<p><b>obj.UTCString() : </b>"+dt.toUTCString()+"</p>";
p1.innerHTML += "<p><b>obj.ISOString() : </b>"+dt.toISOString()+"</p>";
p1.innerHTML += "<p><b>obj.getFullYear() : </b>"+dt.getFullYear()+"</p>";
p1.innerHTML += "<p><b>obj.getMonth() : </b>"+dt.getMonth()+"</p>";