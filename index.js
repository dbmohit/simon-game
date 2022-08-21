var gamepattern = [];
var buttoncolor =["red","blue","green","yellow"];
var clickedpattern = [];
var started = false;
var level = 0;
$(document).on("keypress",function(e){
  
    if(!started){
      $("#level-title").text("Level " + level);
      started = true;
      nextSequence();
      
  }
})
$(".btn").on("click",function(){
    var choosencolor = $(this).attr("id");
    clickedpattern.push(choosencolor);

    playsound("sounds/"+choosencolor+".mp3");
    animate(choosencolor);
    checklevel(clickedpattern.length-1);
})
function checklevel(currlevel){
  if(clickedpattern[currlevel] === gamepattern[currlevel]){
    console.log("succsess");
  if(clickedpattern.length === gamepattern.length){
    setTimeout(function () {
      nextSequence();
    }, 1000);
    
  }
}
else {
  playsound("sounds/wrong.mp3");
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 1000);
  $("#level-title").text("game over press any key to restart");
  startover();
}
}

function nextSequence(){
  clickedpattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var random = Math.floor(Math.random() * 4);
   var randomChosenColour = buttoncolor[random];
   gamepattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);;
    playsound("sounds/"+randomChosenColour+".mp3");
}
function playsound(name){
    var audio = new Audio(name);
    audio.play();
}
function animate(currentColor) {

    //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
    $("#" + currentColor).addClass("pressed");
  
    //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
  function startover(){
    // randomChosenColour = [];
     //level = 0;
     
   
       //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
       level = 0;
       gamepattern = [];
       started = false;
   }
  
