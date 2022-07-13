var wordle = "";
var guessedWord = "";
var y = 6;
var mode = "create";


function colorCorrect()
{
    for (var i = 0; i<wordle.length; i++)
    {
        if (wordle[i] === guessedWord[i])
        {
            document.getElementById(`x${i+1}y${y}`).style.color = "#0ee82f";
        } else if (wordle.includes(guessedWord[i]))
        {
            document.getElementById(`x${i+1}y${y}`).style.color = "#ebe534";
        } else 
        {
            document.getElementById(`x${i+1}y${y}`).style.color = "red";
        }
    }
}

function restartgame ()
{
    for (var i = 0; i<6; i++)
    {
        document.getElementById(`y${i+1}`).style.marginRight = "0px";
        document.getElementById(`y${i+1}`).style.letterSpacing = "0px";
        for (var x = 0; x<5; x++)
        {
            document.getElementById(`x${x+1}y${i+1}`).innerHTML = " - ";
            document.getElementById(`x${x+1}y${i+1}`).style.color = "white";
        }
    }
    document.getElementById("userButton").innerHTML = "Enter Word";
    document.getElementById("status").innerHTML = "Status: Not Started";
    document.getElementById("status").style.color = "white";
    y = 6;
    mode = "create";

}


function guessWord()
{
if (document.getElementById("userText").value.length===5) //Checks if the guessed word is at least 5 letters long
{
    if (y>0) //If not currently displaying on last row
    {
            guessedWord = document.getElementById("userText").value;
            for (var x = 0; x<5; x++)
            {
                document.getElementById(`x${x+1}y${y}`).innerHTML = guessedWord[x];
                document.getElementById(`y${y}`).style.letterSpacing = "28px";
                document.getElementById(`y${y}`).style.marginRight = "-30px";
            }
        colorCorrect();
        y--;
    } 

} else //If not 5 letters long, display word is too short
{
    document.getElementById("status").innerHTML = "Status: Word too Short";
    document.getElementById("status").style = "white";
}
if (y>0 === false && guessedWord !== wordle)
{
    document.getElementById("status").innerHTML = `Status: Game Over! The word was "${wordle}"`;
    document.getElementById("status").style.color = "red";
    document.getElementById("userButton").innerHTML = "Restart";
    mode = "restart";
} else if (guessedWord === wordle)
{
    document.getElementById("status").innerHTML = `You won! The word was "${wordle}"`;
    document.getElementById("status").style.color = "#0ee82f";
    document.getElementById("userButton").innerHTML = "Restart";
    mode = "restart";
}
guessedWord = document.getElementById("userText").value = "";
}

function createWord()
{
    if (mode === "create")
    {
        if (document.getElementById("userText").value.length === 5)
        {
            wordle = document.getElementById("userText").value;
            document.getElementById("userButton").innerHTML = "Guess Word";
            document.getElementById("userText").value = "";
            mode = "guess";
            document.getElementById("status").innerHTML = "Status: Game Started";
            document.getElementById("status").style.color = "#0ee82f";
        } else if (mode === "guess")
        {
            document.getElementById("status").innerHTML = "Status: Word too Short"
        }
    } else if (mode === "restart")
    {
        restartgame();
    }else {
        guessWord();
    }    
}

function fiveWordCheck()
{
    if (document.getElementById("userText").value.length>5)
    {
        document.getElementById("userText").value = document.getElementById("userText").value.substring(0, 5);
    }
    document.getElementById("userText").value = document.getElementById("userText").value.toUpperCase();
}
