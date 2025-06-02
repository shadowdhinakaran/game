/* let secretNumber = Math.floor(Math.random()*100 )+1;

function checkGuess(){
    const userGuess = Number(document.getElementById("guessInput").value);
    const message = document.getElementById("message");

    if(userGuess === secretNumber ){
        message.textContent = "Correct! You guessed the Number!";
    }else if(userGuess < secretNumber){
        message.textContent ="Too Low!,Try again "
    }else if( userGuess > secretNumber){
        message.textContent = "Too High!, Try again"
    }else{
        message.textContent = "Please enter a valid number"
    }
}

function restartGame(){
    secretNumber = Math.floor(Math.random()*100)+1;

    document.getElementById("message").textContent = "";
    document.getElementById("guessInput").value ="";
}


 */

let secretNumber = Math.floor(Math.random()*100)+1;
function checkGuess(){
    const userGuess = Number(document.getElementById("guessInput").value);
    const message = document.getElementById("message");
    if(userGuess === secretNumber){
        message.textContent ="Congrates you guessed the number"
    }else if(userGuess<secretNumber){
        message.textContent ="too low,try again"
    }else if(userGuess >secretNumber){
        message.textContent ="too high try again"
    }else {
        message.textContent ="please enter a valid number"
    }
}

function restartGame(){
    secretNumber = Math.floor(Math.random()*100)+1;
    document.getElementById("message").textContent ="";
    document.getElementById("guessInput").value ="";
}