const quizQues = [
    {
        question: "Q1: What is the nickname of Sagnik?",
        a:"Bengali",
        b:"Bawre",
        c:"Chutiya",
        d:"Randi-rona",
        ans: "option2"
    },
    {
        question: "Q2: When was AAAAS formed?",
        a:"2018",
        b:"2019",
        c:"2020",
        d:"2021",
        ans: "option1"
    },
    {
        question: "Q3: Is Dibyas committed?",
        a:"No",
        b:"Probably",
        c:"Yes",
        d:"None of the Above",
        ans: "option3"
    },
    {
        question: "Q4: Is Archit really happy?",
        a:"Yes",
        b:"No",
        c:"Suicidal,probably?",
        d:"No one knows",
        ans: "option4"
    },
    {
        question: "Q5: How many girls Adi has fucked in total?",
        a:"6",
        b:"5",
        c:"9",
        d:"Can't be counted",
        ans: "option4"
    },
    {
        question: "Q6: Is Sampurn the Alpha Male of PES?",
        a:"hatt",
        b:"chutiya hai kya?",
        c:"Yes,ofcourse",
        d:"hahahaha",
        ans: "option3"
    },
];

const question = document.querySelector('.question');
const option1 =  document.querySelector('#option1');
const option2 =  document.querySelector('#option2');
const option3 =  document.querySelector('#option3');
const option4 =  document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll(".answer")
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;


const loadQuestion = ()=>{
        const questionList = quizQues[questionCount]
        question.innerText =  questionList.question;
        opt1.innerText = questionList.a;
        opt2.innerText = questionList.b;
        opt3.innerText = questionList.c;
        opt4.innerText = questionList.d;
}
loadQuestion();



const getCheckAnswer = ()=>{
    let answer ;
    answers.forEach((currAnsElem)=>{
        if(currAnsElem.checked){
            answer = currAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = ()=>{
    answers.forEach((currAnsElem)=>currAnsElem.checked = false);
}
submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizQues[questionCount].ans){
        score++;
    }

    questionCount++;

    deselectAll();
    if(questionCount < quizQues.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h3> You Scored ${score}/${quizQues.length}</h3>
        <button class = "btn" onclick = "location.reload()">Play Again</button>
        `;
        
        showScore.classList.remove('scoreArea')
    }
});