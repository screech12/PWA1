/**
 * Created by stevencreech on 12/1/13.
 * Assignment: The Duel Part1
 */


// self-executing function
(function(){

        console.log("FIGHT!!!");

    //player name
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage
    var player1damage = 20;
    var player2damage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    var round = 1;

    function fight(){
       console.log('in the fight function');

       for (var i = 0; i < 10; i++){
           console.log(i);
       };
        
    };

    function winnerCheck(){
       //code will go here
    };

    /******* The program gets started below *****/
    console.log('program starts');
    fight();


})();