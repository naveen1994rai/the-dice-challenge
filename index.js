function rollDice() {
  var randomNumber1 = Math.ceil(Math.random() * 5 + 1);
  var randomNumber2 = Math.ceil(Math.random() * 5 + 1);

  var dice1 = document.querySelector(".dice1");
  var dice2 = document.querySelector(".dice2");
  var heading = document.querySelector("h1");

  dice1.src = "images/dice" + randomNumber1 + ".png";
  dice2.src = "images/dice" + randomNumber2 + ".png";

  if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "Player 1 Wins !!";
  } else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = "Palyer 2 Wins !!";
  } else {
    heading.innerHTML = "It's a Draw !!";
  }
}
