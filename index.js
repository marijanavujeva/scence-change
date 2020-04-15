<!DOCTYPE html>
<html>
    <head>
    
    <!--
    Hello.
    You can click, on hopper, leafer and background to change the     images.
    -->
    
        <meta charset="utf-8">
        <title>Project: Scene change</title>


  <meta charset="utf-8">
        <title>Project: Scene change</title>
        <style>
        #leafers {
            position: absolute;
            top: 213px;
            left: 378px;
        }
        #hopper {
            position: absolute;
            top: 226px;
            left: 30px;
        }
            
        </style>
    </head>
    <body>

    <img src="https://www.kasandbox.org/programming-images/landscapes/beach-with-palm-trees.png" id="beach">

    <img src="https://www.kasandbox.org/programming-images/avatars/leafers-seedling.png" id="leafers">
    
    <img src="https://www.kasandbox.org/programming-images/creatures/Hopper-Happy.png" id="hopper">
    
    

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
