var buttonText = document.getElementById("userButton");
var word = "";
var yLevel = 1;
function button (){
  if (document.getElementById("userButton").value == "Enter Word")
  {
    if (word.length==5)
    {  
      word = document.getElementById("userText").value;
      buttonText.innerHTML = "Guess Word";
    } 
  } else {
    for (var xLevel = 1; xLevel<6; xLevel++)
    {
      document.getElementById("x"+xLevel+"y"+yLevel).innerHTML = word.substring(xLevel-1, xLevel);
      
    }
  }
}
