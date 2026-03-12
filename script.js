let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");

let state = 0;

function changeLight(){

red.style.background = "grey";
yellow.style.background = "grey";
green.style.background = "grey";

if(state === 0){
red.style.background = "red";
state = 1;
}

else if(state === 1){
yellow.style.background = "yellow";
state = 2;
}

else{
green.style.background = "green";
state = 0;
}

}