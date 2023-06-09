/*------------------------ constants -------------------------*/
const suits = ["hearts", "spades", "clubs", "diamonds"];
const values = ["A","K","Q","J","10","9","8","7","6","5","4","3","2"];
/*--------------------- state variables ----------------------*/
let winner;
let board;
let card;
let mazo;
let randCard;
let dealerScore;
let playerScore;

/*---------------------- cached elements ------------------------*/
const dealersCards = document.getElementById("dealersCards");
const playersCards = document.getElementById("playersCards");
const playNowBtn = document.getElementById("playNowButton");
const hitBtn = document.getElementById("hitButton");
const stayBtn = document.getElementById("stayButton");
const dealersCount = document.getElementById("dealersCounter");
const playersCount = document.getElementById("playersCounter");
const winnerMessage = document.querySelector("h3");
const dealtMoney = document.querySelector("p");

/*--------------------- event listeners --------------------------*/
playNowBtn.addEventListener("click", bet);
hitBtn.addEventListener("click", renderPlayerChoice);
stayBtn.addEventListener("click", renderDealersChoice, initialize);
/*--------------------- functions -----------------------------*/
let betAmount;
function bet() {
  betAmount = prompt("Please place your bet", "0");
  if (betAmount != null) {
    document.getElementById("bet").innerHTML = "$" + betAmount;
  }
  setTimeout(() => {
    initialize();
  }, 1000);
}


card = {}
// Every time his function is called, It will generate a card deck matching the values of
// my suits and values constants, as well as their respective numerical value and image using
// concatenating.
function createCardDeck(cardSuits, cardValues) {
  let cards = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      if (values[j] === "A") {
        card = {
          cardName: suits[i] + "-" + values[j],
          numValue: 11,
          img: "card-deck/images/" + suits[i] + "-" + values[j] + ".svg",
        };
      } else if (values[j] === "K" || values[j] === "Q" || values[j] === "J") {
        card = {
          cardName: suits[i] + "-" + values[j],
          numValue: 10,
          img: "card-deck/images/" + suits[i] + "-" + values[j] + ".svg",
        };
      } else if (values[j] === "10") {
        card = {
          cardName: suits[i] + "-" + values[j],
          numValue: Number(values[j]),
          img: "card-deck/images/" + suits[i] + "-r" + values[j] + ".svg",
        };
      } else {
        card = {
          cardName: suits[i] + "-" + values[j],
          numValue: Number(values[j]),
          img: "card-deck/images/" + suits[i] + "-r0" + values[j] + ".svg",
        };
      }
      cards.push(card);
    }
  }

  return cards;
}
mazo = createCardDeck(suits, values);

//  the next three functions respectively generate a random card, its respective numeric value, and its image.
let randCardImg;
let randCardValue;
function shuffleDeck(cardDeck) {
  randCard = Math.floor(Math.random() * cardDeck.length);
  return cardDeck[randCard];
}

function obtainCardValue(cardDeck) {
  randCardValue = randCard;
  return cardDeck[randCard].numValue;
}

function obtainCardImg(cardDeck) {
  randCardImg = randCard;
  return cardDeck[randCard].img;
}

// This function resets the board to be ready to play
let addCardImageDealerX;
function initialize() {
  //These arrays are meant for support to indicate the occupied slots with a 1, and the empty one with a 0
  //             0  1  2  3  4  
  boardPlayer = [0, 0, 0, 0, 0]; // after first iteration, index 0 has a value of 1
  boardDealer = [0, 0, 0, 0, 0]; //after first iteration index 0 has a value of 1
  playerScore = 0;
  dealerScore = 0;
  for (let i = 0; i < 2; i++) {

    // this renders the board for the player
    const addCardImagePlayer = document.createElement("img");
    shuffleDeck(mazo); //here I am getting a random card
    addCardImagePlayer.setAttribute("src", obtainCardImg(mazo));
    addCardImagePlayer.style.backgroundColor = "white";
    playersCards.children[i].appendChild(addCardImagePlayer); //Here I append two cards to the players board
    boardPlayer[i] = 1; // Here I indicate it's occupied placing a one in position boardPlayer[i]
    playerScore = playerScore + obtainCardValue(mazo);


    // this renders the board for the dealer
    if (i === 1) { // here I verify if i is in on 1
      // and here I save the card image that I will enventually flip and we save it in addCardImageDealerX
      addCardImageDealerX = document.createElement("img");
      shuffleDeck(mazo); // here I find a shuffled card from the deck
      addCardImageDealerX.setAttribute("src", obtainCardImg(mazo));
      addCardImageDealerX.style.backgroundColor = "white";

      
      // here I create the backside card and show it in the DOM
      const addCardDealerUpsideDown = document.createElement("img");
      addCardDealerUpsideDown.setAttribute("src", "card-deck/images/red.svg");
      addCardDealerUpsideDown.style.backgroundColor = "white";
      dealersCards.children[i].appendChild(addCardDealerUpsideDown);
      boardDealer[i] = 1; // Here I indicate it's occupied placing a one in position boardPlayer[i]
      dealerScore = dealerScore + obtainCardValue(mazo);
      // here I update the players score on the screen but not the dealer's score.
      playersCount.innerText = `${playerScore}`;
    } else {
      const addCardImageDealer = document.createElement("img");
      shuffleDeck(mazo); // here I find a shuffled card from the deck
      addCardImageDealer.setAttribute("src", obtainCardImg(mazo));
      addCardImageDealer.style.backgroundColor = "white";
      dealersCards.children[i].appendChild(addCardImageDealer); 
      boardDealer[i] = 1; // Here I indicate it's occupied placing a one in position boardPlayer[i]
      dealerScore = dealerScore + obtainCardValue(mazo);
      dealersCount.innerText = `${dealerScore}`; //Here I display in the DOM the score of the dealer 
      playersCount.innerText = `${playerScore}`; //Here I display in the DOM the score of the player
      if (dealerScore > 21 || playerScore > 21) {
        return;
      }
    }
  }
  winner = null;
  checkForBlackJackDealer();
  checkForBlackJackPlayer();
  checkForTie();
}


function renderPlayerChoice() {
  const addCardImagePlayer = document.createElement("img");
  shuffleDeck(mazo);
  addCardImagePlayer.setAttribute("src", obtainCardImg(mazo));
  addCardImagePlayer.style.backgroundColor = "white";
  let index = boardPlayer.indexOf(0); // Here I obtain the index of the array where it finds the first 0
  playersCards.children[index].appendChild(addCardImagePlayer); // Here I create the image of the index with the first 0 that I found in board player.
  boardPlayer[index] = 1;
  playerScore = playerScore + obtainCardValue(mazo);
  playersCount.innerText = `${playerScore}`;
  // here I check for winning conditions for the player //
  if (playerScore > 21) {
    setTimeout(cleanBoard, 4000);
    winnerMessage.innerText =
      "House won, give me your money! The house earned" + " " + betAmount * 2;
    betAmount = 0;
    document.getElementById("bet").innerHTML = "$" + betAmount ;
    return;
  } else if (playerScore === 21) {
    setTimeout(cleanBoard, 4000);
    winnerMessage.innerText = "Fine, you win this time. Take your money, you've earned" + " " + betAmount * 2;
    betAmount = 0;
    document.getElementById("bet").innerHTML = "$" + betAmount ;
  } else {
    return;
  }
}

function renderDealersChoice() {
  dealersCards.children[1].innerHTML = ""; // here i removed my upsidedown card
  dealersCards.children[1].appendChild(addCardImageDealerX); // here I added the card that I saved earlier and added to the dom.
  dealersCount.innerText = `${dealerScore}`; // Here I update the dealers counter in the dom
  if (dealerScore >= 17) {
    checkForWinner();
    return;
  } else {
    setTimeout(renderDealersChoice, 3000);
    const addCardImageDealer = document.createElement("img");
    shuffleDeck(mazo);
    addCardImageDealer.setAttribute("src", obtainCardImg(mazo));
    addCardImageDealer.style.backgroundColor = "white";
    let index = boardDealer.indexOf(0);
    dealersCards.children[index].appendChild(addCardImageDealer);
    boardDealer[index] = 1;
    dealerScore = dealerScore + obtainCardValue(mazo);
    dealersCount.innerText = `${dealerScore}`;
  }
}
// this checking for winning conditions
function checkForWinner() {
  if (dealerScore < 21 && dealerScore > playerScore) {
    setTimeout(cleanBoard, 5000);
    winnerMessage.innerText =
      "House won, give me your money! The house earned" + " " + betAmount * 2;
    betAmount = 0;
    document.getElementById("bet").innerHTML = "$" + betAmount ;
    return;
  } else if (dealerScore > 21 || dealerScore < playerScore) {
    setTimeout(cleanBoard, 5000);
    winnerMessage.innerText =
      "Fine, you win this time. Take your money, you've earned" + " " + betAmount * 2;
    betAmount = 0;
    document.getElementById("bet").innerHTML = "$" + betAmount ;
    return;
  } else if (dealerScore === playerScore) {
    setTimeout(cleanBoard, 5000);
    winnerMessage.innerText = "Push!";
    return;
  } else if (dealerScore === 21) {
    setTimeout(cleanBoard, 5000);
    winnerMessage.innerText =
      "House won, give me your money! The house earned" + " " + betAmount * 2;
    betAmount = 0;
    document.getElementById("bet").innerHTML = "$" + betAmount;
  } else {
    setTimeout(cleanBoard, 5000);
    return;
  }
}

////////These are the winning condition functions
function checkForTie() {
  if (dealerScore === playerScore) {
    setTimeout(cleanBoard, 5000);
    winnerMessage.innerText = "Push!";
  } else {
    return;
  }
}

function checkForBlackJackDealer() {
  if (dealerScore === 21) {
    dealersCards.children[index].appendChild(addCardImageDealer);
    setTimeout(cleanBoard, 5000);
    winnerMessage.innerText =
      "It is a BlackJack! I win. I have earned" + " " + betAmount * 2.5;
    betAmount = 0;
    document.getElementById("bet").innerHTML = "$" + betAmount ;
  }
}

function checkForBlackJackPlayer() {
  if (playerScore === 21) {
    setTimeout(cleanBoard, 5000);
    winnerMessage.innerText =
      "It is a BlackJack! You win. Take your money, you've earned" + " " + betAmount * 2.5;
    betAmount = 0;
    document.getElementById("bet").innerHTML = "$" + betAmount ;
  }
}
function cleanBoard() {
  for (let i = 0; i < 5; i++) {
    document.getElementById("playersCards").children[i].innerHTML = "";
    document.getElementById("dealersCards").children[i].innerHTML = "";
  }
  document.querySelector("h3").innerHTML = "";
  dealersCount.innerText = 0;
  playersCount.innerText = 0;
}