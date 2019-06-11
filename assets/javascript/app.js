// variable with Q&A
var questionAnswer = [
    {
        question: "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
        answer: ["William and Elizabeth","Joseph and Catherine","John and Mary","George and Anne"],
        rightAnswer: "John and Mary",
        animate: ""
    },
    {
        question: "When did the Liberty Bell get its name?",
        answer: ["when it was made, in 1701","when it rang on July 4, 1776","in the 19th century, when it became a symbol of the abolition of slavery","none of the above"],
        rightAnswer: "in the 19th century, when it became a symbol of the abolition of slavery",
        animate: ""
    },
    {
        question: "In 1990, in what percentage of U.S. married couples did the wife earn more money than the husband?",
        answer: ["8","18","38","58"],
        rightAnswer: "18",
        animate: ""
    },
    {
        question: "During the 1980s for six consecutive years what breed of dog was the most popular in the U.S.?",
        answer: ["cocker spaniel","German shepherd","Labrador retriever","poodle"],
        rightAnswer: "cocker spaniel",
        animate: ""
    },
    {
        question: "The first black American pictured on a U.S. postage stamp was who?",
        answer: ["Frederick Douglass","Booker T. Washington","Louis Armstrong","Joe Louis"],
        rightAnswer: "Joe Louis",
        animate: ""
    },
    {
        question: "Whose version of 'Hound Dog' is number 19 on Rolling Stone's list of the 500 greatest songs of all time?",
        answer: ["Beatles","Buddy Holly","Elvis Presley","Rolling Stones"],
        rightAnswer: "Rolling Stones",
        animate: ""
    },
    {
        question: "I found my thrill... comes from what song by Fats Domino?",
        answer: ["Ain't That a Shame","Blueberry Hill","Come Go with Me","Sh-boom"],
        rightAnswer: "Sh-boom",
        animate: ""
    },
    {
        question: "Who sings 'Come Go With Me'?",
        answer: ["Beatles","Elvis Presley","the Del-Vikings","Fats Domino"],
        rightAnswer: "Fats Domino",
        animate: ""
    }
  
]
var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;
 var remainingTime = 40; 
var intervalId;
//onclick funtion for start button
$("#btn").on("click", function() {
    $(this).hide();
    showTrivia();
    myFunction();
    $(".TriviaLogo").hide();
})
var displayquestion = $("<div>");
//function to display questions and answers
function showTrivia(){
    run(); 
  for(var i=0; i< questionAnswer.length;i++){
      var displayquestion = $('<div>');
      displayquestion.attr("value", questionAnswer[i].question);
      displayquestion.addClass("QuestionClass");
      displayquestion.attr("id","showQuestion"+i);
      displayquestion.text(questionAnswer[i].question);
    $("#showQA").append(displayquestion);

    for(var j = 0; j < questionAnswer[i].answer.length; j++){
        var button =  $('<button class="option btn btn-dark btn-md">');
        button.attr("value", questionAnswer[i].answer[j]); 
        button.addClass("AnswerClass");
        button.attr("data-index", i); 
        button.text(questionAnswer[i].answer[j]); 
        $("#showQA").append(button);
    }
  }
    
    // $("#showQuestion2").html(questionAnswer[index2].question+"<br><br>");
    // for(var i = 0; i < questionAnswer[index2].answer.length; i++){
    //     var button2 =  $('<button class="option btn btn-dark btn-md">');
    //     button2.attr("value", questionAnswer[index2].answer[i]); 
    //     button2.attr("data-index", index2); 
    //     button2.text(questionAnswer[index2].answer[i]);  
    //     $("#showPossibleAnswers2").append(button2);
    // }
    // $("#showQuestion3").html(questionAnswer[index3].question+"<br><br>");
    // for(var i = 0; i < questionAnswer[index3].answer.length; i++){
    //     var button3 =  $('<button class="option btn btn-dark btn-md">');
    //     button3.attr("value", questionAnswer[index3].answer[i]); 
    //     button3.attr("data-index", index3); 
    //     button3.text(questionAnswer[index3].answer[i]);  
    //     $("#showPossibleAnswers3").append(button3);
    // }   
    // $("#showQuestion4").html(questionAnswer[index4].question+"<br><br>");
    // for(var i = 0; i < questionAnswer[index4].answer.length; i++){
    //     var button4 =  $('<button class="option btn btn-dark btn-md">');
    //     button4.attr("value", questionAnswer[index4].answer[i]); 
    //     button4.attr("data-index", index4); 
    //     button4.text(questionAnswer[index4].answer[i]);  
    //     $("#showPossibleAnswers4").append(button4);
    // }
    // $("#showQuestion5").html(questionAnswer[index5].question+"<br><br>");
    // for(var i = 0; i < questionAnswer[index5].answer.length; i++){
    //     var button5 =  $('<button class="option btn btn-dark btn-md">');
    //     button5.attr("value", questionAnswer[index5].answer[i]); 
    //     button5.attr("data-index", index5); 
    //     button5.text(questionAnswer[index5].answer[i]);  
    //     $("#showPossibleAnswers5").append(button5);
    // }
    //function onclick to guess answers
    
    
    $(".option").on("click",function(){
        run();
   var getIndex= $(this).attr("data-index")
   var getButtonText= $(this).text();
   if(getButtonText===questionAnswer[getIndex].rightAnswer){
    correctAnswer++;
    $(this).addClass('btn-success').removeClass('btn-dark');
   }
 else if(getButtonText!=questionAnswer[getIndex].rightAnswer){
    incorrectAnswer++;
    $(this).addClass('btn-danger').removeClass('btn-dark');
 }

    })
}
//function for diplay results
function showResults(){

    $("#results").append("Correct Answers: "+correctAnswer+"<br>");
    $("#results").append("Incorrect Answers: "+incorrectAnswer+"<br>");
    unanswered=questionAnswer.length-correctAnswer-incorrectAnswer;
    $("#results").append("Unanswered: "+unanswered+"<br>");
}
//function for hide Q&A
function myFunction(){
    // setTimeout(function(){ showResults(); }, 40*1000);
    setTimeout(function(){ $("#showQA").hide(); }, 40*1000);
   
}
//function for run time
function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
//function for decrement time
  function decrement(){
    remainingTime--;
    $("#remainingTime").text("Remaining Time: "+remainingTime );
    if (remainingTime === 0){
        stop();
        alert("Time Up!");
        showResults();

    }
  }
  function stop() {
    clearInterval(intervalId);
  }