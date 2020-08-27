//hidden objects
var hidden = document.getElementsByClassName("hide");
var startContainer = document.getElementsByClassName("start-container");
//score
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
        question: "What is 1+1?",
        a: "The answer is 2 The answer is 2",
        b: "The answer is 0",
        c: "The answer is 4",
        d: "The answer is 8",
        answer: "a"
    },
    {
        id: "Question 2",
        question: "What is 2+2?",
        a: 0,
        b: 1,
        c: 4,
        d: 2,
        answer: "c"
    },
    {
        id: "Question 3",
        question: "What is 3+3? asjfoiwerwlaejslkdfjakljflsdkjklsjfklsdjf",
        a: "apples",
        b: "6 Six is the answer",
        c: "wrong answer",
        d: "wrong answer again",
        answer: "b"
    }
]

//Timer
var timerEl = document.getElementById("timer");
var seconds = 0;

function startTimer(){
    setInterval(function(){
        seconds++;
        timerEl.textContent = "Timer: " + seconds;
    }, 1000);
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
    });
    answer2El.addEventListener("click",function(){
        if(questionArray[currentQuestion].answer === "b"){
            answer2El.style.backgroundColor = "green";
            score = score + 5;
        }else{
            answer2El.style.backgroundColor = "red";
            score = score - 1;
        }
    });
    answer3El.addEventListener("click",function(){
        if(questionArray[currentQuestion].answer === "c"){
            answer3El.style.backgroundColor = "green";
            score = score + 5;
        }else{
            answer3El.style.backgroundColor = "red";
            score = score - 1;
        }
    });
    answer4El.addEventListener("click",function(){
        if(questionArray[currentQuestion].answer === "d"){
            answer4El.style.backgroundColor = "green";
            score = score + 5;
        }else{
            answer4El.style.backgroundColor = "red";
            score = score - 1;
        }
    });


//Next button
var btnNext = document.getElementById("next");
btnNext.addEventListener("click", function(){   
    // IS THIS CORRECT? CONSOLE KEEPS SHOWING THE SAME LAST QUESTION

    if(currentQuestion < questionArray.length -1){
        currentQuestion++;
    }else{
        alert("score");
    }

    //set the background color back to white
    answer1El.style.backgroundColor = "#fff";
    answer2El.style.backgroundColor = "#fff";
    answer3El.style.backgroundColor = "#fff";
    answer4El.style.backgroundColor = "#fff";
    //render the next question
    renderQuestion();

    console.log(score);
});





var answerEl = document.querySelectorAll(".answer");

// answerEl.forEach(function(element){
//         element.addEventListener("mouseover", function(){
//         event.target.style.backgroundColor = "#925999"; 
//         });
//         // element.addEventListener("mouseleave", function(){
//         // event.target.style.backgroundColor = "#fff"; 
//         //     if(!element.classList.contains("correct")){
                
//         //     }
//         // });
// });




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

