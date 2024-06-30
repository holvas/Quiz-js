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
        //inny sposób
    /*for ([index, answerText] of questions[questionIndex]['answers'].entries()) {
        console.log(index+1, answerText);
        const questionTemplate =
            `<li>
                <label>
                    <input value = "%number%" type="radio" class="answer" name="answer" />
                    <span>%answer%</span>
                </label>
            </li>`; 
        const answerHTML = questionTemplate.replace('%answer%, answers)
        listContainer.innerHTML += answerHTML;
    } */

    let answerNumber = 1;
    for (answerText of questions[questionIndex]['answers']) {
        const questionTemplate =
            `<li>
                <label>
                    <input value = "%number%" type="radio" class="answer" name="answer" />
                    <span>%answer%</span>
                </label>
            </li>`; 
        const answerHTML = questionTemplate
                            .replace('%answer%', answerText)
                            .replace('%number%', answerNumber);
        // inny sposób 
        // let answerHTML = questionTemplate.replace('%answer%', answerText);
        // answerHTML = answerHTML.replace('%number%', answerNumber);
        // console.log(answerHTML);

        listContainer.innerHTML += answerHTML;
        answerNumber++;
    }
}

// CLICKING BY BUTTON (checkAnswer)
function checkAnswer() {

    // FIND SELECTED BUTTON radio
    checkedRadio = listContainer.querySelector('input[type="radio"]:checked');

    // If the answer is not selected - do nothing, exit the function
    if (!checkedRadio) {                                                 
        submitBtn.blur();
        return
    }

    // finding the number of the user's answer
    const userAnswer = parseInt(checkedRadio.value); //преобразовання значення радіокнопки (checkedRadio.value) з стрічки у число 

    // If the answer is correct - we increase the user's score
    if (userAnswer === questions[questionIndex]['correct']) {
        score++; // score = score + 1 
    }

    //check is this question last?
    if (questionIndex !== questions.length - 1) {
        questionIndex++;
        clearPage();
        showQuestion();
    } else {
        clearPage();
        showResults();
    }
}

function showResults() {
    const resultsTamplate = `
            <h2 class="title">%title%</h2>
            <h3 class="summary">%message%</h3>
            <p class="result">%result%</p>
        `;
    
    let title, message;

    //Title and text options
    if (score === questions.length) {
        title = 'Вітаємо!';
        message = 'Ви відповили вірно на всі питання!';
    } else if ((score * 100) / questions.length >= 50) {
        title = `Непоганий результат!`;
        message = `Ви надали більше половини правильних відповіді`
    } else {
        title = `Вам треба постаратися більше...`;
        message = `Поки що у вас менше половини вірних відповідей...`
    }

    let result = `${score} з ${questions.length}`;

    //Final message
    const finalMessage = resultsTamplate
                            .replace('%title%', title)
                            .replace('%message%', message)
                            .replace('%result%', result)
    headerContainer.innerHTML = finalMessage;

    //CHANGE THE BUTTON TO "Play Again"
    submitBtn.blur();
    submitBtn.innerText = 'Почати грати знов';
    submitBtn.onclick = () => history.go();
}