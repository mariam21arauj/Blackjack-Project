  
  
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
  let cards; 
  let randCard;

/*---------------------- cached elements ------------------------*/
const dealersCards = document.getElementById('dealersCards')
const playersCards = document.getElementById('playersCards')
console.log(playersCards)
 const playNowBtn = document.getElementById('playNowButton');
 const hitBtn = document.getElementById('hitButton')
const stayBtn = document.getElementById('stayButton')

/*--------------------- event listeners --------------------------*/
playNowBtn.addEventListener('click', initialize);
// hitBtn.addEventListener('click', renderBoard);
// stayBtn.addEventListener('click', dealersTurn);


/*---------------------- functions -----------------------------*/

cards = []
card = {}
// Every time his function is called, It will generate a card deck matching the values of 
// my suits and values constants, as well as their respective numerical value and image using 
// concatenating. 
function createCardDeck(cardSuits, cardValues) {
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

let randCardValue;
let randCardImg;
function shuffleDeck(cardDeck){
        randCard = Math.floor((Math.random() * cardDeck.length));
        return cardDeck[randCard]
     } 
     console.log(shuffleDeck(createCardDeck(suits, values)))

function obtainCardValue(cardDeck){
         randCardValue = randCard
        return cardDeck[randCard].numValue
    }
console.log(obtainCardValue(createCardDeck(suits, values)))

function obtainCardImg(cardDeck){
    randCardImg = randCard
   return cardDeck[randCard].img
    }
    console.log(obtainCardImg(createCardDeck(suits, values)))


function initialize(){
    winner = null;  
 render();
    }

function getWinner(){}
function render() {
// render board
   renderBoard();
// winner message 
   renderWinnerMessage();
// Allows palyer to click hit and render a card on board
    renderPlayer();
 }

function renderBoard(){
    for(let i = 0; i < 2; i++ ){
        const addCardImagePlayer = document.createElement('img')
        shuffleDeck(createCardDeck(suits, values))
        addCardImagePlayer.setAttribute('src', obtainCardImg(createCardDeck(suits, values)))
        playersCards.children[i].appendChild(addCardImagePlayer)
        const addCardImageDealer = document.createElement('img')
        shuffleDeck(createCardDeck(suits, values))
        addCardImageDealer.setAttribute('src', obtainCardImg(createCardDeck(suits, values)))
        dealersCards.children[i].appendChild(addCardImageDealer)
    }
}



