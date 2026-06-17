function checkQuiz() {

    let score = 0;

    let answers = document.querySelectorAll('input[value="correct"]:checked');

    score = answers.length;

    let result = document.getElementById("result");

    result.innerHTML =
        "🎯 Your Score: " + score + " / 3";

    if(score === 3){
        result.innerHTML += "<br>Excellent! You understand phishing threats.";
    }
    else if(score >= 2){
        result.innerHTML += "<br>Good job! Keep learning cybersecurity.";
    }
    else{
        result.innerHTML += "<br>Review the training material and try again.";
    }
}