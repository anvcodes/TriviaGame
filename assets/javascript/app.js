







$(document).ready(function(){

    $("#clock").hide();
    $(".Qs").hide();
    $(".qInput").hide();
    $(".questionsFrm").hide();
   
    // setup variables
    var seconds = 30;
    

    

    $("#startBtn").on("click", function(){

        $("#clock").show();
        $(".Qs").show();
        $(".qInput").show();
        $(".questionsFrm").show();
        $("#btnBackgrouns").hide();
        $("#startBtn").hide();
        $("#startTitle").hide();

            $("#timeRemaining").text(timerCount);

            timerCount();
            

            function timerCount() {
                setInterval(countDown, 1000);
            }

            function countDown() {
                
            
                $("#timeRemaining").text(seconds + " seconds");
                seconds--;
                if (seconds === 0) {
                    setTimeout();
                
                    
                    
                }


        

        
    
                
    
    }
        $("<input>").on("change", function() {
           userCoice= $(this).val();
           console.log(userCoice);
            wrongAnswer = $("#checkBox").val("wrong");
           
            
    })

   
    
    });










   


    





    





























})