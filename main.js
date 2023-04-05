  /*----- constants -----*/
  const suits = ['heart', 'spade', 'club', 'diamonds']
  const values = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2']
   



  /*----- state variables -----*/
  let playerScore;
  let dealerScore; 
  let dealtMoney;
  let winner;
  let board;
  let card;
  let cards; 
 



//   /*----- cached elements  -----*/
const playNowBtn = document.getElementById('playNowButton');
const hitBtn = document.getElementById('hitButton')
const stayBtn = document.getElementById('stayButton')

//   /*----- event listeners -----*/
 playNowBtn.addEventListener('click', initialize);
hitBtn.addEventListener('click', shuffleDeck);
stayBtn.addEventListener('click', dealersTurn);
 /*----- functions -----*/
 
 initialize(); 


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
                    img: '/images/' + suits[i] + '-' + values[j] + '.svg'
                }
            }else if(values[j] === 'K' || values[j] === 'Q' || values[j] === 'J'){
                card = {
                    cardName: suits[i] + '-' + values[j], 
                    numValue: 10,
                    img: '/images/' + suits[i] + '-' + values[j] + '.svg'
                }
            }else if (values[j] === '10'){
                card = {
                    cardName: suits[i] + '-' + values[j], 
                    numValue: Number(values[j]),
                    img: '/images/' + suits[i] + '-r' + values[j] + '.svg'
                }
            }else{
                card = {
                    cardName: suits[i] + '-' + values[j], 
                    numValue: Number(values[j]),
                    img: '/images/' + suits[i] + '-r0' + values[j] + '.svg'
                }
            }
         cards.push(card)
        }
    }
    return(cards)

}

function shuffleDeck(cardDeck){
    
}







// function initialize(){
//     // restarts board
//     winner = null;
//     board = [
//         [0, 0, 0, 0, 0, 0], //Dealers side of the board 
//         [0, 0, 0, 0, 0, 0], //Playeers side of the board
//     ];
//     render();
// }