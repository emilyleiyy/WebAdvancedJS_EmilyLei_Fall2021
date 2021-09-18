// Create an array to store all questions.
var allQuestions = [];
// Store each question in an object.
allQuestions[0] = {
    question: "What color do you see in this page?",
    choices: ["Black", "White","No color"],
    correctAnswer: 2
};
allQuestions[1] = {
    question: "Is this white in black? or black in white?",
    choices: ["White in black", "Black in white","Blended"],
    correctAnswer: 1
};
allQuestions[2] = {
    question: "Do black and white exist independently of each other?",
    choices: ["Yes", "No", "Not sure"],
    correctAnswer: 0
};


// Display first question
document.getElementById("question").textContent = allQuestions[0].question;

document.getElementById("choice0").textContent = allQuestions[0].choices[0];

document.getElementById("choice1").textContent = allQuestions[0].choices[1];

document.getElementById("choice2").textContent = allQuestions[0].choices[2];

// Create a variable to store the user's score
var userScore = 0;

// Create a variable to store the index of the current question
var questionNum = 0;

// When the NEXT button is clicked, the user's score is updated, the current question is hidden, and the next question is revealed.
$("#next").click(function() {
   
// Check if User answered question.
  if($("form input[name=answer]:checked").val() == allQuestions[questionNum].correctAnswer) {
    userScore++;
  }
  
// If last question, show user's result rather than next question
  if (questionNum == (allQuestions.length - 1)) {
    document.getElementsByTagName("form")[0].style.display = "none";
    if (userScore==0){
      document.getElementById("question").textContent ="Explore more in color.";
    }
    if (userScore==1){
      document.getElementById("question").textContent ="The color is amazing.";
    }
    if (userScore==2){
      document.getElementById("question").textContent ="Color painted our world.";
    }
    if (userScore==3){
      document.getElementById("question").textContent ="Let color to speak for us.";
    }
  }
  
    questionNum++;
  
  // Replace current question with next question
    document.getElementById("question").textContent = allQuestions[questionNum].question;

    document.getElementById("choice0").textContent = allQuestions[questionNum].choices[0];

    document.getElementById("choice1").textContent = allQuestions[questionNum].choices[1];

    document.getElementById("choice2").textContent = allQuestions[questionNum].choices[2];
});