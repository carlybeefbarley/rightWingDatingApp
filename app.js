var quiz;

function start() {

    var questions = [
      new Question("What do you typically do with your trash?", ["Let my significant other take care of it", "Nothing. That is what janitors are for", "Leave it in my bed...maybe roll around in it a little", "Give it to a child as a gift"], "Let my significant other take care of it"),
      new Question("What color do you find the most appealing?", ["Red", "Orange", "White", "Brown"], "Orange"),
      new Question("What do you think is the biggest problem with politics in America?", ["The 99%", "Immigrants of any kind", "disloyalty", "bad hombres"], "The 99%"),
      new Question("What do you think about your own appearance?", ["I am the most attractive person around and I wouldn't change a thing", "I kind of look like a toe", "I don't care what I look like whatsoever", "I avoid mirrors"], "I am the most attractive person around and I wouldn't change a thing"),
      new Question("Where would you say you fall on the political spectrum?" ["Further right than there is a name for", "Wherever it is beneficial for me to be at any given moment", "I am a robot", "Whatever is the opposite of Hillary"], "Wherever it is beneficial for me to be at any given moment")
    ];
quiz = new Quiz(questions);
window.onload = function() {
populate();
};
}


function populate() {

  if(quiz.isEnded()) {
    showScores();
  } else {
    //show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    //show choices
    var choices = quiz.getQuestionIndex().choices;
    //debugger;
    for(var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + (i+1));
      element.innerHTML = choices[i];
      //guess("btn" + i, choices[i]);
    }
    showProgress();
  }

};

function guess(id) {
  //debugger;
  quiz.guess(id.innerText);
    populate();

}


function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of" + quiz.questions.length;
}

function showScores() {
  var gameOverHtml = "<h1>Results</h1>";
  gameOverHtml += "<h2 id>Your fate: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;
}

start();
