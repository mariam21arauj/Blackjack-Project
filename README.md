 BlackJack 

PLay here: https://mariam21arauj.github.io/Blackjack-Project/

 This game will take place on a table (the screen) consisting of a player playing against the computer (Dealer) with a deck of 52 cards. 

---Rendering the board---

 1) "Play Now" button will be clicked. As soon as "Play Now" button it's clicked:

  -  Button disappears.
  -  A pop-up shows up asking how much money they want to bet.
  -  Player can click on "OK" button once he gives the money amount input.
  - A table with the rest of the buttons appear, and the dealt money on the center.
  - A card count tracker for each player shows up. 

  2) As soon as the "Ok" button has been clicked: 

 -  Two cards side-up show up on the player side
 -  One card side up, one side down show on the dealer side. 

 ---Winning logic---

3) Players turn start: 

   - As soon as the players turn start,  the player can choose to click hit as many times as he wants as long as the total amount of cards in their hand is less than 21. The player's turn will stop when: 

          - The player "Hit" over 21, and the Dealer won. 
          - The player clicks on "Stand" before 21, the Dealer turn starts.

4) Dealer's turn start: 

  - The dealer's turn will begin as soon as the player's click stay, and the dealer will begin his own function where he will hit for as long as his hand cards are equal to or the same as 17, at which point it will choose to stand. 


---Ending the game---

5) After it has been decided who's won, the game will automatically reset, allowing player to click on "play now" button again. 



RESOURCES:

https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript

https://stackoverflow.com/questions/66199167/javascript-blackjack-multiple-deck-creation-shuffling
 