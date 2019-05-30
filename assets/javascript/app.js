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
    },
    {
        question: "Which of these is part of the theme of 'American Pie' by Don McLean?",
        answer: ["breaking up with a 'Miss America' contestant","his love for Chevrolet cars","his 'patriotic pie' was stolen","the death of Buddy Holly, Jiles P. Richardson, and Richie Valens"],
        rightAnswer: "breaking up with a 'Miss America' contestant",
        animate: ""
    },
    {
        question: "Who wrote 'Blue Suede Shoes'?",
        answer: ["Elvis Presley","Carl Perkins","the Big Bopper","Paul McCartney and John Lennon"],
        rightAnswer: "Paul McCartney and John Lennon",
        animate: ""
    },
    {
        question: "What are the first names of the Everly Brothers?",
        answer: ["Alan and Ron","Don and Dan","Don and Phil","Phil and Jacob"],
        rightAnswer: "Phil and Jacob",
        animate: ""
    },
    {
        question: "Who is known as the 'King of Rock-n-Roll'?",
        answer: ["John Lennon","Chuck Berry","Fats Domino","Elvis Presley"],
        rightAnswer: "Fats Domino",
        animate: ""
    }
]
var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;
var index = Math.floor(Math.random()*4); //variable to generate random question
var index2 = Math.floor(Math.random()*4);//variable to generate random question
var index3 = Math.floor(Math.random()*4);//variable to generate random question
var index4 = Math.floor(Math.random()*4);//variable to generate random question
var index5 = Math.floor(Math.random()*4);//variable to generate random question
var remainingTime = 41; 
var intervalId;
//onclick funtion for start button
$("#btn").on("click", function() {
    $(this).hide();
    showTrivia();
    myFunction();
    $(".TriviaLogo").hide();
})
//function to display questions and answers
function showTrivia(){
    run(); 
    $("#showQuestion1").html(questionAnswer[index].question+"<br><br>");
    for(var i = 0; i < questionAnswer[index].answer.length; i++){
        var button =  $('<button class="option btn btn-info btn-sm">');
        button.attr("value", questionAnswer[index].answer[i]); 
        button.attr("data-index", index); 
        button.text(questionAnswer[index].answer[i]); 
        $("#showPossibleAnswers1").append(button);
    }
    $("#showQuestion2").html(questionAnswer[index2].question+"<br><br>");
    for(var i = 0; i < questionAnswer[index2].answer.length; i++){
        var button2 =  $('<button class="option btn btn-info btn-sm">');
        button2.attr("value", questionAnswer[index2].answer[i]); 
        button2.attr("data-index", index2); 
        button2.text(questionAnswer[index2].answer[i]);  
        $("#showPossibleAnswers2").append(button2);
    }
    $("#showQuestion3").html(questionAnswer[index3].question+"<br><br>");
    for(var i = 0; i < questionAnswer[index3].answer.length; i++){
        var button3 =  $('<button class="option btn btn-info btn-sm">');
        button3.attr("value", questionAnswer[index3].answer[i]); 
        button3.attr("data-index", index3); 
        button3.text(questionAnswer[index3].answer[i]);  
        $("#showPossibleAnswers3").append(button3);
    }   
    $("#showQuestion4").html(questionAnswer[index4].question+"<br><br>");
    for(var i = 0; i < questionAnswer[index4].answer.length; i++){
        var button4 =  $('<button class="option btn btn-info btn-sm">');
        button4.attr("value", questionAnswer[index4].answer[i]); 
        button4.attr("data-index", index4); 
        button4.text(questionAnswer[index4].answer[i]);  
        $("#showPossibleAnswers4").append(button4);
    }
    $("#showQuestion5").html(questionAnswer[index5].question+"<br><br>");
    for(var i = 0; i < questionAnswer[index5].answer.length; i++){
        var button5 =  $('<button class="option btn btn-info btn-sm">');
        button5.attr("value", questionAnswer[index5].answer[i]); 
        button5.attr("data-index", index5); 
        button5.text(questionAnswer[index5].answer[i]);  
        $("#showPossibleAnswers5").append(button5);
    }
    //function onclick to guess answers
    $(".option").on("click",function(){
        run();
   var getIndex= $(this).attr("data-index")
   var getButtonText= $(this).text();
   if(getButtonText===questionAnswer[getIndex].rightAnswer){
    correctAnswer++;
    $(this).addClass('btn-success').removeClass('btn-info');
   }
 else if(getButtonText!=questionAnswer[getIndex].rightAnswer){
    incorrectAnswer++;
    $(this).addClass('btn-danger').removeClass('btn-info');
 }
 else if(getButtonText===-1){
    unanswered++;
 }
 
    })
}
//function for diplay results
function showResults(){
    $("#results").append("Correct Answers: "+correctAnswer+"<br>");
    $("#results").append("Incorrect Answers: "+incorrectAnswer+"<br>");
    $("#results").append("Unanswered: "+unanswered+"<br>");
}
//function for hide Q&A
function myFunction(){
    // setTimeout(function(){ showResults(); }, 40*1000);
    setTimeout(function(){ $(".container").hide(); }, 40*1000);
   
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