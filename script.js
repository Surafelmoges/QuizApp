const questions = [
    {
      question: "What is 2 + 2?",
      answers: [
        { text: "4", correct: true },
        { text: "3", correct: false },
        { text: "5", correct: false },
        { text: "22", correct: false }
      ]
    },
    {
      question: "Which language runs in a browser?",
      answers: [
        { text: "Java", correct: false },
        { text: "C", correct: false },
        { text: "Python", correct: false },
        { text: "JavaScript", correct: true }
      ]
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Venus", correct: false }
      ]
    },
    {
      question: "What does HTML stand for?",
      answers: [
        { text: "HighText Machine Language", correct: false },
        { text: "HyperText and links Markup Language", correct: false },
        { text: "HyperText Markup Language", correct: true },
        { text: "None of these", correct: false }
      ]
    },
    {
      question: "What is the capital of France?",
      answers: [
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
        { text: "Paris", correct: true },
        { text: "Lisbon", correct: false }
      ]
    },
    {
      question: "Which number is the smallest prime number?",
      answers: [
        { text: "0", correct: false },
        { text: "1", correct: false },
        { text: "2", correct: true },
        { text: "3", correct: false }
      ]
    },
    {
      question: "Which of the following is a JavaScript framework?",
      answers: [
        { text: "Django", correct: false },
        { text: "Flask", correct: false },
        { text: "React", correct: true },
        { text: "Laravel", correct: false }
      ]
    },
    {
      question: "What is the boiling point of water?",
      answers: [
        { text: "90°C", correct: false },
        { text: "100°C", correct: true },
        { text: "110°C", correct: false },
        { text: "120°C", correct: false }
      ]
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      answers: [
        { text: "Mark Twain", correct: false },
        { text: "Jane Austen", correct: false },
        { text: "William Shakespeare", correct: true },
        { text: "Charles Dickens", correct: false }
      ]
    },
    {
      question: "What is the largest mammal in the world?",
      answers: [
        { text: "Elephant", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Giraffe", correct: false },
        { text: "Shark", correct: false }
      ]
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      answers: [
        { text: "//", correct: true },
        { text: "<!-- -->", correct: false },
        { text: "#", correct: false },
        { text: "/* */", correct: false }
      ]
    },
    {
      question: "Which country is home to the Great Wall?",
      answers: [
        { text: "India", correct: false },
        { text: "China", correct: true },
        { text: "Japan", correct: false },
        { text: "Korea", correct: false }
      ]
    },
    {
      question: "Which organ pumps blood throughout the body?",
      answers: [
        { text: "Lungs", correct: false },
        { text: "Liver", correct: false },
        { text: "Brain", correct: false },
        { text: "Heart", correct: true }
      ]
    },
    {
      question: "Which tag is used to create a hyperlink in HTML?",
      answers: [
        { text: "<a>", correct: true },
        { text: "<link>", correct: false },
        { text: "<href>", correct: false },
        { text: "<url>", correct: false }
      ]
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      answers: [
        { text: "Oxygen", correct: false },
        { text: "Nitrogen", correct: false },
        { text: "Carbon Dioxide", correct: true },
        { text: "Helium", correct: false }
      ]
    }
  ];

  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-btn");
  const nextButton = document.getElementById("next-btn");

  let currentQuestionIndex = 0;
  let score = 0; 




  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Next";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
      answerButtons.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.style.backgroundColor = "green";
      score++;
    } else {
      selectedBtn.style.backgroundColor = "red";
    }
  
    Array.from(answerButtons.children).forEach(button => {
      button.disabled = true;
      if (button.dataset.correct === "true") {
        button.style.backgroundColor = "green";
      }
    });
  
    nextButton.style.display = "inline-block";
  }
  
  function showScore() {
    resetState();
    questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerText = "Play Again";
    nextButton.style.display = "inline-block";
  }
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });
  
  startQuiz();