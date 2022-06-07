// start screen
const backgroundEl = document.querySelector(".background")
const headerEl = document.querySelector(".header")
const startBtn = document.getElementById("start");
const highScoresBtn = document.getElementById("highscores");
// QNA section
const timerEl = document.querySelector('.timer')
const questionAnswerSectionEl = document.querySelector(".qna");
const questionTitleEl = document.querySelector('.question-title')
const answersEl = document.querySelector(".answers")
// highscores section
const highscoresEl = document.querySelector(".highscores")
const endScreenEl = document.querySelector(".endscreen")
const finalResults = document.querySelector(".result")
const restartBtn = document.getElementById("restart")
const recordInputBtn = document.getElementById("record")
const userInput = document.getElementById("userInputInitials")
const clearHighscores = document.getElementById("clear")
const endButtons = document.querySelector(".endbuttons")
const highscoreContainerEl = document.querySelector(".highscore-container")


let shuffledQuestions = ""
// shuffle questions from array 
function shuffle (){
   shuffledQuestions = questions.sort(() => 0.5 - Math.random());
}

let questionIndex = 0;
function loadQuestion(){
    questionTitleEl.textContent = shuffledQuestions[questionIndex].question
    // shuffle answer buttons
    const shuffledAnswers = shuffledQuestions[questionIndex].answers.sort(() => 0.5 - Math.random());
    answersEl.textContent = "";
    
    // append answers
    for (let index = 0; index < shuffledAnswers.length; index++) {
        const selection = shuffledAnswers[index];
        
        const li = document.createElement('li')
        const button = document.createElement('button')
        button.setAttribute('class', 'answer')
        button.textContent = selection.title
        
        button.addEventListener("click", function(){
            // correct answer clicked
            if(selection.isAnswer){
                // state correct 
                // change backgroundEl color to green for x second(s)
                backgroundEl.setAttribute("class","correct") 
                setTimeout(() => {
                    backgroundEl.removeAttribute("class", "correct")
                }, 1100);
            } else {
                // incorrect button clicked
                // check if time is left after penalty
                if (timeLeft <= 10){
                    timeLeft = 0;
                    endQuiz();
                } else {
                    // minus x seconds from timer
                    timeLeft = timeLeft - 10;
                }
                // upodate timer
                timerEl.textContent = timeLeft;
                
                // state incorrect
                // change backgroundEl color to red for x second(s)
                backgroundEl.setAttribute("class", "incorrect")
                setTimeout(() => {
                    backgroundEl.removeAttribute("class", "incorrect")
                }, 1100);
            }
            
            questionIndex = questionIndex + 1;

            if(shuffledQuestions.length >= questionIndex + 1){
                // move onto next question
                loadQuestion();
            } else {
                // if no more questions available end quiz
                endQuiz();
            }
        })
        
        li.appendChild(button);
        answersEl.append(li)
    }
}

// hide element
function hide(element){
    element.classList.add("hide")
}

// show element
function show(element){
    element.classList.remove("hide")
}

function endQuiz(){
    // when all z questions have been answered or time runs out
    // stop timer
    clearInterval(countdown)
    // display result of quiz
    finalResults.textContent = timeLeft;
    // hide qna section
    hide(questionAnswerSectionEl);
    // show highscores section
    show(endScreenEl)
}

let countdown;
let timeLeft = 120;
// timer starts at x minute(s)
const startTimer = function(){
    timerEl.textContent = timeLeft;
    countdown = setInterval(() => {
        timeLeft = timeLeft - 1;
        timerEl.textContent = timeLeft;
        if(timeLeft < 1){
            clearInterval(countdown);
            endQuiz();
        }
    }, 1000);
}

let localHighscores = [];
function loadHighscores(){
    highscoresEl.textContent = "";
    let storedHighscores = JSON.parse(localStorage.getItem("highscores"));
    
    if (storedHighscores !== null){
        localHighscores = storedHighscores
    }

    const h1 = document.createElement("h1");
    h1.textContent = "Highscores"
    h1.setAttribute("class", "heading")
    highscoresEl.appendChild(h1);
    
    localHighscores.sort((a, b) => b.timeLeft - a.timeLeft)
    
    for (let i = 0; i < localHighscores.length; i++) {
        const localHighs = localHighscores[i];
        
        const li = document.createElement("li");
        li.textContent = localHighs.input + "'s score: " + localHighs.timeLeft;
        li.setAttribute("class", "scores")
        highscoresEl.appendChild(li);
    }
}

// store in local storage / initials and score
function storeHighscore (){
    localStorage.setItem("highscores", JSON.stringify(localHighscores))
}

// click start button
startBtn.addEventListener("click", function(){
    // show elements
    show(questionAnswerSectionEl);
    // hide elements
    hide(headerEl);
    hide(highscoreContainerEl);
    // start quiz    
    shuffle();
    loadQuestion();
    // timer starts at x minute(s)
    startTimer();
});

highScoresBtn.addEventListener("click", function(){
    show(highscoreContainerEl);
    loadHighscores();
});

// when restart clicked
// return to start screen
restartBtn.addEventListener("click", function(){
    // hide elements
    hide(highscoreContainerEl);
    hide(endButtons);
    // show elements
    show(headerEl);
    // reset questions
    questionIndex = 0;
    // reset timer
    timeLeft = 120;
});

clearHighscores.addEventListener("click", function(){
    localStorage.clear("highscores");
    localHighscores = [];
    loadHighscores();
});

// when submit is pressed
recordInputBtn.addEventListener("click", function(event){
    // prevent page refresh
    event.preventDefault();
    // record user input
    let input = userInput.value.trim();
    // ensure userinput is valid
    if (input === ""){
        return
    } 
    // create object to push to array
    let recordScore = {input, timeLeft}
    localHighscores.push(recordScore);
    // clear user input initals
    userInput.value = "";
    // store in local storage / initials and score
    storeHighscore();
    // update highscores list
    loadHighscores();
    // hide elements
    hide(endScreenEl);
    // show elements
    show(highscoreContainerEl);
    show(endButtons);
})