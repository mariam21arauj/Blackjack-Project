  Pseudocode of BlackJack 

  BUTTONS: "Play Now", "Play Again", "Deal", "Stand", "Hit "
  CARDS: 52 cards with a specific numeric value 


 This game will take place on a table (the screen) consisting of a player playing against the computer (Dealer) with a deck of 52 cards. 

---Rendering the board---

 1) "Play Now" button will be clicked. As soon as "Play Now" button it's clicked:

  -  Button disappears.
  -  A pop-up shows up asking how much money they want to bet.
  -  Player can click on "Deal" button once he gives the money amount input.
  - A table with the rest of the buttons appear, and the dealt money on the center.
  - A card count tracker for each player shows up. 

  2) As soon as the "Deal" button has been clicked: 

 -  Two cards side-up show up on the player side
 -  One card side up, one side down show on the dealer side. 

 ---Winning logic---

3) Players turn start: 

   - As soon as the players turn start, we enter a loop where the player can choose to click hit as many times as he wants as long as the total amount of cards in their hand is less than 21. The loop will stop when: 

          - The player "Hit" over 21, and the Dealer won. 
          - The player clicks on "Stand" before 21, the Dealer turn starts.

4) Dealer's turn start: 

  - The dealer's turn will begin as soon as the player's loop ends, and the dealer will begin his own loop where he will hit for as long as his hand cards are equal to or the same as 17, at which point it will choose to stand. 


---Ending the game---

5) After it has been decided who's won, a new pop-up shows up for the player: "Do you wish to play again, or cash out and end the game?" and the player can choose to click on "Play Again" and continue where he left off, or click "Cash Out" and then end the game.  

(im still deciding wheter this is the end game logic, or wheter is when player has $0 or cards run out)
 