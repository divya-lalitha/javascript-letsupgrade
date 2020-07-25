const name = prompt("Enter your name");
title.innerText += `Welcome to the family ${name}`;


function changeColor(){ 
    var element=document.body;
    element.classList.toggle("dark-mode");
}


const ctime = document.getElementById('time');
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}
setInterval(clock,1000);