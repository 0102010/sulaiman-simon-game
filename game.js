// Part A step 3|| then we create a new var which hold an array 
var buttonColor = ["red", "blue", "green", "yellow"];

// Part A step 5|| then we create an array and stor eit in a var
var gamePattern = [];

// Part C step 3|| we create a var called "userClickedPattern" which stores an empty array
var userClickedPattern = [];

// Part F step 1|| then we create a var called "started" to keep track, if weather or not the game has started
var started = false;

// Part F step 2|| we craete a var named "level" and set it to the number 0
var level = 0;

// Part C step 1|| we use jQuery to detect when any of the buttons are pressed and then we trigger a handler function
$(".btn").click(function(){
  // Part C step 2|| Inside the handler, we create a new variable called "userChosenColour" to store the id of the button that got clicked
  var userChosenColor = $(this).attr("id");
  //Part C step 4|| we push the var "userChosenColor" to the end of the var "userClickedPattern"
  userClickedPattern.push(userChosenColor);
  // Part C step 5|| we log the var "userClickedPattern" in order to see if we can build an array of colors in the console 
  // just by clicking on the four buttons avaialbe on the screen
  console.log(userClickedPattern);
  // Part D step 2|| then we call the function "playSound" and instead of it's parameter we give it the var "userChosenColor" as the parameter 
  // and this will tell the function's logic to replace the parameter "name" with the var "userChosenColor" 
  // whenever it wants to execute the code written inside of it
  playSound(userChosenColor);
  animatePress(userChosenColor);
  // Part G step 2|| we then call the "checkAnswer" function inside the "click" eventListener and we pass the "index of the user's last answer"
  // as a parameter into the "checkAnswer" function, also I don't know weather or not this line of code is correct ebcause in Angela's 
  // version this line was wriiten like "checkAnswer(userClickedPattern.length - 1);" 
  checkAnswer(userClickedPattern.lastIndexOf(userChosenColor));
})

// Part F step 1|| Using jQuery we will detect weather or not a key has been pressed and if a key was pressed then just for the first time
// that a key is pressed we run the function "nextSequence"
$(document).keydown(function(){
  // Part F step 1|| then we write an IF statement saying that if the var "started" was equal to false or (!) then run the 
  // "nextSequence" function, start the game and keep it that way until the user losses
  if (!started) {
    // Part F step 2|| then inside the IF statement before the "nextSequence" function is called, we change the "h1" tag's text from 
    // "Press A Key to Start" to say "Level 0" 
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }

})

// Part A step 1|| first we create a function called "nextSequence"
function nextSequence() {
  // Part A step 2\\ then we generate a random number between 0-3 and storre it in the "randomNumber" var
    randomNumber = Math.floor(Math.random() * 4);
    // Part A step 4|| we then create a var and use the "buttonColor" & "randomNumber" to select random color
    var randomChosenColor = buttonColor[randomNumber];
    // Part A step 6|| then we push the "randomChosenColor" to the end of the "gamePattern" array
    gamePattern.push(randomChosenColor);
    // Part B step 1 & 2|| we use jQuery to select the button with the same id as the "randomChosenColour", then we give it a sort of 
    // flash animation
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    // Part D step 5|| now we call the "playSound" function in the "nextSequence" function and we pass in the var "randomChosenColor" as
    // the parameter for the "playSound" function because again we want the corresponding sound to be played when the "nextSequence" function
    // runs so we pass in the "randomChosenColor" var as a parameter to the "playSound" function
    playSound(randomChosenColor);

    // Part B step 3|| then we use JS to play the sound for the button color selected in step 1 of the Part B|| (THIS IS FOR PART D STEP 3) 
    // and in Part D step 3 we move this function inside the "playSound" function and then we refactor the code so that somehow it can work 
    // whenever we call it inside the "click" "eventListener" and whenever we call it inside the "nextSequence" function
    // this is the code which we moved to the "playSound" function and then we refactored it 
    // var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    // audio.play();


    // Part F step 4|| now inside the "nextSequence" function we increase the var "level" by 1 everytime the "nextSequence" function
    // is called
    level++;
    // Part F step 5|| Inside the "nextSequence" function we update the "h1" tag's text from "Press A Key to Start" to say "Level 0"
    // but this time with the new value of the var "level"
    $("#level-title").text("Level " + level);


    console.log(gamePattern);
    console.log(userClickedPattern);

}

// Part D step 1|| we create a new function called "playSound" and we give it a parameter called "name" 
// just to be the placeholder for whatever the thing that we might pass into it
function playSound(name) {
  //Part D step 4|| now we refactor this code and we refactor it by replacing the "randomChosenColor" var with the "name" parameter and we do 
  // this because in Part D step 2 we passed the var "userChosenColor" as a parameter to the "playSound" function and what that does is that it 
  // tells the computer to run the "playSound" function but it's parameter should be the "userChosenColor" var and as we specefied before in the 
  // PART C STEP 2 the var "userChoseColor" stores the id of the button that got clicked by the user so when we  pass the "userChosenColor"
  // var as a parameter to the "playSound" function we sort of modify the code and tell it that "hey bro Mr PART D STEP 4 I want you to 
  // replace the "name" parameter with the "userChosenColor" var so that whenever a user clicks a button then the corresponding sound plays"  
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
//Part E step 1|| we create a new function called "animatPress" and we give it a parameter of "currentColor"
function animatePress(currentColor) {
  // Part E step 2|| then again we use the parameter "currentColor" and jQuery to select the buttons which got clicked and then we add
  // the class "pressed" to them in order to simulate a flash or click animation
  $("#" +  currentColor).addClass("pressed");
  // Part E step 3|| we then use JS to simulate a delay by using the "setTimeout" function and removing the "pressed" class from the
  // button which got clicked by the user
  setTimeout(() => {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
  
}

// Part G step 1|| we create a function called "checkAnswer" and we give it a parameter called "currentLevel"
function checkAnswer(currentLevel) {
  // Part G step 3|| inside the "checkAnswer" function we write an "IF" statement which checks that weather or not the user's most recent
  // answer is the same as the "gamePattern" array or var, so if the answer is the same as the "gamePattern" array or var then we log 
  // success and if the answer is not the same as the "gamePattern" array or var we log wrong
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    // console.log("success");
    // Part G step 4|| now if the user got the answer right in step 3 then we check that the user has finished their sequence with another
    // "IF" statement and we do that by simply setting the ".length" property of both of the arrays strictly equal(===) to each other and what 
    // this basically means is that if the number of the elements inside both arrays are strictly equal(===) and if the elements themselves 
    // are strictly equal(===) 
    if (userClickedPattern.length === gamePattern.length) {
      // Part G step 5|| then keep calling the "nextSequence" function which means that keep increasing the level after 1 second, we do 
      // this by using the "setTimeout" JS function
      setTimeout(() => {
        nextSequence();
      }, 1000);
      // Part G step 6|| finally, we set the "userClickedPattern" array back to an empty array because the next generated 
      // sequence, generated from the "nextSequence" function will be different therefore the user's clicking history in the game should also 
      // be sort of refreshed and ready to hold new information
      userClickedPattern = [];
    }
  } 
  // Part G step 3|| this is the "ELSE" statement for the first "IF" statement which simply logs wrong when the answer is not the same as
  // the "gamePattern" array or var
  else {
    // console.log("wrong");
    // Part H step 1|| once the user has made a mistake then first things first we should play this sound
    var wrong = new Audio("sounds/wrong.mp3");
    wrong.play();
    
    // Part H step 2|| then we should add the class "game-over" to the whole body of our website and then we should remove the class 
    // "game-over" after 200 millieseconds again by using the JS "setTimeout" function which will give us an animation of a red flash 
    // sort of 😅
    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 200);

    // Part H step 3|| finally we change the text of the "h1" to say "Game Over, Press Any Key to Restart" ||QN(Quick note): All of the 
    // code in the H Part executes whenever a user has made a mistake in the game
    $("#level-title").text("Game Over, Press Any Key to Restart");

    // Part I step 2|| then we call the "startOver" function inside our "ELSE" statement which again only executes the code written inside
    // of it once the user has made a mistake in the game
    startOver();
  }
  
  // console.log(currentLevel);
  
}

// Part I step 1\\ we create a function and we call it "startOver"
function startOver() {
  // Part I step 3|| finally, we set the values of the "level", "gamePattern", "userClickedPattern" and the "started" variables back to 
  // their default values
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  started = false;
}