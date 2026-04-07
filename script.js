
// select level radio buttons
let selected = document.querySelector('input[name="level"]:checked');
//select "play" button
const btn = document.getElementById("playBtn");
btn.addEventListener("click", beginPlay());
 
// play button function
function beginPlay(){

// enable 
// easy level
if(document.getElementsByName('e')[0].checked){
// enable guess btn
let guessBtn = document.getElementById("guessBtn");
guessBtn.disabled = false;

const giveUpBtn = document.getElementById("giveUpBtn");
giveUpBtn.disabled = false;
//generate the number
    let range = 3;
    let randNum = Math.floor(Math.random()*range) + 1; 
// change text
document.getElementById('msg').textContent= "Guess the number between 1-3";
// Guess the number

}}
