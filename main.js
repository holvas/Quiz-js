const questions = [
    {
        question: "Яка мова працює в браузері?",
        answers: ["Java", "C++", "Python", "JavaScript"],
        correct: 4,
    },
    {
        question: "Що означає CSS?",
        answers: [
            "Central Style Sheets",
            "Cascading Style Sheets",
            "Cascading Simple Sheets",
            "Cars SUVs Sailboats",
        ],
        correct: 2
    },
    {
        question: "Що означає HTML?",
        answers: [
        "Hypertext Markup Language",
        "Hypertext Markdown Language",
        "Hyperloop Machine Language",
        "Helicopters Terminals Motorboats Lamborginis",
    ],
        correct: 1,
    },
    {
        question: "В якому році було створено JavaScript?",
        answers: ["1996", "1995", "1994", "всі відповіді вірні"],
        correct: 2,
    },
];

//finding the elements
const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');

//game's variables
let score = 0; //number of correct answers
let questionIndex = 0; //current issue

clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;

//function CLEAR HTML MARKUP
function clearPage() {
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}

//function RENDER of QUESTION 
function showQuestion() {
    console.log('showQuestion');
  
    //question 
    const headerTemplate = `<h2 class="title">%title%</h2>`;
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
    headerContainer.innerHTML = title;    

    //answers
    for (answerText of questions[questionIndex]['answers']) {
        const questionTemplate =
            `<li>
                <label>
                    <input type="radio" class="answer" name="answer" />
                    <span>%answer%</span>
                </label>
            </li>`;
        const answerHTML = questionTemplate.replace('%answer%', answerText);
        listContainer.innerHTML += answerHTML;
    }
}

// CLICKING BY BUTTON (checkAnswer)
function checkAnswer() {
console.log('checkAnswer started!');
}

//check answer