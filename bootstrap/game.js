const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText= document.querySelector('#progress-text');
const scoreText = document.querySelector('#score');
const finalScoreEnd = document.querySelector('#finalScoreEnd');
const progressBarFull= document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
 let questions = [
    {
        question: 'Which team finished 5th on the ladder in 2022?',
        choice1: 'Collingwood',
        choice2: 'Carlton',
        choice3: 'Fremantle',
        choice4: 'Brisbane',
        answer: 3,

    },
    {
        question: 'What was the winning margin in the 2022 Grand final?',
        choice1: '18',
        choice2: '81',
        choice3: '79',
        choice4: '19',
        answer: 2,

    },
    {
        question: 'Who won the Coleman Medal in 2022',
        choice1: 'Charlie Curnow',
        choice2: 'Tom Hawkins',
        choice3: 'Lance Frankiln',
        choice4: 'Tom Lynch',
        answer: 1,

    },
    {
        question: 'Where did St Kilda finish on the ladder in 2022?',
        choice1: '11th',
        choice2: '9th',
        choice3: '13th',
        choice4: '10th',
        answer: 4,

    },
    {
      question: 'Who won the Brownlow Medal in 2022',
      choice1: 'Patrick Cripps',
      choice2: 'Andy Brayshaw',
      choice3: 'Clayton Oliver',
      choice4: 'Touk Miller',
      answer: 1,

    },
    {
   question: 'How many wins did Richmond have in 2022',
   choice1: '12',
   choice2: '15',
   choice3: '14',
   choice4: '13',
   answer: 4,

   },
   { 
   question: 'Who was the last team to beat Geelong',
   choice1: 'Fremantle',
   choice2: 'St Kilda',
   choice3: 'Brisbane',
   choice4: 'Hawthorn',
   answer: 1,

   },
   {
   question: 'How many Geelong Players were selected in the 2022 All Australian team',
   choice1: '0',
   choice2: '6',
   choice3: '5',
   choice4: '4',
   answer: 3,

   },
   {
    question: 'Which of these players kicked the most goals in 2022?',
    choice1: 'Kysiah Pickett',
    choice2: 'Shai Bolton',
    choice3: 'Jack Riewoldt',
    choice4: 'Mabior Chol',
    answer: 4,
 
    },
    {
        question: 'Which player had the highest average disposals per game in 2022',
        choice1: 'Clayton Oliver',
        choice2: 'Rory Laird',
        choice3: 'Sam Walsh',
        choice4: 'Jack Macrae',
        answer: 2,
     
        },
    {
        question: 'Who won the Norm Smith Medal in the 2022 Grand Final',
        choice1: 'Patrick Dangerfield',
        choice2: 'Tyson Stengle',
        choice3: 'Isaac Smith',
        choice4: 'Tom Hawkins',
        answer: 3,
         
    },
    {
        question: 'What number is Christian Pretracca',
        choice1: '12',
        choice2: '11',
        choice3: '5',
        choice4: '4',
        answer: 3,
     
        },
        {
            question: 'Which team knocked out Melbourne in the 2022 Finals',
            choice1: 'Brisbane',
            choice2: 'Geelong',
            choice3: 'Sydney',
            choice4: 'Collingwood',
            answer: 1,
         
            },
            {
                question: 'How many wins did Carlton have in 2022',
                choice1: '9',
                choice2: '10',
                choice3: '11',
                choice4: '12',
                answer: 4,
             
                },  
                {
                    question: 'Who won the first game of the 2022 season',
                    choice1: 'Collingwood',
                    choice2: 'Melbourne',
                    choice3: 'Richmond',
                    choice4: 'Carlton',
                    answer: 2,
                 
                    },      
 ]

 const SCORE_POINTS = 1;
 const MAX_QUESTIONS = 15;

 



 startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestions();
    
    
 }

 getNewQuestions = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('end.html');
        
    }

    questionCounter++;       
    progressText.innerText = ` Question ${questionCounter} of ${MAX_QUESTIONS}` ;
    progressBarFull.style.width = ` ${(questionCounter/MAX_QUESTIONS) *100}%` ;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice =>{
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true;
 }

 choices.forEach(choice =>{
    choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
         if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
         }

         selectedChoice.parentElement.classList.add(classToApply);

         setTimeout(() =>{
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestions();



         }, 1000)
    })
 })

 incrementScore = num =>{
    score +=num;
    scoreText.innerText = score;
 }


 startGame();



 
