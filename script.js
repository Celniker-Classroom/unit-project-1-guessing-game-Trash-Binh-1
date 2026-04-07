
// button select
let btn = document.getElementById("playBtn");
btn.addEventListener("click", beginPlay);

//universial functions
let randNum;
let guessBtn = document.getElementById("guessBtn");
    guessBtn.addEventListener("click", guessValue);
let giveUpBtn = document.getElementById("giveUpBtn");

// play button function
function beginPlay(){
// enable guess btn
guessBtn.disabled = false;
//enable give up button
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
function guessValue(){
// universal var
let temp;
let playerGuess = Number(document.getElementById("guess").value);
let diff;
// correct guess
if(playerGuess === randNum){
    // change text to correct
     document.getElementById('msg').textContent = "Correct!";
    // Disable guess button
   guessBtn.disabled = true;
} 
// low guess
else if(playerGuess < randNum){
    // hot cold warm
    // hot cold warm
diff = Math.abs((playerGuess - randNum))   
if(diff <= 2){
    temp = "Hot";
    }
    else if(diff <=5){
    temp = "Warm";
    }
    else if(diff > 5){
    temp = "Cold";
    }
    // change text to low
    document.getElementById('msg').textContent = "Too Low! " + "(" + temp + ")";
}
// high guess
else if(playerGuess > randNum){
    // hot cold warm
diff = Math.abs((playerGuess - randNum))   
if(diff <= 2){
    temp = "Hot";
    }
    else if(diff <=5){
    temp = "Warm";
    }
    else if(diff > 5){
    temp = "Cold";
    }
    // change text to high
     document.getElementById('msg').textContent = "Too High!" + "(" + temp + ")";
} 
}
