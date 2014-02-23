/**
 * GUESSING GAME:
 *
 * Created By: Steven Creech
 * Date: 02/22/2014
 * 
 * GUESSING GAME
 */

//Game variables
(function (){

/*
Create a variable to store a random integer within the range 1-10.

 Create variables that reference the DOM(html) elements or 1 object literal

 Create an .addEventListner event listener on the guess button to listen for a click event.

 When the guess button is clicked, evaluate your guess with the number the computer has chosen.

 Create a function to validate the users input:
 Validate that a number was entered. AND
 Validate that the number entered is between 1 and 10

 If your guess is higher than the computer's number then display appropriate message in the HTML.

 If your guess is lower than the computer's number then display appropriate message in the HTML.

 If your guess is equal to the computer's number then display appropriate message and end the game.

 Tally all the wrong guesses and end the game after the 3rd incorrect guess and show appropriate game over message in the HTML.

 Deactivate the button by removing the event listener when the game is over.

 EXTRA CREDIT: Use a keyboard event for the ENTER button that also acts like clicking on the guess button.

*/

    //Create a variable to store a random integer within the range 1-10. Use math.floor for random num.

    var bestGuess = Math.floor(Math.random() * 10+1);
    console.log(bestGuess); //random nm between 1 thru 10;
    var guesses = 0;
//Create variables that reference the DOM(html) elements or 1 object literal

    //Create an .addEventListner event listener on the guess button to listen for a click event.

    
    var input;
    var output;
    var button;
})();