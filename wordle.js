var height = 5;
var width = 6;

var row=0;
var col=0;

var gameOver= false;
var word = "SQUID";

const letters = document.querySelectorAll(".scoreboard-tile")
let currentLetterIndex = 0

const wordUrl = "https://words.dev-apis.com/word-of-the-day"

async function getWordOfTheDay() {
    const word = await fetch(wordUrl)
    console.log( await word.json())
}

getWordOfTheDay()

document.addEventListener ("keydown",handleKeyDown)

function handleKeyDown(event) {
   
    if (event.key == "Backspace") {
        if (currentLetterIndex>0 && letters.item(currentLetterIndex).innerText == ""){
            currentLetterIndex --
        }
        letters.item(currentLetterIndex).innerText = ""
        
    } else if ( currentLetterIndex==4 && letters.item(currentLetterIndex).innerText != "") {
        return
    } else {
        letters.item(currentLetterIndex).innerText = event.key
        if (currentLetterIndex <4 ){
            currentLetterIndex ++
        }
    }
}





