//-------------------------------------------------------------------------------------------------------------------------

const boxes = document.querySelectorAll(".box"); //array of all the divs with a class of .box
const choice = document.querySelectorAll(".choose"); //array of the divs with a letter to choose from
const row = document.querySelector(".reset-row"); //array of the divs with class row
let reset; //place holder variable for reset button
console.log(boxes);

let letter;
let letterAI; //vars for the letter the player chooses and for the ai
let letterChosen = false; //flag that checks if a letter is set to start filling grid
let gameReady = true; //flag that indicates that game is playable;
let grid = [0, 0, 0, 0, 0, 0, 0, 0, 0]; //array of the moves the players make

//-------------------------------------------------------------------------------------------------------------------------

function onClick() { //function for filling grid
  let i = 0; //var for increments in forEach in fn onClick
  if (letterChosen && gameReady) {
    boxes.forEach(box => {
      if (this === box && grid[i] === 0) { //checks what div was clicked and checks if it hasnt been filled
        grid[i] = letter;
        console.log("in " + i + " tehe", grid);
        boxes[i].innerHTML = `<span class=${letter}>${letter}</span>`;
        checkWin(); //runs check to see if player won
        ai();  //runs ai move of the player has not won
      }
      i++;
    });
    i = 0;
    /* //old method for filling grid
    if(this === boxes[0] && grid[0] === 0){
      grid[0] = letter;
      console.log("in 0 tehe", grid);
    }else if(this === boxes[1] && grid[1] === 0){
      grid[1] = letter;
      console.log("in 1 tehe", grid);
    }else if(this === boxes[2] && grid[2] === 0){
      grid[2] = letter;
      console.log("in 2 tehe", grid);
    }else if(this === boxes[3] && grid[3] === 0){
      grid[3] = letter;
      console.log("in 3 tehe", grid);
    }else if(this === boxes[4] && grid[4] === 0){
      grid[4] = letter;
      console.log("in 4 tehe", grid);
    }else if(this === boxes[5] && grid[5] === 0){
      grid[5] = letter;
      console.log("in 5 tehe", grid);
    }else if(this === boxes[6] && grid[6] === 0){
      grid[6] = letter;
      console.log("in 6 tehe", grid);
    }else if(this === boxes[7] && grid[7] === 0){
      grid[7] = letter;
      console.log("in 7 tehe", grid);
    }else if(this === boxes[8] && grid[8] === 0){
      grid[8] = letter;
      console.log("in 8 tehe", grid);
    }else if(this === boxes[9] && grid[9] === 0){
      grid[9] = letter;
      console.log("in 9 tehe", grid);
    } */
  }
}

function setLetter() { //fn. to check what letter was chosen, then sets the letterChosen to true and sets the letter for the AI
  if (!letterChosen) {
    if (this === choice[0]) {
      letter = "X";
      letterAI = "O";
      letterChosen = !letterChosen;
      console.log(letter);
    } else if (this === choice[1]) {
      letter = "O";
      letterAI = "X";
      letterChosen = !letterChosen;
      console.log(letter);
    }
  }
}

function checkWin() { //fn to check if someone has won
  [letter, letterAI].forEach(x => {
    //checks if someone won
    if (grid[0] === x && grid[1] === x && grid[2] === x) { //horizontal
      console.log(x + " Wins!");
      row.innerHTML = "<div class='R-box'>RESET</div>";
      reset = document.querySelector(".R-box");
      gameReady = false; //flag to indicate game is over
      reset.addEventListener("click", resetGame); //resets the game
    } else if (grid[3] === x && grid[4] === x && grid[5] === x) { //horizontal
      console.log(x + " Wins!");
      row.innerHTML = "<div class='R-box'>RESET</div>";
      reset = document.querySelector(".R-box");
      gameReady = false;
      reset.addEventListener("click", resetGame); //resets the game
    } else if (grid[6] === x && grid[7] === x && grid[8] === x) { //horizontal
      console.log(x + " Wins!");
      row.innerHTML = "<div class='R-box'>RESET</div>";
      reset = document.querySelector(".R-box");
      gameReady = false;
      reset.addEventListener("click", resetGame); //resets the game
    } else if (grid[0] === x && grid[3] === x && grid[6] === x) { //vertical
      console.log(x + " Wins!");
      row.innerHTML = "<div class='R-box'>RESET</div>";
      reset = document.querySelector(".R-box");
      gameReady = false;
      reset.addEventListener("click", resetGame); //resets the game
    } else if (grid[1] === x && grid[4] === x && grid[7] === x) { //vertical
      console.log(x + " Wins!");
      row.innerHTML = "<div class='R-box'>RESET</div>";
      reset = document.querySelector(".R-box");
      gameReady = false;
      reset.addEventListener("click", resetGame); //resets the game
    } else if (grid[2] === x && grid[5] === x && grid[8] === x) { //vertical
      console.log(x + " Wins!");
      row.innerHTML = "<div class='R-box'>RESET</div>";
      reset = document.querySelector(".R-box");
      gameReady = false;
      reset.addEventListener("click", resetGame); //resets the game
    } else if (grid[0] === x && grid[4] === x && grid[8] === x) { //diagonal
      console.log(x + " Wins!");
      row.innerHTML = "<div class='R-box'>RESET</div>";
      reset = document.querySelector(".R-box");
      gameReady = false;
      reset.addEventListener("click", resetGame); //resets the game
    } else if (grid[2] === x && grid[4] === x && grid[6] === x) {  //diagonal
      console.log(x + " Wins!");
      row.innerHTML = "<div class='R-box'>RESET</div>";
      reset = document.querySelector(".R-box");
      gameReady = false;
      reset.addEventListener("click", resetGame); //resets the game
    }
  });
}

function ai() { //fn for ai player
  if (gameReady === true) { //checks to see if game is still running
    for (var j = 0; j < grid.length; j++) { //checks where a zero is to fill (temporary shitty ai)
      if (grid[j] === 0) {
        grid[j] = letterAI;
        boxes[j].innerHTML = `<span class=${letterAI}>${letterAI}</span>`;
        checkWin();
        break;
      }
    }
    /* //old method
    if (grid[0] === 0) {
      grid[0] = letterAI;
      boxes[0].innerHTML = `<span class=${letterAI}>${letterAI}</span>`;
      checkWin();
    } else if (grid[1] === 0) {
      grid[1] = letterAI;
      boxes[1].innerHTML = `<span class=${letterAI}>${letterAI}</span>`;
      checkWin();
    } else if (grid[2] === 0) {
      grid[2] = letterAI;
      boxes[2].innerHTML = `<span class=${letterAI}>${letterAI}</span>`;
      checkWin();
    } else if (grid[3] === 0) {
      grid[3] = letterAI;
      boxes[3].innerHTML = `<span class=${letterAI}>${letterAI}</span>`;
      checkWin();
    } else if (grid[4] === 0) {
      grid[4] = letterAI;
      boxes[4].innerHTML = `<span class=${letterAI}>${letterAI}</span>`;
      checkWin();
    } else if (grid[5] === 0) {
      grid[5] = letterAI;
      boxes[5].innerHTML = `<span class=${letterAI}>${letterAI}</span>`;
      checkWin();
    } else if (grid[6] === 0) {
      grid[6] = letterAI;
      boxes[6].innerHTML = `<span class=${letterAI}>${letterAI}</span>`;
      checkWin();
    } else if (grid[7] === 0) {
      grid[7] = letterAI;
      boxes[7].innerHTML = `<span class=${letterAI}>${letterAI}</span>`;
      checkWin();
    } else if (grid[8] === 0) {
      grid[8] = letterAI;
      boxes[8].innerHTML = `<span class=${letterAI}>${letterAI}</span>`;
      checkWin();
    } */
  }
}

function resetGame(){ //function to reset game
  letterChosen = false; //flag that checks if a letter is set to start filling grid
  gameReady = true; //flag that indicates that game is playable;
  grid = [0, 0, 0, 0, 0, 0, 0, 0, 0]; //array of the moves the players make
  for (var j = 0; j < grid.length; j++) { //resets grid visuals
    boxes[j].innerHTML = "";
  }
  row.innerHTML = ""; //removes reset button
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

choice.forEach(choose => choose.addEventListener("click", setLetter)); //sets an event listener to each of the divs on the grid
boxes.forEach(box => box.addEventListener("click", onClick)); //sets an event listener to the letters
