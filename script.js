//Global constants
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var highestScore = 0;
var clueHoldTime = 0; //how long to hold each clue's light and sound (in milliseconds)
var cluePauseTime = 0; //how long to pause in between clues

//When the game first boots up, set the highest score to 0
document.getElementById("insert").innerHTML = "Highest Score: " + highestScore;

//Set the buttons to default values, the same as the tutorial
  document.getElementById("button1").style.background = document.getElementById(
    "box1"
  ).value;
  document.getElementById("button2").style.background = document.getElementById(
    "box2"
  ).value;
  document.getElementById("button3").style.background = document.getElementById(
    "box3"
  ).value;
  document.getElementById("button4").style.background = document.getElementById(
    "box4"
  ).value;
  document.getElementById("button5").style.background = document.getElementById(
    "box5"
  ).value;

//startGame() resets all the values in the beginning, except the highest possible score
function startGame() {
  //Set the buttons to default values, the same as the tutorial
  document.getElementById("button1").style.background = document.getElementById(
    "box1"
  ).value;
  document.getElementById("button2").style.background = document.getElementById(
    "box2"
  ).value;
  document.getElementById("button3").style.background = document.getElementById(
    "box3"
  ).value;
  document.getElementById("button4").style.background = document.getElementById(
    "box4"
  ).value;
  document.getElementById("button5").style.background = document.getElementById(
    "box5"
  ).value;

  //Reset the wait time for each guess
  clueHoldTime = 1000;
  cluePauseTime = 333;

  //Clear the pattern every time a new game is started and make a new one (max length 100)
  pattern = [];
  for (let i = 0; i <= 100; i++) {
    pattern.push(Math.floor(Math.random() * 5) + 1);
  }

  //Reset the basic start/stop and game progress
  progress = 0;
  gamePlaying = true;
  document.getElementById("startButton").classList.add("hidden");
  document.getElementById("stopButton").classList.remove("hidden");
  playClueSequence();
}

//Stop game, turn off playing and show the start button
function stopGame() {
  gamePlaying = false;
  document.getElementById("startButton").classList.remove("hidden");
  document.getElementById("stopButton").classList.add("hidden");
}

// Sound Synthesis Functions
//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

const freqMap = {
  1: 250,
  2: 330,
  3: 390,
  4: 460,
  5: 520
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTouch();
  }, len);
}

//Altered from original: it now also turns the color to the touch version
function startTouch(btn) {
  lightButton(btn);
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}

//Altered from original: it now also turns the color back to the color picker value
function stopTouch(btn) {
  clearButton(btn);
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Set the touch color on
function lightButton(btn) {
  document.getElementById("button" + btn).style.background = "#000000";
}

//Reset the color back to the color picker
function clearButton(btn) {
  document.getElementById(
    "button" + btn
  ).style.background = document.getElementById("box" + btn).value;
}

//Play the clue: light up the button, play the song, and then shut it down.
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

//Play all the guesses so far
function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime;
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

//The answer given is incorrect, so reset the game
function loseGame(score) {
  stopGame();
  alert("Game Over. You lost. You got to " + score + " points");
}

//The person managed to remember all 100 choices!  Wow!
function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

//Allow the player to guess, light up their guess
function guess(btn, score) {
  //Don't do anything if the game is not actively being played
  if (!gamePlaying) {
    return;
  }

  //Is the guess correct?
  if (btn == pattern[guessCounter]) {
    //Correct guess
    if (guessCounter + 1 > highestScore) {
      highestScore = guessCounter + 1;
      document.getElementById("insert").innerHTML =
        "Highest Score: " + highestScore;
    }
    //Is turn over?
    if (guessCounter == progress) {
      //The turn is over
      //Is the game over?
      if (guessCounter == pattern.length - 1) {
        //You have reached the max, so add a number to the pattern
        winGame();
      }

      //Keep going
      progress += 1;
      playClueSequence();
    } else {
      //Turn is not over, but you are right so far
      guessCounter += 1;
    }
  } else {
    //Incorrect guess: the game is lost
    loseGame(guessCounter + 1);
  }

  //Decrease the amount of time the player has to see the clues
  clueHoldTime -= 100;
  cluePauseTime -= 10;
}
