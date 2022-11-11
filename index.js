const readlineSync = require("readline-sync");
let score = 0;

let questions = [
  {
    question: "What is the capital of India? ",
    answer: "New Delhi",
  },
  {
    question: "What is the economic capital of India? ",
    answer: "Mumbai",
  },
  {
    question: "What is the national bird of India? ",
    answer: "Peacock",
  },
  {
    question: "What is the national sport of India? ",
    answer: "Hockey",
  },
  {
    question: "What is the national animal of India? ",
    answer: "Tiger",
  },
];

function greet() {
  let userName = readlineSync.question("What is your name? ");
  console.log("Welcome " + userName + " to the Indian Fandom Quiz!");   
}

function play(question, answer) {
  let userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("Correct Answer!");
    score = score + 1;
  } else {
    console.log("Wrong Answer!");
  }

  console.log("Your current score: " + score);
  console.log("-------------");
}
function startGame(){
    for(let i = 0;i<questions.length;i++){
        play(questions[i].question,questions[i].answer);
    }
    finalScore();
}

function finalScore(){
    console.log("-------------");
    console.log("Your Final Score is: " + score);
    console.log("Thank you for playing this quiz!!!");
    console.log("-------------");
}
greet();
startGame();
