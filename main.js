  
  
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
const dealersCards = document.getElementById('dealersCards')
const playersCards = document.getElementById('playersCards')
console.log(playersCards)
 const playNowBtn = document.getElementById('playNowButton');
 const hitBtn = document.getElementById('hitButton')
const stayBtn = document.getElementById('stayButton')

/*--------------------- event listeners --------------------------*/
playNowBtn.addEventListener('click', initialize);


hitBtn.addEventListener('click', renderPlayerChoice);
// stayBtn.addEventListener('click', dealersTurn);

/*---------------------- functions -----------------------------*/


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

let randCardValue;
let randCardImg;
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
    renderPlayerChoice();
 }



 //These arrays are meant for support to indicate the occupied slots with a 1, and the empty one with a 0
//               0  1  2  3  4  5
 boardPlayer =  [0, 0, 0, 0, 0, 0]; //
 boardDealer =  [0, 0, 0, 0, 0, 0];

    

function renderBoard(){
    let sum1=0
    let sum2=0
    for(let i = 0; i < 2; i++ ){
        // this renders the board for the player
        const addCardImagePlayer = document.createElement('img')
        shuffleDeck(mazo) //here I am getting a random card 
        addCardImagePlayer.setAttribute('src', obtainCardImg(mazo)) 
        playersCards.children[i].appendChild(addCardImagePlayer) //Here I append two cards to the players board. 
        boardPlayer[i] = 1; // Here I indicate it's occupied placing a one in position boardPlayer[i]
        sum1=sum1+obtainCardValue(mazo)
        console.log("player"+ sum1)
        
        // this renders the board for the dealer 
        const addCardImageDealer = document.createElement('img')
        shuffleDeck(mazo)// here I find a shuffled card from the deck
        addCardImageDealer.setAttribute('src', obtainCardImg(mazo))
        dealersCards.children[i].appendChild(addCardImageDealer) //Here i append two cards to the dealers board
        boardDealer[i] = 1; // Here I indicate it's occupied placing a one in position boardPlayer[i]
        sum2=sum2+obtainCardValue(mazo)
        console.log("computer"+sum2)

    }


}

function renderPlayerChoice(){

        const addCardImagePlayer = document.createElement('img')
        shuffleDeck(mazo)
        addCardImagePlayer.setAttribute('src', obtainCardImg(mazo))
        let indice=boardPlayer.indexOf(0) // Here I obtain the index of the array where it finds the firs 0
        playersCards.children[indice].appendChild(addCardImagePlayer) // Here I create the image of the index with the first 0 that I found in board player. 
        boardPlayer[indice]=1
}



console.log("this is mazo"+ mazo)