let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("player_score");
const computerScore_span = document.getElementById("computer_score");
const scores_div = document.querySelector(".scores");
const result_p = document.querySelector(".result > p");
const gunting_div = document.getElementById("gunting");
const batu_div = document.getElementById("batu");
const kertas_div = document.getElementById("kertas");
const action_p = document.querySelector(".action-text > p");

function getComputerChoice() {
  //FUNGSI UNTUK BIKIN CHOICES COMPUTER
  const choices = ["gunting", "batu", "kertas"]; //array bukan fungsi
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber]; //choices punya 3 array, random number juga punya 3
}

function convertToWord(letter) {
  //konversi kata ke huruf lebih besar, cuman ganti huruf depan doang buat belajar
  if (letter === "gunting") return "Gunting";
  if (letter === "batu") return "Batu";
  return "Kertas";
}

function convertFontColor() {}

function win(user, computer) {
  //fungsi-fungsi untuk nampilin hasil pemenang tiap sesi dan update skor
  userScore++;
  const userChoices_div = document.getElementById(user);
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${convertToWord(user)}
    mengalahkan
    ${convertToWord(computer)}
    Hore Menang!!`;
  userChoices_div.classList.add("green-glow");
  result_p.classList.add("green-font");
  setTimeout(() => {
    //Contoh pake function arrow function() jadi ()=>
    userChoices_div.classList.remove("green-glow");
    result_p.classList.remove("green-font");
  }, 300);
  if (userScore >= 5 || computerScore >= 5) {
    reset();
  }
}

function lose(user, computer) {
  computerScore++;
  const userChoices_div = document.getElementById(user);
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(user)} 
     dikalahkan oleh  
    ${convertToWord(computer)} 
     Yah Kalah!!`;

  userChoices_div.classList.add("red-glow");
  result_p.classList.add("red-font");
  setTimeout(function () {
    //Contoh default function
    userChoices_div.classList.remove("red-glow");
    result_p.classList.remove("red-font");
  }, 300);
  if (userScore >= 5 || computerScore >= 5) {
    reset();
  }
}
function draw(user, computer) {
  const userChoices_div = document.getElementById(user);
  result_p.innerHTML = "--DRAW--";
  userChoices_div.classList.add("yellow-glow");
  result_p.classList.add("yellow-font");
  setTimeout(() => {
    userChoices_div.classList.remove("yellow-glow");
    result_p.classList.remove("yellow-font");
  }, 300);
}

function reset() {
  //Apabila total skor player / computer sudah mencapai 5 points
  action_p.innerHTML = "Game Berakhir";
  setTimeout(() => {
    stop();
  }, 3500);
}

function game(userChoice) {
  //FUNGSI untuk nentuin siapa yg menang antara user dengan computer
  const computer_Choice = getComputerChoice();
  switch (userChoice + computer_Choice) {
    case "batugunting":
    case "guntingkertas":
    case "kertasbatu":
      win(userChoice, computer_Choice);
      /* fungsi userChoice dan computer_Choice untuk di pass ke function win/lose/draw 
    yg nanti ditampilin di setiap sesi di result_p*/
      break;
    case "guntingbatu":
    case "kertasgunting":
    case "batukertas":
      lose(userChoice, computer_Choice);
      break;
    case "guntinggunting":
    case "kertaskertas":
    case "batubatu":
      draw(userChoice, computer_Choice);
      break;
  }
}
function main() {
  //fungsi untuk nentuin pilihan pelayer berdasarkan klik, dan game("") akan di pass jad userChoice
  gunting_div.addEventListener("click", () => {
    game("gunting");
  });
  batu_div.addEventListener("click", () => {
    game("batu");
  });
  kertas_div.addEventListener("click", () => game("kertas")); //Contoh oneliner tanpa curlybraces
}

main();
function stop() {
  location.reload();
}

// if (userScore_span.textContent=5){
//   action_p.innerHTML("HORE MENANG");
//   }
