// Questions

let quizList = [
  {
      qTitle: "Commonly use data types DO NOT Include:",
      qChoices: ["Strings", "Booleans", "Alerts", "Numbers"],
      qAnswer: "Alerts"
  },
  {
      qTitle: "The condition in an if/else statement is enclosed within:",
      qChoices: ["Quotes", "Curly brackets", "Parentheses", "Square brackets"],
      qAnswer: "Parentheses"
  },
  {
      qTitle: "Arrays in Javascript can be used to store:",
      qChoices: ["Numbers and Strings", "Other arrays", "Booleans", "All of the above"],
      qAnswer: "All of the above"
  },
  {
      qTitle: "String values must be enclosed within:",
      qChoices: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
      qAnswer: "Curly brackets"
  },
  {
      qTitle: "A very useful tool used during development and debugging for printing content to the debugger is:",
      qChoices: ["Javascript", "Terminal / Bash", "For loops", "Console log"],
      qAnswer: "For loops"
  },
];

// Create Variables
let quizListSize = quizList.length;

let gameScore;
let countdownTimer;
let questionNumber;

let gameStart;

let timer;

let quizQuestion;

let feedback;

let quizAnswer1;
// let quizAnswer1Listener;

let quizAnswer2;
// let quizAnswer2Listener;

let quizAnswer3;
// let quizAnswer3Listener;

let quizAnswer4;
// let quizAnswer4Listener;

let userName;

// let highscoresScore = new Array();

// let highscoresUser = new Array();

let highscores = new Map();

let highscoreList;

// Start Game Function

function startGame() {
  // Starting Timer and Score  
  gameScore = 0;
  countdownTimer = 75;
  questionNumber = 0;
  gameStart = false;
  // Setting variables to get elements by id
  quizQuestion = document.getElementById("question");
  quizAnswer1 = document.getElementById("answer1");
  quizAnswer2 = document.getElementById("answer2");
  quizAnswer3 = document.getElementById("answer3");
  quizAnswer4 = document.getElementById("answer4");
  feedback = document.getElementById("feedback");
  //Settings variables to first question
  quizQuestion.innerHTML = quizList[questionNumber].qTitle;
  quizAnswer1.innerHTML = quizList[questionNumber].qChoices[0];
  quizAnswer2.innerHTML = quizList[questionNumber].qChoices[1];
  quizAnswer3.innerHTML = quizList[questionNumber].qChoices[2];
  quizAnswer4.innerHTML = quizList[questionNumber].qChoices[3];
  //Start Game
  console.log('Game has Started');
  let startPage = document.getElementById("startPage");
  startPage.style.display = "none";
  let questionPage = document.getElementById("questionPage");
  questionPage.style.display = "inline";
  let resultsPage = document.getElementById("resultsPage");
  resultsPage.style.display = "none";
  let highscoresPage = document.getElementById("highscoresPage");
  highscoresPage.style.display = "none";
//   quizAnswer1Listener = quizAnswer1.addEventListener("click", answerPressed(1, questionNumber));
//   quizAnswer2Listener = quizAnswer2.addEventListener("click", answerPressed(2, questionNumber));
//   quizAnswer3Listener = quizAnswer3.addEventListener("click", answerPressed(3, questionNumber));
//   quizAnswer4Listener = quizAnswer4.addEventListener("click", answerPressed(4, questionNumber));
  
  gameStart = true;

  timer = setInterval(function(){
    document.getElementById("navTimer").innerHTML = "Time: " + countdownTimer;
    if (countdownTimer == 0) {
        // clearInterval(timer);
        endGame();
    }
    countdownTimer--;
  }, 1000);
}

// Answer Pressed Function
function answerPressed(answer) {
  if(gameStart){
    if (answer == 1) {
      if (quizList[questionNumber].qAnswer == quizAnswer1.innerHTML) {
        feedback.innerHTML = `<i>Correct!</i>`;
        gameScore = gameScore + 10;
        nextQuestion();
        //Add to score, Call function to change question - argument parameters  -> questionNumber (array[numberon+1])
      }
      else {
        feedback.innerHTML = `<i>Wrong!</i>`;
        countdownTimer = countdownTimer - 10;
        nextQuestion();
        //Write functionality that happens when answer is wrong, call function to change question
      }
    }

    if (answer == 2) {
      if (quizList[questionNumber].qAnswer == quizAnswer2.innerHTML) {
        feedback.innerHTML = `<i>Correct!</i>`;
        gameScore = gameScore + 10;
        nextQuestion();      
        //
      }     
      else {
        feedback.innerHTML = `<i>Wrong!</i>`
        countdownTimer = countdownTimer - 10;
        nextQuestion();
        //
      }
    }

    if (answer == 3) {
      if (quizList[questionNumber].qAnswer == quizAnswer3.innerHTML) {
        feedback.innerHTML = `<i>Correct!</i>`
        gameScore = gameScore + 10;
        nextQuestion();      
        //
      }
      else {
        feedback.innerHTML = `<i>Wrong!</i>`;
        countdownTimer = countdownTimer - 10;
        nextQuestion();
        //
      }
    }
    if (answer == 4) {
      if (quizList[questionNumber].qAnswer == quizAnswer4.innerHTML) {
        feedback.innerHTML = `<i>Correct!</i>`;
        gameScore = gameScore + 10;
        nextQuestion();
      }
      else {
        feedback.innerHTML `<i>Wrong!</i>`;
        countdownTimer = countdownTimer - 10;
        nextQuestion();
      }
    }
  }
}

// Timer Function

//function timerStart() {
    
//}

// End Game Function

function endGame() {

    clearInterval(timer);
    document.getElementById("navTimer").innerHTML = "Time: 0";

    let startPage = document.getElementById("startPage");
    startPage.style.display = "none";
    let questionPage = document.getElementById("questionPage");
    questionPage.style.display = "none";
    let resultsPage = document.getElementById("resultsPage");
    resultsPage.style.display = "inline";
    let highscoresPage = document.getElementById("highscoresPage");
    highscoresPage.style.display = "none";
 // clearInterval(timer)
 // hide question
 // show resultsPage
}

//NextQuestion - 

function nextQuestion() {
    questionNumber++;

    if (questionNumber >= quizList.length) {
        endGame()
    }

    else {
        quizQuestion.innerHTML = quizList[questionNumber].qTitle;
        quizAnswer1.innerHTML = quizList[questionNumber].qChoices[0];
        quizAnswer2.innerHTML = quizList[questionNumber].qChoices[1];
        quizAnswer3.innerHTML = quizList[questionNumber].qChoices[2];
        quizAnswer4.innerHTML = quizList[questionNumber].qChoices[3];
        setTimeout(function(){ feedback.innerHTML = ""; },1000);         
    }

    // question = question + 1
    // if question were on is greater than the size of the quiz end game
}

function submitHighscore() {
  
  userName = document.getElementById("userName");
  highscoreList = document.getElementById("score-list");
  // highscoreList.innerHTML = ""
  // let startPage = document.getElementById("startPage");
  // startPage.style.display = "none";
  // let questionPage = document.getElementById("questionPage");
  // questionPage.style.display = "none";
  let resultsPage = document.getElementById("resultsPage");
  resultsPage.style.display = "none";

  highscores.set(userName.value, gameScore)

  // if (highscores.length > 1) {
  //   highscores[Symbol.iterator] = function* () {
  //     yield* [...this.entries()].sort((x, y) => x[1] - y[1]);
  //   }
  // }

  for (let [key, value] of highscores) {
    // let highscoreItem = document.createElement('li')
    // highscoreItem.innerHTML = key + " - " + value
    // highscoreList.appendChild(highscoreItem)
    $('#score-list').append(`<li>` + key + " - " + value + `</li>`)

  }

  let highscoresPage = document.getElementById("highscoresPage");
  highscoresPage.style.display = "inline";

    // create table in UI
    // array - name and score
    // javascript create table element
        // get element by id, dom element - add context
        // for loop - goes over different amounts of highscores
        // for each person, create new table row element, add to html

}

function clearHighscores() {
  highscores = new Map();
  // highscores.clear()
}

function viewHighscores() {
  let startPage = document.getElementById("startPage");
  startPage.style.display = "none";
  let questionPage = document.getElementById("questionPage");
  questionPage.style.display = "none";
  let resultsPage = document.getElementById("resultsPage");
  resultsPage.style.display = "none";
  let highscoresPage = document.getElementById("highscoresPage");
  highscoresPage.style.display = "inline";

}

function restartGame() {
  let startPage = document.getElementById("startPage");
  startPage.style.display = "inline";
  let questionPage = document.getElementById("questionPage");
  questionPage.style.display = "none";
  let resultsPage = document.getElementById("resultsPage");
  resultsPage.style.display = "none";
  let highscoresPage = document.getElementById("highscoresPage");
  highscoresPage.style.display = "none";
}

// If correct, Create function to add to Score, end function to continue to next question
// If wrong, Create function to take time off timer, end function to continue to next question

// If timer finishes OR if all questions answered - end game

//  Highscore section
  // Show score
  // User name input
  // Call array highscore (user initials, highscore)
  // Add score to table (sort by highest score)



