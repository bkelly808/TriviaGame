/** You'll create a trivia form with multiple choice or true/false options (your choice).
*The player will have a limited amount of time to finish the quiz. 
The game ends when the time runs out. 
* The page will reveal the number of questions that players answer correctly and incorrectly.
*Don't let the player pick more than one answer per question.
*Don't forget to include a countdown timer.*/

$(document).ready(function() {
  // when the page is loaded first, the timer, questions and summary must be hidden.
  
      $('#countdown').hide();
      $('.trivia-ques').hide();
      $('.results').hide();
  
      //Declare Variables
      var number = 90;
      var intervalId;
      var correctCount = 0;
      var wrongCount = 0;
      var unanswered = 0;
    
      //Show the Questions
      function showQuestions(){
          $('#countdown').show();
          $('.trivia-ques').show();
          $('#game-done').show();
      }
  
      // Countdown timer
      function countdownTimer(){
              intervalId = setInterval(decrement, 1000);
      }
      function decrement(){
          number--;
          $('#timer').html(" " + number + " " + "seconds");
          if (number ===1){
              $('#timer').html(" " + number + " " + "second");
          }
          else if(number ===0) {
              stop();
              hide();
              displaySummary();
          }
      }
      function stop() {
          clearInterval(intervalId);
      }
  
          //Need to hide text after questions are answered or timer runs out
      function hide(){
          $('#countdown').hide();
          $('.trivia-ques').hide();
          $('#game-done').hide();
      }
  
      // Need to display results
      function displaySummary(){
          $('.results').show();
          unanswered = (8-(correctCount+wrongCount));
          $('#correctScore').text("Correct Answers:" + " " + correctCount); 
          $('#wrongScore').text("Wrong Answers:" + " " + wrongCount); 
          $('#unanswered').text("Unanswered:" + " " + unanswered); 
      }

      //Start game by Clicking Start Button
      $('#game-start').on('click', function(){
          $('#game-start').hide();
          showQuestions();
          countdownTimer();
      }); 
  
      //Clicking Done Button
      $('#game-done').on('click', function(){
          $('#game-start').hide(); 
          hide();
          displaySummary();
      });
  
      //Clicking Radio button
      $('input[type=radio]').on ('change', function(){
      correctCount = $('input[value=correct]:checked').length;
      wrongCount = $('input[value=wrong]:checked').length;
      unanswered = (8-(correctCount+wrongCount));
      });
  });