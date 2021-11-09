var score = document.querySelector(".result");
const buttonRules = document.querySelector(".brules");
const modcontent = document.querySelector(".modal-content");
const modal = document.querySelector(".modal");
const closeW = document.querySelector(".exit-rules svg");
const hCircle = document.querySelectorAll(".circle");
var game = document.querySelector(".game");
var gameTable = document.querySelector(".game-table");
const winner = document.querySelector(".center");
const winRes = document.querySelector(".winner");
var result = 0;

buttonRules.addEventListener("click", () => {
  modcontent.style.display = "flex";
  game.style.zIndex = "0";
  gameTable.style.zIndex = "0";
  modal.classList.add("darken");
  hCircle.forEach((x) => {
    x.style.zIndex = "-1";
  });
});

closeW.addEventListener("click", () => {
  modcontent.style.display = "none";
  modal.classList.remove("darken");
  game.style.zIndex = "1";
  gameTable.style.zIndex = "1";
  hCircle.forEach((x) => {
    x.style.zIndex = "1";
  });
});

var compare = function (choice1, choice2) {
  if (choice1 === choice2) {
    return (winner.innerHTML = ` draw <button class="play-button">play again</button>`);
  }
  if (choice1 === "rock") {
    if (choice2 === "scissors") {
      return (
        (winner.innerHTML = ` you win <button class="play-button">play again</button>`),
        (score.innerText = result += 1)
      );
    } else {
      return (
        (winner.innerHTML = ` you lose <button class="play-button">play again</button>`),
        (score.innerText = result -= 1)
      );
    }
  }
  if (choice1 === "paper") {
    if (choice2 === "rock") {
      return (
        (winner.innerHTML = ` you win <button class="play-button">play again</button>`),
        (score.innerText = result += 1)
      );
    } else {
      if (choice2 === "scissors") {
        return (
          (winner.innerHTML = ` you lose <button class="play-button">play again</button>`),
          (score.innerText = result -= 1)
        );
      }
    }
  }
  if (choice1 === "scissors") {
    if (choice2 === "rock") {
      return (
        (winner.innerHTML = ` you lose <button class="play-button">play again</button>`),
        (score.innerText = result -= 1)
      );
    } else {
      if (choice2 === "paper") {
        return (
          (winner.innerHTML = ` you win <button class="play-button">play again</button>`),
          (score.innerText = result += 1)
        );
      }
    }
  }
};
game.addEventListener("click", (e) => {
  const CN = e.target.className.split("-")[2];
  game.classList.add("hide");
  gameTable.classList.remove("hide");
  document.querySelector(
    ".rps-pick"
  ).innerHTML = ` <div class="game-circle-${CN} circle picked position">
    <div class="hover-circle-${CN}"></div>
    <div class="winner-hover">
    <div class="circle-hover-first">
      <div class="circle-hover-second"></div>
    </div>
  </div>
    <div class="${CN}-image image">
      <img src="./images/icon-${CN}.svg" alt="" />
    </div>
  </div>`;

  var randomPick = ["scissors", "rock", "paper"];
  var randomItem = randomPick[Math.floor(Math.random() * randomPick.length)];

  document.querySelector(
    ".pick-random"
  ).innerHTML = `<div class="game-circle-${randomItem} circle picked position">
  <div class="hover-circle-${randomItem}"></div>
  <div class="house-hover">
  <div class="circle-hover-first">
      <div class="circle-hover-second"></div>
    </div></div>
  <div class="${randomItem}-image image">
    <img src="./images/icon-${randomItem}.svg" alt="" />
  </div>
</div>`;
  var whover = document.querySelector(".winner-hover");
  var hhover = document.querySelector(".house-hover");

  compare(CN, randomItem);

  var againButton = document.querySelector(".play-button");
  againButton.addEventListener("click", () => {
    game.classList.remove("hide");
    game.classList.add("showB");
    gameTable.classList.add("hide");
  });

  var final = winner.innerText;
  if (final.includes("LOSE")) {
    hhover.style.display = "block";
  }
  if (final.includes("WIN")) {
    whover.style.display = "block";
  }
});
