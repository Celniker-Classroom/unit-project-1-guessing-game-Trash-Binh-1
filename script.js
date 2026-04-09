
// play button select
let btn = document.getElementById("playBtn");
btn.addEventListener("click", beginPlay);



//universial functions
//buttons
let randNum;
let guessBtn = document.getElementById("guessBtn");
    guessBtn.addEventListener("click", guessValue);
let giveUpBtn = document.getElementById("giveUpBtn");
    giveUpBtn.addEventListener("click", giveUp);
let totalWins = document.getElementById("wins");
let wins = 0;
let range = 0;
//averages
let avgScore = document.getElementById("avgScore");
let totalGuess = 0;
let playGuess = 0;
// scores array
let scores = [];
//record timer
let start = new Date().getTime();
let elapsedTime = 0;
let storeTime = [];
// current dates and suffixes in a function
function timeUpdate(){
let now = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let monthName = months[now.getMonth()];
let date = now.getDate();
    if((date === 1) || (date === 21) || (date === 31)){
        date = date +"st";
    } else if ((date === 2) || (date === 22) ){
        date = date +"nd";
    } else if ((date === 3) || (date === 23)){
        date = date+"rd";
    } else{
        date = date+"th";
    }
let year = now.getFullYear();

// current time in seconds

let seconds = now.getSeconds();

let currentDate = document.getElementById("date");
currentDate.textContent = "It is the " + date + " of " + monthName + " in " + year+". " + seconds + " seconds has passed since the last change in minutes.";
}
//time Update function updates
timeUpdate();
let intervalTracker = setInterval(timeUpdate, 1000);

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
//record timer
timerRecord();
//easy mode
if(document.getElementById("e").checked){
    //generate the number
    range = 3;
    randNum = Math.floor(Math.random()*range) + 1; 
    // change text to easy guess
    document.getElementById('msg').textContent= "Guess the number between 1-3, " + nameFix;}
//medium mode
else if(document.getElementById("m").checked){
    //generate the number
    range = 10;
    randNum = Math.floor(Math.random()*range) + 1; 
    // change text to med guess
    document.getElementById('msg').textContent= "Guess the number between 1-10, " + nameFix;}
//hard mode
else if(document.getElementById("h").checked){
    //generate the number
    range = 100;
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
    btn.disabled = false;
   // Update number of guesses
    playGuess=playGuess+1;
    // Average score Update
   scoreUpdate();
   // update average and fastest time
   timerCalc();
   // update the leaderboard
   leaderboardUpdate();
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
    avgScore.innerText = "Average Score: " + finalAvgScore.toFixed(1);
    totalWins.innerText = "Total wins: " + wins;
    
// update leadearboard
    scores.push(playGuess);
    scores.sort(function(a,b){return a-b;});

    let leaderboard = document.getElementsByName('leaderboard');
    for(let i=0; i < leaderboard.length; i++){
        if(i< scores.length){
            leaderboard[i].textContent = scores[i];}
            else{
                leaderboard[i].textContent = "--";
            }
        }
        playGuess = 0;
    }



// function to keep the time
function timerRecord(){
    start = new Date().getTime();
    elapsedTime = 0;
}

// calculations for avarage and fast times
function timerCalc(){
    let timeNow = new Date().getTime();
    let elasped = (timeNow - start)/(elapsedTime + 1000);
    storeTime.push(elasped);

    // average update
    let sum = 0;
    for (let i = 0; i < storeTime.length; i++){
        sum += storeTime[i];
    }
    let average = sum/storeTime.length;
    document.getElementById('avgTime').textContent = "Average Time: " + average + " seconds";

    // fastest game
    let min = storeTime[0];
    for (let i = 1; i < storeTime.length; i++){ // find min time
        if(storeTime[i] < min ){
            min = storeTime[i];
        }

    }
    document.getElementById('fastest').textContent = "Fastest Game: " + min + " seconds";

}

//function to giveup

function giveUp(){
// disable guess btn and give up btn
    guessBtn.disabled = true;
     giveUpBtn.disabled = true;
     btn.disabled = false;
 
document.getElementById('msg').textContent= "You gave up! Number was " + randNum;
 
//update score to range   
    //easy mode
if(document.getElementById("e").checked){
    //generate the number
    range = 3;
    playGuess = range;
}
  
//medium mode
else if(document.getElementById("m").checked){
    //generate the number
    range = 10; 
    playGuess = range;
    }

//hard mode
 else if(document.getElementById("h").checked){
    //generate the number
    range = 100;
    playGuess = range;

}
timerCalc();
scoreUpdate();

}
