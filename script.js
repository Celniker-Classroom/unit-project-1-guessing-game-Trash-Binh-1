
// button select
let btn = document.getElementById("playBtn");
btn.addEventListener("click", beginPlay);

//universial functions
let randNum;
let playerGuess = document.getElementById("guess").value;


// play button function
function beginPlay(){
// enable guess btn
let guessBtn = document.getElementById("guessBtn");
guessBtn.disabled = false;
//enable give up button
let giveUpBtn = document.getElementById("giveUpBtn");
giveUpBtn.disabled = false;
//disable play button
btn.disabled = true;
//easy mode
if(document.getElementById("e").checked){
    //generate the number
    let range = 3;
    randNum = Math.floor(Math.random()*range) + 1; 
    // change text to easy guess
    document.getElementById('msg').textContent= "Guess the number between 1-3";}
//medium mode
if(document.getElementById("m").checked){
    //generate the number
    let range = 10;
    randNum = Math.floor(Math.random()*range) + 1; 
    // change text to med guess
    document.getElementById('msg').textContent= "Guess the number between 1-10";}
//hard mode
if(document.getElementById("h").checked){
    //generate the number
    let range = 100;
    randNum = Math.floor(Math.random()*range) + 1; 
    // change text to hard guess
    document.getElementById('msg').textContent= "Guess the number between 1-100";}
}
    
// Guess the number
    // if(playerGuess.value === randNum){
    //     // change text to easy guess win
    //     document.getElementById('msg').textContent= "Correct";
    //     //Disable guess button
    //     guessBtn.disabled = true;
    // }
