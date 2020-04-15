<!DOCTYPE html>
<html>
    <head>
   
    
        <meta charset="utf-8">
        <title>Project: Scene change</title>
    
    

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script>
        $("#leafers").on("click", function(event) {
            // Do something!
            console.log("leafer clicked");
            $("#leafers").attr("src", "https://www.kasandbox.org/programming-images/avatars/aqualine-seedling.png");
        });
        
        $("#beach").on("click", function(event) {
            // Do something!
            console.log("beach clicked");
            $("#beach").attr("src", "https://www.kasandbox.org/programming-images/landscapes/beach-waves-daytime.png");
        });
        
        $("#hopper").on("click", function(event) {
            // Do something!
            console.log("beach clicked");
            $("#hopper").attr("src", "https://www.kasandbox.org/programming-images/creatures/Hopper-Cool.png");
        });
</head>
</html>

