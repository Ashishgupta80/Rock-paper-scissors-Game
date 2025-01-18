      let score = JSON.parse(localStorage.getItem('score')) || {
          wins:0,
          losses:0,
          ties:0
      };

      updateScoreElement();

    // if (!score) {// !score == score===null
    //   score = {
    //       wins:0,
    //       losses:0,
    //       ties:0
    //   };
    // } ;

      function playGame(playerMove) { 

        const computerMove = pickComputerMove(); 

        let result = "";
        console.log(result);

        if (playerMove === "scissors") {
          if (computerMove === "rock") {
            result = "You lose.";
          } else if (computerMove === "paper") {
            result = "You win.";
          } else if (computerMove === "scissors") {
            result = "Tie.";
          }
        } else if (playerMove === "paper") {
          if (computerMove === "rock") {
            result = "You win.";
          } else if (computerMove === "paper") {
            result = "Tie.";
          } else if (computerMove === "scissors") {
            result = "You lose.";
          }
        } else if (playerMove === "rock") {
          if (computerMove === "rock") {
            result = "Tie.";
          } else if (computerMove === "paper") {
            result = "You lose.";
          } else if (computerMove === "scissors") {
            result = "You win.";
          }

        }
      
        if (result === "You win.") {
          score.wins += 1;
        } else if (result === "You lose.") {
          score.losses += 1;
        } else if (result === "Tie.") {
          score.ties += 1;
        }

      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement ();

      document.querySelector('.js-showResult').innerHTML = result;

      document.querySelector('.js-move').innerHTML = ` You
      <img class="rock-icon" src="./Images/${playerMove}-emoji.png" alt="rock">
      <img class="paper-icon" src="./Images/${computerMove}-emoji.png" alt="paper">
      Computer`;

//         alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// Wins: ${score.wins} , Losses: ${score.losses} , Ties: ${score.ties}
//         `);
      };

      function updateScoreElement(){
        document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} , Losses: ${score.losses} , Ties: ${score.ties}`;
      };

      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = ""; //peper

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = "rock";
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = "paper";
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = "scissors";
        }
        return computerMove; //paper
      }

      // it will get the value out of the function. we can also return any calculation 2+2, variable and just like return Math.random();
      // it also know is Returing a value from a function.
      //return; // return undefined;
      // when we use a return statement it ends the functions immediately.
      // console.log("After"); // it is not run the code because of not run after the return statment.



      /* score=null
      !score  => true
      score === null => true

      score = {wins:0,losses:0....}
      !score => false
      score === null => false



      null vs undefinded
      null = itentionally want somthing to be empty.
      
      function func(num = "ten"){
      console.log(num);
      };

      func(); // output: ten  (Taking default value)
      func(undefined); //output: ten  (In undefined taking default value)
      func(null);  output: null    (But in nill it taking null due to we wan t intentionally null)

      Note-: In most cases null and undefined work as a same.



      

      */