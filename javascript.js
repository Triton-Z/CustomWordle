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
    for (var xLevel = 1; x<6; x++)
    {
      document.getElementById(xLevel+"x"+yLevel+"y").innerHTML = word.substring(x-1, x);
      
    }
  }
}
