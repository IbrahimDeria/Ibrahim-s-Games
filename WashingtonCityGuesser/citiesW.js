
var city = ["BELLEVUE","BOTHELL","DUVALL","EDMONDS","KENMORE","KIRKLAND","LAKE FOREST PARK","LYNNWOOD","MONROE","MOUNTLAKE TERRACE","REDMOND","SEATTLE","SHORELINE","TACOMA","WOODINVILLE"];

var num = Math.floor(Math.random() * city.length);


var cityName = city[num];

var tries = 0;


function guessIt()
{
	
    var guess=document.getElementById("guessId1").value;
    tries++;
    document.getElementById("triesMade").innerHTML = "Tries: " + tries;
    
	
switch (tries) {
        case 1:
            document.getElementById("hints").value="First Hint: The city name starts with \'" + cityName.charAt(0) + "\'";
            break;
        case 2:
            document.getElementById("hints").value="Second Hint: The city name ends with \'" + cityName.charAt(cityName.length - 1) + "\'";
            break;
        case 3:
            document.getElementById("hints").value="Last Hint: The city name has " + cityName.length + " characters";
            break;
        default:
            document.getElementById("hints").value="No more hints available! Last chance to guess!";
            break;
    }
   if(guess.toUpperCase() == cityName) 
   {
		if(window.confirm("You are correct!\n\nThe city was " + cityName + ".\n\nDo you want to play again?"))
      	{
			window.location.reload(); 
		}
	}
	else
   {
		if(tries == 5)
		{
			if(window.confirm("Sorry! You have run out of guesses.\n\nThe city was  " + cityName + ".\n\nDo you want to play again?"))
			{
				window.location.reload(); 
				document.form1.hint.value = "Enter a City name below and click Guess button!";
			}
		}
 	}
}


function catchKeyCode() //
{
	if(event.keyCode == 13)
	{
		guessIt();
	}
}



function guessStatus()
{
	<!-- display tries in the form field: "Tries: " + tries; -->
}


function clearBox(){
    document.getElementById("guessId1").value = "";  
}

    function newGame(){
        if(window.confirm("Do you want to start a new game?")){
            location.reload();
            document.getElementById("guessId1").value = "Enter your guess below and click Guess button!";   
        }     
    }