function sound_switch(index) {
  var audio = new Audio("./sounds/" + (index+1) + "crash.mp3");
  audio.play();
  drums[index].classList.toggle("pressed");
  setTimeout(function(){
    (function delayed (i){
      drums[index].classList.toggle("pressed");
    })(index);
  }, 70);

}

var drums = document.querySelectorAll("button.drum");
var keys = ["w", "a", "s", "d", "j", "k", "l"];

for (var i = 0; i < 7; i++) {
  (function(index) {
    drums[index].addEventListener("click", function() {
      sound_switch(index);
    });
  })(i);
}
 // Immediately invoke the IIFE with the current index value

  
  document.addEventListener("keydown", function(event) {
    var keyIndex = keys.indexOf(event.key);
    if (keyIndex !== -1) {
      sound_switch(keyIndex);
    }
  });

