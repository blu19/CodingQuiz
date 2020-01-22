//function main() {

    // var currentQ = 0;
    // var viewingAns = 0;
    // var correctAns = 0;
    // var quizEnd = false;
    // var selectedAns = [];
    // var count = 60;

    var startClick = document.querySelector(".startBtn");

    // function get(x) {
    //     return document.getElementById(x);
    // }

    startClick.addEventListener("click", function () {
        quizTimer();
        test ();
    }); 
    
    function test() {
        console.log("hello");
    }

    function quizTimer() {
        count = 60;
        var interval = setInterval(function () {
            document.getElementById("count").innerHTML = "Remaining Time: " + count + "s";
            count--;
            if (count === -2) {
                clearInterval(interval);
                document.getElementById("count").innerHTML = "End of Quiz";
                // or...
                alert("You're out of time!");
            }
        }, 1000);
    };

    // function quizQ() {
    //     quiz = get("quiz");
    //     //check to see if there are more quiz questions and resets timer and question index for restart of quiz
    //     if (pos >= questions.length) {
    //         get("quiz_status").innerHTML = "Quiz completed";
    //         pos = 0;
    //         return false;
    //     }
    //     get("quiz_status").innerHTML;
    // }
//   quizQ();
//}
//main();

console.log("work");