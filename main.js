  
  
  /*------------------------ constants -------------------------*/
  const suits = ['hearts', 'spades', 'clubs', 'diamonds']
  const values = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2']
  /*--------------------- state variables ----------------------*/
  let playerScore;
  let dealerScore; 
  let dealtMoney;
  let winner;
  let board;
  let card;
  let mazo;
  let randCard;

/*---------------------- cached elements ------------------------*/
const dealersCards = document.getElementById('dealersCards');
const playersCards = document.getElementById('playersCards');
const playNowBtn = document.getElementById('playNowButton');
const hitBtn = document.getElementById('hitButton');
const stayBtn = document.getElementById('stayButton');
const dealersCount = document.getElementById('dealersCounter');
const playersCount = document.getElementById('playersCounter')
const winnerMessage = document.querySelector('h3')

/*--------------------- event listeners --------------------------*/
playNowBtn.addEventListener('click', initialize);
hitBtn.addEventListener('click', renderPlayerChoice);
stayBtn.addEventListener('click',renderDealersChoice,);
/*--------------------- functions -----------------------------*/
card = {}
// Every time his function is called, It will generate a card deck matching the values of 
// my suits and values constants, as well as their respective numerical value and image using 
// concatenating. 
function createCardDeck(cardSuits, cardValues) {
   let cards = []
    for(let i = 0; i < suits.length; i++){
        for(let j = 0; j < values.length; j++){
            if(values[j] === 'A'){
                card = {
                    cardName: suits[i] + '-' + values[j], 
                    numValue: 11,
                    img: '/card-deck/images/' + suits[i] + '-' + values[j] + '.svg'
                }
            }else if(values[j] === 'K' || values[j] === 'Q' || values[j] === 'J'){
                card = {
                    cardName: suits[i] + '-' + values[j], 
                    numValue: 10,
                    img: '/card-deck/images/' + suits[i] + '-' + values[j] + '.svg'
                }
            }else if (values[j] === '10'){
                card = {
                    cardName: suits[i] + '-' + values[j], 
                    numValue: Number(values[j]),
                    img: '/card-deck/images/' + suits[i] + '-r' + values[j] + '.svg'
                }
            }else{
                card = {
                    cardName: suits[i] + '-' + values[j], 
                    numValue: Number(values[j]),
                    img: '/card-deck/images/' + suits[i] + '-r0' + values[j] + '.svg'
                }
            }
         cards.push(card)
        }
    }

    return(cards)

}
 mazo = createCardDeck(suits, values)

//  the next three functions respectively generate a random card, its respective numeric value, and its image. 
let randCardImg; let randCardValue;
function shuffleDeck(cardDeck){
        randCard = Math.floor((Math.random() * cardDeck.length));
        return cardDeck[randCard]
     } 
     console.log(shuffleDeck(mazo))

function obtainCardValue(cardDeck){
         randCardValue = randCard
        return cardDeck[randCard].numValue
    }
console.log(obtainCardValue(createCardDeck(suits, values)))

function obtainCardImg(cardDeck){
    randCardImg = randCard
   return cardDeck[randCard].img
    }
    console.log(obtainCardImg(mazo))

// This function resets the board to be ready to play 
function initialize(){
    winner = null; 
    render();
}

// this is the function that will be called for the dealers and players choice. 
function getWinner(){}

// this 
function render() {
// render board
   renderBoard();
// winner message 
   renderWinnerMessage();
// Allows palyer to click hit and render a card on board
    renderPlayerChoice();
 // this function allows the dealer to take its turn
    renderDealersChoice();
// Generates a winner
    getWinner()
 }

 //These arrays are meant for support to indicate the occupied slots with a 1, and the empty one with a 0
//               0  1  2  3  4  5
boardPlayer =  [0, 0, 0, 0, 0, 0]; //
boardDealer =  [0, 0, 0, 0, 0, 0];
playerScore = 0;
dealerScore = 0;
function renderBoard(){

    for(let i = 0; i < 2; i++ ){
        // this renders the board for the player
        const addCardImagePlayer = document.createElement('img')
        shuffleDeck(mazo) //here I am getting a random card 
        addCardImagePlayer.setAttribute('src', obtainCardImg(mazo)) 
        playersCards.children[i].appendChild(addCardImagePlayer) //Here I append two cards to the players board
        boardPlayer[i] = 1; // Here I indicate it's occupied placing a one in position boardPlayer[i]
        playerScore = playerScore + obtainCardValue(mazo)

        // this renders the board for the dealer 
        const addCardImageDealer = document.createElement('img');
        shuffleDeck(mazo);// here I find a shuffled card from the deck
        addCardImageDealer.setAttribute('src', obtainCardImg(mazo));
        dealersCards.children[i].appendChild(addCardImageDealer); //Here i append two cards to the dealers board
        boardDealer[i] = 1; // Here I indicate it's occupied placing a one in position boardPlayer[i]
        dealerScore = dealerScore + obtainCardValue(mazo);
        console.log(dealerScore)

        if(dealerScore >= 21 || playerScore >= 21){
            return
        }

    }
}

function renderPlayerChoice(){
    const addCardImagePlayer = document.createElement('img');
    shuffleDeck(mazo);
    addCardImagePlayer.setAttribute('src', obtainCardImg(mazo));
    let index = boardPlayer.indexOf(0); // Here I obtain the index of the array where it finds the first 0
    playersCards.children[index].appendChild(addCardImagePlayer); // Here I create the image of the index with the first 0 that I found in board player. 
    boardPlayer[index] = 1;
    playerScore = playerScore + obtainCardValue(mazo)
    console.log("player"+ playerScore)
}

function renderDealersChoice(){
    if(dealerScore >= 17 || dealerScore > playerScore){
        clearTimeout(renderDealersChoice, 2000)
        return
    }else{
        setTimeout(renderDealersChoice, 2000)
        const addCardImageDealer = document.createElement('img');
        shuffleDeck(mazo);
        addCardImageDealer.setAttribute('src', obtainCardImg(mazo));
        let index = boardDealer.indexOf(0);
        dealersCards.children[index].appendChild(addCardImageDealer);
        boardDealer[index] = 1;
        dealerScore = dealerScore + obtainCardValue(mazo)
        console.log("computer"+ dealerScore)
    }

 }
       
console.log("this is mazo"+ mazo)

