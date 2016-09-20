var answer = new Array(10);
var guessTime = 5;
var givenAnswer;
window.onload = function(){
		var jawaban = Math.round((Math.random()*10)+1);
function randomNumber()
{
	document.getElementById("banyaknyaTebakan").innerHTML = guessTime;
	document.getElementById("submitHasil").onclick = function(){
		if(guessTime > 0){
	var guessNumber = document.getElementById("inputTebakan").value;
	if(guessNumber == jawaban){
		document.getElementById("resultHasil").innerHTML = "Congratz";
    document.getElementById("katakunci").innerHTML=""
    guessTime=0;
	}else if(guessNumber != jawaban)
	{
		if(guessNumber > jawaban){
			document.getElementById("katakunci").innerHTML = "tebakan lebih besar dari angka jawaban !";
		}else if(guessNumber < jawaban)
		{
			document.getElementById("katakunci").innerHTML = "tebakan lebih kecil dari angka jawaban !";
		}
		document.getElementById("resultHasil").innerHTML = "try again!";
		guessTime--;
		document.getElementById("banyaknyaTebakan").innerHTML = guessTime;
		if(guessTime == 0)
		{
			document.getElementById("resultHasil").innerHTML = "Game Over";
		}

	}
		}
	}

}
randomNumber();
}
