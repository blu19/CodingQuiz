//var questions = require('questions');
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["1) strings", "2) booleans", "3) alerts", "4)numbers"],
        answer: "3) alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["1) quotes", "2) curly brackets", "3) parentheses", "4) square brackets"],
        answer: "3) parentheses"
    },
];



function main() {

    var startClick = document.querySelector(".startBtn");

    startClick.addEventListener("click", function () {
        quizTimer();
        quiz();
    });


    var currentQuestion = document.querySelector("#displayQuestion");
    var choiceA = document.querySelector("#choice0");
    var choiceB = document.querySelector("#choice1");
    var choiceC = document.querySelector("#choice2");
    var choiceD = document.querySelector("#choice3");

    function quiz() {
        
        //for (let i = 0; i < 4; i++) {

        //}
        //if (questionNumber === 4) {
            
        //}

        //var questionNumber = 0;
        //currentQuestion.textContent = (the current question here)      
        
        currentQuestion.textContent = questions[0].title
        choiceA.textContent = questions [0].choices[0]
        choiceB.textContent = questions [0].choices[1]
        choiceC.textContent = questions [0].choices[2]
        choiceD.textContent = questions [0].choices[3]

        if () {
            
        }

        //answerOptions.textContent = (current answer options here)
        //process through the questions
        //process through answer options
        //process through the correct answer
        //display first question and answer options on click
        //function displayQuestion(questionNumber) { 
        //currentQuestion.innerHTML = "Question: " + array[questionNumber];

            
            
        //}
        //displayQuestion();
    }
    

//console.log("working");


    function quizTimer() {
        count = 60;
        var interval = setInterval(function () {
            document.querySelector("#count").innerHTML = "Remaining Time: " + count + "s";
            count--;
            if (count === -2) {
                clearInterval(interval);
                document.querySelector("#count").innerHTML = "End of Quiz";
            };
        }, 1000);
    };
}
main();

console.log("work");