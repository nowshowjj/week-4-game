$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)
  

  $('#randomNumber').text(Random);


 
  var num1 = Math.floor(Math.random()*11+1)
  var num2 = Math.floor(Math.random()*11+1)
  var num3 = Math.floor(Math.random()*11+1)
  var num4 = Math.floor(Math.random()*11+1)

 
  
  var userTotal = 0; 
  var wins = 0;
  var losses = 0;
  

$('#numberWins').text(wins);
$('#numberLosses').text(losses);


//resets game
function reset(){
      Random = Math.floor(Math.random()*101+19);
      $('#randomNumber').text(Random);
      num1 = Math.floor(Math.random()*11+1);
      num2 = Math.floor(Math.random()*11+1);
      num3 = Math.floor(Math.random()*11+1);
      num4 = Math.floor(Math.random()*11+1);
      userTotal = 0;
      $('#finalTotal').text(userTotal);
      } 

//adds the wins to the userTotal
function win(){
alert("Winner!");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}
//addes the losses to the userTotal
function loss(){
alert ("Loser!");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}

//clicks on crystals
  $('#one').on ('click', function(){
    userTotal = userTotal + num1;
    $('#finalTotal').text(userTotal); 

          //sets win/loss conditions
        if (userTotal === Random){
          win();
        }
        else if ( userTotal >= Random){
          loss();
        }   
  })  

  $('#two').on ('click', function(){
    userTotal = userTotal + num2;
    $('#finalTotal').text(userTotal); 
        if (userTotal === Random){
          win();
        }
        else if ( userTotal >= Random){
          loss();
        } 
  })  

  $('#three').on ('click', function(){
    userTotal = userTotal + num3;
    $('#finalTotal').text(userTotal);



          if (userTotal === Random){
          win();
        }
        else if ( userTotal >= Random){
          loss();
        } 
  })  
  $('#four').on ('click', function(){
    userTotal = userTotal + num4;
    $('#finalTotal').text(userTotal); 
      
          if (userTotal === Random){
          win();
        }
        else if ( userTotal >= Random){
          loss();
        }
  });   
}); 