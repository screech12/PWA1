/*
 * Steven Creech
 * Date 11/03/2013
 * Goal1:  Assignment: The Duel - Part I
 */

//self-executing function
(function(){

    console.log('FIGHT!!!')

    //players name
    var playerOneName = 'Spiderman';
    var playerTwoName = 'Batman';

    //player damage
    var player1Damage = 50;
    var player2Damage = 50;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    var round = 1;

    function fight (){
        console.log('in the fight function');

        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);

        for (var i = 0; i < 10; i++){

            //random formula is - Math.floor(Math.random() * (max - min) + min);
            
            //console.log(i);
        };
        //winnerCheck()
    };

    function winnerCheck(){};
        //code will go here

    /***** The program gets started below *****/
    console.log('program starts');
    fight();

})();