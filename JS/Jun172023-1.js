// let username = prompt("Enter Username");
// let password = prompt("Enter Password");

const usid = document.getElementById('usid');
const pwd = document.getElementById('pwd');
const loginBtn = document.getElementById('loginBtn');
const d1 = document.getElementById('d1');

loginBtn.addEventListener("click",function(){
    let username = usid.value;   
    let password = pwd.value;   
    
    if(username == 'admin' && password == 'admin123')
    {
        d1.innerHTML = `<h2>Welcome ${username}</h2>`;
    }
    else
    {
        d1.innerHTML = `<p>Invalid username or password</p>`;        
    }

});

