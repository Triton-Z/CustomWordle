var wordle = "";
var y = 6;
function createWord (){
  wordle = document.getElementById("userText").value;
  for (var x = 0; x<6; x++)
  {
   document.getElementById($`x{x}y{y}`).innerHTML = wordle[x];
  }
  
}
