//hidden objects
var hidden = document.getElementsByClassName("hide");
var startContainer = document.getElementsByClassName("start-container");
var main = document.getElementById("main");
//score
var highscoresEl = document.getElementById("highscores");
var scoreBoard = document.getElementById("score-board");
var scoreEl = document.getElementById("score");
var scoreName = document.getElementById("scoreName");
var submitScore = document.getElementById("submit");
var score = 0;
var highscoreList = [];
var newWinner = {};
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
    },
    {
        id: "Question 4",
        question: "How does a For loop start?",
        a: "for (i) i++;",
        b: "for (i=0; i++)",
        c: "for i<0 ()",
        d: "for (i=0; i < 10; i++)",
        answer: "d"
    },
    {
        id: "Question 5",
        question: "How do you add a comment in JavaScript?",
        a: "'This is a comment'",
        b: "//This is a comment",
        c: "<!-- This is a comment -->",
        d: "* This is a comment *",
        answer: "b"
    },
    {
        id: "Question 6",
        question: "How do you create a JavaScript array?",
        a: "var colors = red, white, blue",
        b: "var colors = {'red', 'white', 'blue'}",
        c: 'var colors = ["red", "white", "blue"]',
        d: "var colors = (red) (white) (blue)",
        answer: "c"
    },
    {
        id: "Question 7",
        question: "Which operator is used to assign a value to a variable?",
        a: "=",
        b: "===",
        c: "+",
        d: "*",
        answer: "a"
    },
    {
        id: "Question 8",
        question: "What is the correct syntax to change the text of a div with an id of demo?",
        a: "document.getElementById(#demo).textContent = 'Hello';",
        b: "getID(demo).text = 'Hello'",
        c: '#demo.textContent = "Hello";',
        d: 'document.getElementById("demo").textContent = "Hello";',
        answer: "d"
    },
    {
        id: "Question 9",
        question: "What is the correct syntax to link an external javascript file called script.js?",
        a: '<script src=script.js>',
        b: '<script type="text/javascript" src="script.js"></script>',
        c: 'script.name = script.js',
        d: '<link script.js>',
        answer: "b"
    },
    {
        id: "Question 10",
        question: "How do you write an IF statement for executing some code if i is not equal to 10?",
        a: 'if (i != 10)',
        b: 'if (i not 10)',
        c: 'if i =! 10 then',
        d: 'if i *10*',
        answer: "a"
    }
]

//Timer
var timerEl = document.getElementById("timer");
var seconds = 0;

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
}


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
    //hide start button
    startContainer[0].style.display = "none";
    //show hidden elements
    timerEl.style.display = "flex";
    hidden[0].style.display = "block";
    hidden[1].style.display = "block";
    hidden[2].style.display = "block";
    hidden[3].style.display = "block";
    hidden[4].style.display = "block";
    hidden[5].style.display = "block";
    hidden[6].style.display = "block";
});



init();

//Store the scores
function storeScores(){
    localStorage.setItem("high-scores", JSON.stringify(highscoreList));
}

//Initialize score board
function init() {
    var savedScores = JSON.parse(localStorage.getItem("high-scores"));
    if(savedScores !== null){
        highscoreList = savedScores;
    }
    renderScores();
}
//Render high scores
function renderScores(){
    scoreBoard.innerHTML = "";

    for(var i=0; i < highscoreList.length; i++){
        

        var newRow = document.createElement("tr");
        var newScore = document.createElement("td");
        var newName = document.createElement("td");

        newScore.textContent = highscoreList[i].score;
        newName.textContent = highscoreList[i].firstName;


        newRow.appendChild(newScore);
        newRow.appendChild(newName);

        scoreBoard.appendChild(newRow);

    }
}



//Submit score
submitScore.addEventListener("click", function(event){
    event.preventDefault();
    newWinner = {
        firstName: scoreName.value.trim(),
        score: score
    };
    //return early if submitted name is blank
    if(JSON.stringify(newWinner) === "" ){
        return;
    }
    //push newWinner object nto highscoreList[]
    highscoreList.push(newWinner);
    scoreName.value = "";
    
    storeScores();
    renderScores();

    //TEST REMOVE LATER
    localStorage.setItem("winner", JSON.stringify(newWinner));
    var winners = JSON.parse(localStorage.getItem("winner"));
    console.log(winners);
});