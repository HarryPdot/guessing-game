//tag selectors
var allGuessBtn = document.querySelectorAll("section > button")
var resetBtn = document.querySelector(".resetB")
var counterText = document.querySelector(".guess-count")
var winText = document.querySelector(".winning")
 
let guesses = 0
let counter = 5
var randomNumber = Math.floor(Math.random() * 10)
let secretNum = randomNumber

//functions
function handleGuess(event) {
    var guessBtnTargeted = event.target

    // console.log("targeted", event.target)
    guessBtnTargeted.disabled = true
    let userGuess = guessBtnTargeted.dataset.number
    console.log("userGuess", userGuess)

    //counting your attempts
    counter = counter - 1
    guesses = guesses + 1
    counterText.textContent = counter
    if(counter === 0){
        winText.textContent = "you failed !! you used all your attempts"
        for (let i=0; i<allGuessBtn.length ; i++) {
            allGuessBtn[i].disabled = true;
        }
    }


    //when you win
    if (guessBtnTargeted === allGuessBtn[secretNum]) {
        winText.textContent = "nice!! that took " + guesses + " tries"

    //guessing the right answer will disable all the buttons
        for (let i=0; i<allGuessBtn.length ; i++) {
            allGuessBtn[i].disabled = true;
        }
    }

}

function handleReset() {
    for(let i=0; i < allGuessBtn.length ; i++) {
        if(allGuessBtn[i].disabled === true) {
        allGuessBtn[i].disabled = false
        }
    }
    //factory resetting
    console.log("reset button")
    counter = 5
    counterText.textContent = 5
    guesses = 0
    winText.textContent = ""
    //reisssuing another number
    secretNum = Math.floor(Math.random() * 10)
}




//call back

// for(let i=0; i < allGuessBtn.length; i++){
//     var guessBtn = allGuessBtn[i];
//     guessBtn.addEventListener("click", handleDisable);
// }

allGuessBtn.forEach(function(btn){
    btn.addEventListener("click", handleGuess)
})


resetBtn.addEventListener("click", handleReset)