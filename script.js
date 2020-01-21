function main() {

    function quizTimer() {
        var count = 90;
        var interval = setInterval(function () {
            document.getElementById("count").innerHTML = "Remaining Time: " + count + "s";
            count--;
            if (count === 0) {
                clearInterval(interval);
                document.getElementById("count").innerHTML = "End of Quiz";
                // or...
                alert("You're out of time!");
            }
        }, 1000);
    };
    quizTimer();
}
main();

console.log("work");