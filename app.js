const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("player_score");
const computerScore_span = document.getElementById("computer_score");
const scores_div = document.querySelector(".scores");
const result_div = document.querySelector(".result");
const gunting_div = document.getElementById("gunting");
const batu_div = document.getElementById("batu");
const kertas_div = document.getElementById("kertas");

function getComputerChoice() {
  const choices = ["gunting", "batu", "kertas"]; //array bukan fungsi
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber]; //choices punya 3 array, random number juga punya 3
}

function game(userChoice) {
  const computer_Choice = getComputerChoice();
  switch (userChoice + computer_Choice) {
    case "batugunting":
    case "guntingkertas":
    case "kertasbatu":
      console.log("Ente Menang!!");
      break;
    case "guntingbatu":
    case "kertasgunting":
    case "batukertas":
      console.log("Komputer menang!!");
      break;
    case "guntinggunting":
    case "kertaskertas":
    case "batubatu":
      console.log("SERI!!");
      break;
  }
}

function main() {
  gunting_div.addEventListener("click", function () {
    game("gunting");
  });
  batu_div.addEventListener("click", function () {
    game("batu");
  });
  kertas_div.addEventListener("click", function () {
    game("kertas");
  });
}
main();
