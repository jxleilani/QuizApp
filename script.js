//hidden objects
var hidden = document.getElementsByClassName("hide");
var startContainer = document.getElementsByClassName("start-container");
var main = document.getElementById("main");
//score
var highscoresEl = document.getElementById("highscores");
var scoreEl = document.getElementById("score");
var score = 0;
//question text
var title = document.getElementById("title");
var questionText = document.getElementById("question");
//answer text
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var answer4El = document.getElementById("answer4");

var questionArray = [
    {
        id: "Question 1",
        question: "Inside which element do we put the JavaScript?",
        a: "<script>",
        b: "<javascript>",
        c: "<link>",
        d: "<js>",
        answer: "a"
    },
    {
        id: "Question 2",
        question: "How do you write Hello World as an alert?",
        a: 'alert = "Hello World";',
        b: "alert(Hello World);",
        c: 'alert("Hello World");',
        d: 'msg(Hello World);',
        answer: "c"
    },
    {
        id: "Question 3",
        question: "How do you create a function in JavaScript?",
        a: "function = myFunction",
        b: "function myFunction()",
        c: "myFunction()",
        d: "new function;",
        answer: "b"
    }
]

//Timer
var timerEl = document.getElementById("timer");
var seconds = 0;

// function startTimer(){
//     setInterval(function(){
//         seconds++;
//         timerEl.textContent = "Timer: " + seconds;
//     }, 1000);
// }



var myTimer = setInterval(startTimer, 1000);
function startTimer(){
    seconds++;
    timerEl.textContent = "Timer: " + seconds;
}
function stopTimer(){
    clearInterval(myTimer);
}


//Render Question
var currentQuestion = 0;

function renderQuestion(){
        title.textContent = questionArray[currentQuestion].id;
        questionText.textContent = questionArray[currentQuestion].question;
        answer1El.textContent = questionArray[currentQuestion].a;
        answer2El.textContent = questionArray[currentQuestion].b;
        answer3El.textContent = questionArray[currentQuestion].c;
        answer4El.textContent = questionArray[currentQuestion].d;
        
        //REMOVE THIS LATER
        console.log(questionArray[currentQuestion]); 
}

//Show correct answer

    //event listeners for answers
    answer1El.addEventListener("click",function(){
        
        if(questionArray[currentQuestion].answer === "a"){
            answer1El.style.backgroundColor = "green";
            score = score + 5;
        }else{
            answer1El.style.backgroundColor = "red";
            score = score - 1;
        }

        answer2El.style.pointerEvents = "none";
        answer3El.style.pointerEvents = "none";
        answer4El.style.pointerEvents = "none";
    });
    answer2El.addEventListener("click",function(){
        if(questionArray[currentQuestion].answer === "b"){
            answer2El.style.backgroundColor = "green";
            score = score + 5;
        }else{
            answer2El.style.backgroundColor = "red";
            score = score - 1;
        }
        answer1El.style.pointerEvents = "none";
        answer3El.style.pointerEvents = "none";
        answer4El.style.pointerEvents = "none";
    });
    answer3El.addEventListener("click",function(){
        if(questionArray[currentQuestion].answer === "c"){
            answer3El.style.backgroundColor = "green";
            score = score + 5;
        }else{
            answer3El.style.backgroundColor = "red";
            score = score - 1;
        }
        answer1El.style.pointerEvents = "none";
        answer2El.style.pointerEvents = "none";
        answer4El.style.pointerEvents = "none";
    });
    answer4El.addEventListener("click",function(){
        if(questionArray[currentQuestion].answer === "d"){
            answer4El.style.backgroundColor = "green";
            score = score + 5;
        }else{
            answer4El.style.backgroundColor = "red";
            score = score - 1;
        }
        answer1El.style.pointerEvents = "none";
        answer2El.style.pointerEvents = "none";
        answer3El.style.pointerEvents = "none";
    });


//Next button
var btnNext = document.getElementById("next");
btnNext.addEventListener("click", function(){   
    // IS THIS CORRECT? CONSOLE KEEPS SHOWING THE SAME LAST QUESTION

    if(currentQuestion < questionArray.length -1){
        currentQuestion++;
    }else{
        stopTimer();
        main.style.display = "none";
        highscoresEl.style.display = "block";
        scoreEl.textContent = score;
    }

    //set the background color back to white
    answer1El.style.backgroundColor = "#fff";
    answer2El.style.backgroundColor = "#fff";
    answer3El.style.backgroundColor = "#fff";
    answer4El.style.backgroundColor = "#fff";
    //turn pointer events back on
    answer1El.style.pointerEvents = "auto";
    answer2El.style.pointerEvents = "auto";
    answer3El.style.pointerEvents = "auto";
    answer4El.style.pointerEvents = "auto";
    //render the next question
    renderQuestion();

    console.log(score);
});


//Start Button
var btnStart = document.getElementById("start");
btnStart.addEventListener("click", function(){
    startTimer();
    renderQuestion();
    startContainer[0].style.display = "none";
    timerEl.style.display = "flex";
    hidden[0].style.display = "block";
    hidden[1].style.display = "block";
    hidden[2].style.display = "block";
    hidden[3].style.display = "block";
    hidden[4].style.display = "block";
    hidden[5].style.display = "block";
    hidden[6].style.display = "block";
});

