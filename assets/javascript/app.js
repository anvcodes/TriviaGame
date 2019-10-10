







$(document).ready(function(){

    $("#clock").hide();
    $(".Qs").hide();
    $(".qInput").hide();
    $(".questionsFrm").hide();
    $("#wrong").hide();
    $("#correct").hide();
    $("#unanswered").hide();
    $(".summary").hide();
    $("#answerCheck").hide();
   
    // setup variables
    var seconds = 30;
    var wrongAnswer = 0;
   var correctAnswer = $("input[value=correct]:checked").length;
    

    

    $("#startBtn").on("click", function(){

        $("#clock").show();
        $(".Qs").show();
        $(".qInput").show();
        $(".questionsFrm").show();
        $("#btnBackgrouns").hide();
        $("#startBtn").hide();
        $("#startTitle").hide();
        $("#answerCheck").show();
        
            $("#timeRemaining").text(timerCount);

            timerCount();
            

            function timerCount() {
                setInterval(countDown, 1000);
            }

            function countDown() {
                
            
                $("#timeRemaining").text(seconds + " seconds");
                seconds--;
                if (seconds === 0) {
                    setTimeout(seconds);
                
                    
                    
                }


        

        
    
                
    
    }
        $("<input>").on("change", function() {
           userCoice= $(this).val();
           console.log(userCoice);
            wrongAnswer = $("input[value=wrong]:checked").length;
           if (userCoice===wrongAnswer){
            $("#wrong").text("wrong answers: " + wrongAnswer);
           }
           else{
            $("#correct").text("correct answers: " + correctAnswer);
           }
            
    })

   
    
    });










   


    





    





























})