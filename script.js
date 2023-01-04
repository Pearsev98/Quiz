const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
 // used few const in this code //
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}
                                                  
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
                                                // This is where i found my only bug i used the wrong brackets to finish the code //
const questions = [
  {
    question: 'What year did the HRE disband?',
    answers: [
      { text: '1806', correct: true },
      { text: '1707', correct: false }
    ]
  },
  {
    question: 'Who was the leader of the Mogol Empire?',
    answers: [
      { text: 'Genghis Khan', correct: true },
      { text: 'Charlemagne', correct: false },
      { text: 'Alexander The Great', correct: false },
      { text: 'Joseph Stalin', correct: false }
    ]
  },
  {
    question: 'What year did Alexander The Great Die?',
    answers: [
      { text: '227 BC', correct: false },
      { text: '323 BC', correct: true },
      { text: '2004', correct: false },
      { text: '2000 BC', correct: false }
    ]
  },
  {
    question: 'What year did the Vikings invade England?',
    answers: [
      { text: '1086 AD', correct: false },
      { text: '866 AD', correct: true },
      { text: '720 AD', correct: false}
    ]
  },
    {
    question: 'Are dolphins mammals?',
    answers: [
      { text: 'No there cats', correct: false },
      { text: 'Yes', correct: true },
      { text: 'No chance', correct: false },
      { text: 'I dont know', correct: false }
    ]
  },
      {
    question: 'What year did Charlemagne die?',
    answers: [
      { text: '1082 AD', correct: false },
      { text: '814 AD', correct: true },
      { text: '720 AD', correct: false },
      { text: '1876', correct: false }
    ]
  },
]