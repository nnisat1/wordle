var height = 6;
var width = 5;

let row = 0;

//look into input tags for setting the max length
//<input type="text" maxLength = 5 id="user-guess"/> in html
//find a way to store the guess



let gameOver= false;

const letters = document.querySelectorAll(".scoreboard-tile");

let currentLetterIndex = 0
let guess = "";
const wordUrl = "https://words.dev-apis.com/word-of-the-day"
let targetWord= ""

async function getWordOfTheDay() {
    const word = await fetch(wordUrl)
    const response = await fetch(wordUrl);
    const data = await response.json();
    targetWord = data.word.toUpperCase();
    console.log( await word.json())
    console.log(targetWord)
}

getWordOfTheDay()

async function save () {
    
    if (guess.length !== width) return;

    if ( guess.toUpperCase() === targetWord.toUpperCase()) {
        gameOver=true;
        alert("Correct! 🎉");
            return; 

    }
    if ( row === height-1 ) {
        gameOver = true;
        alert(`GameOver, the word was ${targetWord}`);
        return;
    
    }
     row ++
     guess = ""
     currentLetterIndex = 0
    
    
}

document.addEventListener ("keydown",handleKeyDown)


function handleKeyDown(event) {
    if (gameOver === true) return;

    // Calculate starting index for current row
    let rowStartIndex = row * width;

    if (event.key === "Backspace") {
        if (guess.length > 0) {
            // Remove last letter from guess
            guess = guess.slice(0, -1);
            currentLetterIndex--;
            letters.item(rowStartIndex + currentLetterIndex).innerText = "";
        }
    } else if (/^[a-zA-Z]$/.test(event.key)) {
        if (guess.length < width) {
            // Add letter to guess
            letters.item(rowStartIndex + currentLetterIndex).innerText = event.key.toUpperCase();
            guess += event.key.toUpperCase();
            currentLetterIndex++;
        }
    } else if (event.key === "Enter") {
        if (guess.length === width) {
            save(); // Validate guess
            guess = "";
            currentLetterIndex = 0; // Reset for next row
        } else {
            save()
        }
        }

    
    }


