
// button select
let btn = document.getElementById("playBtn");
btn.addEventListener("click", beginPlay);

//universial functions
let randNum;
let guessBtn = document.getElementById("guessBtn");
    guessBtn.addEventListener("click", guessValue);
let giveUpBtn = document.getElementById("giveUpBtn");
let totalWins = document.getElementById("wins");
let wins = 0;
//averages
let avgScore = document.getElementById("avgScore");
let totalGuess = 0;
let playGuess = 0;

//prompt player name
let tuffName = prompt("What is your name?");
const nameFix = tuffName.charAt(0).toUpperCase() + tuffName.slice(1).toLowerCase();



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
    document.getElementById('msg').textContent= "Guess the number between 1-3, " + nameFix;}
//medium mode
if(document.getElementById("m").checked){
    //generate the number
    let range = 10;
    randNum = Math.floor(Math.random()*range) + 1; 
    // change text to med guess
    document.getElementById('msg').textContent= "Guess the number between 1-10, " + nameFix;}
//hard mode
if(document.getElementById("h").checked){
    //generate the number
    let range = 100;
    randNum = Math.floor(Math.random()*range) + 1; 
    // change text to hard guess
    document.getElementById('msg').textContent= "Guess the number between 1-100, " + nameFix;}
}
    
// Guess the number function
function guessValue(){
// universal var
let temp;
let playerGuess = Number(document.getElementById("guess").value);
let diff;
// correct guess
if(playerGuess === randNum){
    // change text to correct
     document.getElementById('msg').textContent = "Correct " + nameFix + "!";
    // Disable guess button
   guessBtn.disabled = true;
   // enable play button
    playBtn.disabled = false;
   // Update number of guesses
    playGuess = playGuess + 1;
    // Average score Update
   scoreUpdate();
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
    // Update number of guesses
    playGuess = playGuess + 1;
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
    // Update number of guesses
    playGuess = playGuess + 1;
    // change text to high
     document.getElementById('msg').textContent = "Too High!" + "(" + temp + ")";
} 
}

//function to update total scores and wins
function scoreUpdate(){
    wins++;
    totalGuess += playGuess

    let finalAvgScore = totalGuess/wins;
    avgScore.innerText = "Average Score: " + finalAvgScore;
    totalWins.innerText = "Total wins: " + wins;
    playGuess = 0;
}
