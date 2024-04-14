const cards = document.querySelectorAll(".cards");
const cardOne = document.querySelector(".card1");
const cardTwo = document.querySelector(".card2");
const cardThere = document.querySelector(".card3");
const num = document.querySelector(".not-read");
const mark = document.querySelector(".mark");
const redDot = document.querySelectorAll(".red-dot");
let unReaden = 0;

function checkBg() {
  if (
    cardOne.classList.contains("uncheck") &&
    cardTwo.classList.contains("uncheck") &&
    cardThere.classList.contains("uncheck")
  ) {
    unReaden = 3;
    num.textContent = unReaden;
  }
}

checkBg();

function allchecked() {
  setTimeout(() => {
    cards.forEach((card) => {
      card.classList.add("check");
    });
  }, 150);

  setTimeout(() => {
    redDot.forEach((dot) => {
      dot.classList.add("check");
    });
  }, 150);

  setTimeout(() => {
    unReaden = 0;

    num.textContent = unReaden;
  }, 150);
}

mark.addEventListener("click", allchecked);

cards.forEach((card, dot) => {
  card.addEventListener("click", () => {
    if (!card.classList.contains("check")) {
      card.classList.add("check");
      redDot[dot].classList.add("check");
      unReaden = unReaden - 1;
      num.textContent = unReaden;
    }
  });
});
