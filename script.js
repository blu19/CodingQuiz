var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["1) strings", "2) booleans", "3) alerts", "4)numbers"],
        answer: "3) alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["1) quotes", "2) parentheses", "3) curly brackets", "4) square brackets"],
        answer: "2) parentheses"
    },
    {
        title: "Computer programming is ",
        choices: ["1) a science", "2) an art", "3) both 1 and 2", "4) neither"],
        answer: "2) an art"
    },
    {
        title: "Which is a value that is written into the code of a program?",
        choices: ["1) literal", "2) variable", "3) assignment statement", "4) operator"],
        answer: "1) literal"
    },
];

var currentQuestion = document.querySelector("#displayQuestion");
var choiceA = document.querySelector("#choice0");
var choiceB = document.querySelector("#choice1");
var choiceC = document.querySelector("#choice2");
var choiceD = document.querySelector("#choice3");
var i = 0;
var startClick = document.querySelector(".startBtn");
var choiceClickA = document.getElementById("#choice0");
var choiceClickB = document.getElementById("#choice1");
var choiceClickC = document.getElementById("#choice2");
var choiceClickD = document.getElementById("#choice3");
var answer = "";

    var count = 60;

    function quizTimer() {
        var interval = setInterval(function () {
            document.querySelector("#count").innerHTML = "Remaining Time: " + count + "s";
            count--;
            if (count <= -2) {
                clearInterval(interval);
                document.querySelector("#count").innerHTML = "End of Quiz";
            };
        }, 1000);
    };

   
    function startQuiz() {
        console.log("inside startquiz");
        //if statement is to prevent user from keep clicking the- 
        //start button and restarting timer after starting the quiz
        if (count >= 59) {
            startClick.textContent = "Question";
            quizTimer();
            quiz();
        };
    };
    
    console.log("wglhfuhwueh");
    
    function quiz() {

            if (i === questions.length || count === -2) {
                endQuiz();
            }

            currentQuestion.textContent=questions[i].title;
            choiceA.textContent=questions[i].choices[0];
            choiceA.setAttribute("value", questions[i].choices[0]);
            choiceB.textContent=questions[i].choices[1];
            choiceB.setAttribute("value", questions[i].choices[1]);
            choiceC.textContent=questions[i].choices[2];
            choiceC.setAttribute("value", questions[i].choices[2]);
            choiceD.textContent=questions[i].choices[3];
            choiceD.setAttribute("value", questions[i].choices[3]);
            answer = questions[i].answer;

            console.log(i);
   
    };
    function checkAnswers(buttonObj) {
        console.log("i got here");
        console.log(this.value);
        console.log(questions[i]);

        if ((buttonObj.value) === questions[i].answer) {
            document.querySelector("#confirmAnswer").innerHTML = "Correct!!";            
        } else {
            document.querySelector("#confirmAnswer").innerHTML = "Wrong!!";
            count = count - 15;
        } 
        i++;
        quiz();
    };

    function endQuiz() {
        return;
    };

console.log("work");