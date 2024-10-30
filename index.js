
alert("This site is still under developement.Do you want to continue?");

/*
const changeColor = document.getElementById("changeColor");
  const bodyBtn = document.getElementById("bodyBtn");
  const decrease = document.getElementById("decrease");
  const reset = document.getElementById("reset");
  const increase = document.getElementById("increase");
  const countNum = document.getElementById("countNum");
  let count = 0;
  
  
  increase.onclick = function(){
    count++;
    countNum.textContent = count;
  }
  reset.onclick = function(){
    count = 0;
    countNum.textContent = count;
  }
    decrease.onclick = function(){
    count--;
    countNum.textContent = count;
  }
  */
 /* const myBtn = document.getElementById("myBtn");
  const label1 = document.getElementById("label1");
  const label2 = document.getElementById("label2");
  const label3 = document.getElementById("label3");
  const min = 1;
  const max = 6;
  let randomNum1;
  let randomNum2;
  let randomNum3;

  myBtn.onclick = function(){
      randomNum1 = Math.floor(Math.random() * max) + min;
      randomNum2 = Math.floor(Math.random() * max) + min;
      randomNum3 = Math.floor(Math.random() * max) + min;
      label1.textContent = randomNum1;
      label2.textContent = randomNum2;
      label3.textContent = randomNum3;  
  }
  */
/*let button = document.getElementById('myBtn');

button.addEventListener('click', function(){
    document.body.classList.toggle('black');
})*/

  
 /*let username = window.prompt("Enter your username: ");

  username = username.trim();
  let firstLetter = username.charAt(0);
  firstLetter = firstLetter.toUpperCase();

  let extraFirst = username.slice(1);
  extraFirst = extraFirst.toLowerCase();

  username = firstLetter + extraFirst;

  console.log(username);
*/

  /*     SWITCH

   const myText = document.getElementById("myText");
   const myBotn = document.getElementById("myBotn");
   const myP = document.getElementById("myP");
   let max = 100;
   let min = 0;


   myBotn.onclick = function(){
       switch(true){
               case myText.value >= 90 && myText.value <= 100:
                  myP.textContent = "A";
                  break;
               case myText.value >= 80 && myText.value < 90:
                  myP.textContent = "B";
                  break;
               case myText.value >= 70 && myText.value < 80:
                  myP.textContent = "C";
                  break;
               case myText.value >= 60 && myText.value < 70:
                  myP.textContent = "D";
                  break;
               case myText.value >= 50 && myText.value < 60:
                  myP.textContent = "E";
                  break;
               case myText.value >= 0 && myText.value < 50:
                  myP.textContent = "F";
                  break;
               default :
                  myP.textContent = `Please enter your points in then range ${min} - ${max}`;
       }
   }
  */

  /*   TEMPERATURE CONVERTION PROGRAM  

  const myConvert = document.getElementById("myConvert");
  const toFahrenheit = document.getElementById("toFahrenheit");
  const toCelsius = document.getElementById("toCelsius");
  const mySubmit = document.getElementById("mySubmit");
  let temp;

  function convert(){

      if(toFahrenheit.checked){
          temp = Number(myConvert.value);
          temp = temp * (9/5) + 32;
          mySubmit.textContent = temp.toFixed(1) + "°F";
      }
      else if(toCelsius.checked){
          temp = Number(myConvert.value);
          temp = (temp - 32) * (5/9) ;
          mySubmit.textContent = temp.toFixed(1) + "°C";
      }
      else{
          mySubmit.textContent = "Please select a unit";
      }
  }
  */

  /*   RANDOM NUMBER GENERATOR

  const myP1 = document.getElementById("myP1");
  const myP2 = document.getElementById("myP2");
  const myP3 = document.getElementById("myP3");
  const max = 6;
  const min = 1;
  let randomNum1;
  let randomNum2;
  let randomNum3;


  function roll(){
      randomNum1 = Number(myP1.textContent);
      randomNum1 = Math.floor(Math.random() * max) + min;
      randomNum2 = Number(myP1.textContent);
      randomNum2 = Math.floor(Math.random() * max) + min;
      randomNum3 = Number(myP1.textContent);
      randomNum3 = Math.floor(Math.random() * max) + min;
      myP1.textContent = randomNum1;
      myP2.textContent = randomNum2;
      myP3.textContent = randomNum3;
  }
  */

  /*    RANDOM NUMBER GUESSING GAME
  
  const max = 100;
  const min = 1;
  const answer = Math.floor(Math.random() * (max - min + 1)) + min;

  let attempts = 0;
  let guess;
  let running = true;

  while(running){
      guess = window.prompt(`Guess a number between ${min} - ${max}`);
      guess = Number(guess);
      if(isNaN(guess)){
          window.alert("Please enter a valid number!");
      }
      else if(guess < min || guess > max){
          window.alert("Please enter a valid number!");
      }
      else{
          attempts++;
          if(guess < answer){
              window.alert("Too LOW! Try again!");
          }
          else if(guess > answer){
              window.alert("Too HIGH! Try again!");
          }
          else{
              window.alert(`Congratulation! The answer was ${answer} and it took you ${attempts} attempts`);
              running = false;
          }
      }
  }
  */

/*      
      //    RANDOM NUMBER GUESSING GAME WITH HTML CSS & JS

  const myInput = document.getElementById("myInput");
  const myP = document.getElementById("myP");
  const attempt = document.getElementById("attempt");
  let max = 100;
  let min = 1;
  let answer = Math.floor(Math.random() * (max - min)) + min;

  let attempts = 0;
  let guess;
  let running = true;

  function guessing(){
          
      while(running){
          guess = myInput.value;
          guess = Number(myInput.value);
          if(isNaN(guess)){
              myP.textContent = "Invalid! Enter a number!";
              attempt.textContent = `Attempts: ${attempts}`;
              return myP.textContent;
              return attempt.textContent;
          }
          else if(guess < min || guess > max){
              myP.textContent = "Please enter a valid number!";
               attempt.textContent = `Attempts: ${attempts}`;
              return myP.textContent;
              return attempt.textContent;
          }
          else{
              if(guess < answer){
                  attempts++;
                  myP.textContent = "Too LOW! Try again!";
                   attempt.textContent = `Attempts: ${attempts}`;
                  return myP.textContent;
                  return attempt.textContent;
              }
              else if(guess > answer){
                  attempts++;
                  myP.textContent = "Too HIGH! Try again!";
                   attempt.textContent = `Attempts: ${attempts}`;
                  return myP.textContent;
                  return attempt.textContent;
              }
              else{
                  myP.textContent = `Congratulations! The answer was ${answer} and it took you ${attempts} attempts`;
                  running = false;
              }
          }
      }
  }

  const restart = document.getElementById("restart");
  
  restart.onclick = function guessing(){
      myInput.value = "";
      running = true;
      answer = Math.floor(Math.random() * max) + min;
      attempt.textContent = `Attempts: ${attempts = 0}`;
      myP.textContent = "";
      console.log(answer);
  }
 */




  // DICE ROLLER PROGRAM

  

  function rollDice(){

      const numInput = document.getElementById("numInput").value;
      const numResult = document.getElementById("numResult");
      const diceImages = document.getElementById("diceImages");
      const displayValues = [];
      const displayImages = [];
      const max= 3;
      const min = 1;

      for(let i = 0; i < numInput; i++){
          displayValue = Math.floor(Math.random() * 6) + 1;
          displayValues.push(displayValue);
          displayImages.push(`<img src="Images/${displayValue}.png" alt="Dice${displayValue}">`);
      }

     if(numInput < min || numInput > max){
         numResult.textContent = `Please enter a number between ${min}-${max}`;
         diceImages.textContent = '';
     }
     else{ 
         numResult.textContent = `Dice: ${displayValues.join(', ')}`;
         diceImages.innerHTML = displayImages.join('');
     }
  }





 //  RANDOM PASSWORD GENERATOR

/*
  const myP1 = document.getElementById("myP1");

  function generatedPassword(length, includeUppercase, includeLowerCase, includeNumbers, includeSymbols){

      const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
      const numberChars = "1234567890";
      const symbolChars = "&~+-_%#!$£";

      let allowedChars = "";
      let password = "";

      allowedChars += includeUppercase ? upperCaseChars : "";
      allowedChars += includeLowerCase ? lowerCaseChars : "";
      allowedChars += includeNumbers ? numberChars : "";
      allowedChars += includeSymbols ? symbolChars : "";

      if(length < 5){
          return  alert((`Password length should be atleast 5`));
      }

      if(allowedChars.length === 0){
          return  alert("At least 1 set of chars must be selected");
      }

      for(i = 0; i < length; i++){
          const randomIndex = Math.floor(Math.random() * allowedChars.length);
          password += allowedChars[randomIndex];
      }

      return password;
  }

  const passwordLength = 10;
  const includeUppercase = true;
  const includeLowerCase = true;
  const includeNumbers= true;
  const includeSymbols = true;

  const password = generatedPassword(passwordLength,
                                    includeUppercase,
                                    includeLowerCase,
                                    includeNumbers,
                                    includeSymbols);

  console.log(`Generated Password: ${password}`);
*/



 


  // RANDOM PASSWORD GENERATOR USING ALL START
/*
  const myInputPass = document.getElementById("myInputPass").value;
  const myParagraph = document.getElementById("myParagraph");
  const Upper = document.getElementById("Upper");
  const LowerCase = document.getElementById("LowerCase");
  const numberChar = document.getElementById("number");
  const symbol = document.getElementById("symbol");

  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
      const numberChars = "1234567890";
      const symbolChars = "&-~_\/*#";

  function generatedPassword(myInputPass, 
                             Upper, 
                             LowerCase, 
                             numberChar, 
                             symbol){
      switch(false){
              case !myInputPass < 5 && !Upper:
              return myParagraph.textContent = "Hello!";
              break;
      }
  }
*/
  // RANDOM PASSWORD GENERATOR USING ALL END





  // DIGITAL CLOCK PROGRAM



  function updateTime(){

      const now = new Date();
      let hours = now.getHours();
      const meridian = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      hours = hours.toString().padStart(2, 0)
      const minutes = now.getMinutes().toString().padStart(2, 0);
      const seconds = now.getSeconds().toString().padStart(2, 0);
      const displayTimer = `${hours}:${minutes}:${seconds} ${meridian}`;
      document.getElementById("clock").textContent = displayTimer;
  }
      
  updateTime();
  setInterval(updateTime, 1000);


  // DATE  PROGRAM


  function dateTime(){
       
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth().toString().padStart(2, 0);
      const day = today.getDate().toString().padStart(2, 0);
      const dateOutput = `${day}/${month}/${year}`;
      document.getElementById("dateDisplay").textContent = dateOutput;
  }
      
  dateTime();




    // STOPWATCH PROGRAM


  const stopwatch_display = document.getElementById("stopwatch_display");
  let timer = null;
  let startTime = 0;
  let elapsedTime = 0;
  let isRunning = false;

  function startRunning(){
      
      if(!isRunning){
      startTime = Date.now() - elapsedTime;
      timer = setInterval(updateChrono, 10);
      isRunning = true;
      }    
  }

  function stopRunning(){

      if(isRunning){
          elapsedTime = Date.now() - startTime;
          startTime = clearInterval(timer);
          isRunning = false;
      }
  }

  function resetRunning(){
      clearInterval(timer);
      startTime = 0;
      elapsedTime = 0;
      isRunning = false;
      stopwatch_display.textContent = "00:00:00:00.0";
  }

  function updateChrono(){

      const currentTime = Date.now();
      elapsedTime = currentTime - startTime;

      let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
      let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
      let seconds = Math.floor(elapsedTime / (1000) % 60);
      let milliseconds = Math.floor(elapsedTime % 1000/10);
      let milliPoint = Math.floor(elapsedTime / (1) % 10);

      hours = String(hours).padStart(2, "0");
      minutes = String(minutes).padStart(2, "0");
      seconds = String(seconds).padStart(2, "0");
      milliseconds = String(milliseconds).padStart(2, "0");
      milliPoint = String(milliPoint).padStart(1, "0");
      
      stopwatch_display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}.${milliPoint}`;
  }


      
  
const display = document.getElementById("display");
 
function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }
}




/* MOVING BOX START */

const myBoxMove = document.getElementById("myBoxMove");

document.addEventListener("keydown", even => {
    myBoxMove.textContent = "😳";
    myBoxMove.style.backgroundColor = "hsl(0, 90%, 60%)";
});

document.addEventListener("keyup", even => {
    myBoxMove.textContent = "😃";
    myBoxMove.style.backgroundColor = "hsl(208, 90%, 60%)";
});

let moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", even => {

    
    if(event.key.startsWith("Arrow")){

        event.preventDefault();
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;    
        }
        myBoxMove.style.top = `${y}px`;
        myBoxMove.style.left = `${x}px`;
    }
    
});

/* MOVING BOX END */





/* IMAGE SLIDER START */

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

initializeSlider();
// document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }
    
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

/* IMAGE SLIDER END */


// ROCK-PAPER-SCISSORS START

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let computerScore = 0;
let playerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "It's a tie!"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "You Win!" : "You Lose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Win!" : "You Lose!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You Win!" : "You Lose!";
                break;    
        }
    }

        playerDisplay.textContent = `Player: ${playerChoice}`;
        computerDisplay.textContent = `Computer: ${computerChoice}`;
        resultDisplay.textContent = `${result}`;

        resultDisplay.classList.remove("greenText", "redText", "blueText");
    
    switch(result){
        case "You Win!":
            resultDisplay.classList.add("greenText");
            playerScoreDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You Lose!":
            resultDisplay.classList.add("redText");
            computerScoreDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "It's a tie!":
            resultDisplay.classList.add("blueText");
    }
    
}

// ROCK-PAPER-SCISSORS END


















