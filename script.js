
// select level radio buttons
let selected = document.querySelector('input[name="level"]:checked');
//select "play" button
const btn = document.getElementById("playBtn");
btn.addEventListener("click", beginPlay());
 
// play button function
function beginPlay(){

// easy level
if(document.getElementsByName('e').checked){
    let range = 3;
    Math.floor(Math.random())*range + 1; // generates the number
    document.querySelector('e');}
}