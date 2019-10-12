let score = 0;
let losses = 0;
let guessesRemainig = 12;

let animals = ['lion', 'zebra', 'owl']



function updateScore() {
   var update = document.getElementById("wins");
    update.textContent = "Score: " + score;
};

let current = animals[0]

let guessed = 'o'


function updateAnimal() {
    var update = document.getElementById("wins");
    placeHolder = "_".repeat(current.length)
    update.textContent = "Animal: " + placeHolder;
    if (current.indexOf(guessed)!==-1) {
        temp = placeHolder.split("");
        temp[current.indexOf(guessed)] = guessed;
        placeHolder = temp.join("");
    }
    update.textContent = "Animal: " + placeHolder;
 };


 

updateScore();
updateAnimal();