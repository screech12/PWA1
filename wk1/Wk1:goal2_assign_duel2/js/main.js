/**
 * Created by stevencreech on 12/4/13.
 * Assignment: The Duel Part1
 */


// self-executing function
(function(){

        console.log("FIGHT!!!");

    //player name
    var fighter1 = ['Spiderman',50,100];
    var fighter2 = ['Batman', 50,100];
    var round = 0;

    function fight(){
       console.log('in the fight function');

       alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);

       for (var i = 0; i < 10; i++){
         //random formula is - Math.floor(Math.random() * (max - min) + min;

           var minDamage1 = fighter1 * .5;
           var minDamage2 = fighter2 * .5;
           var f1 = Math.floor(Math.random()*(fighter[1]-minDamage1)+minDamage1);
           var f2 = Math.floor(Math.random()*(fighter[2]-minDamage2)+minDamage2);

           //console.log(f1);
           //console.log(f2);

           //inflict damage
           fighter1 [2]-=f1;
           fighter2 [2]-=f2;

           console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);
           var results = winnerCheck();
           console.log(results);

           if(results === "no winner"){
               round++;
               alert(playerOneName+":"+playerOneHealth+ " *Round "+round+" OVER*"+"* "+playerTwoName+":"+playerTwoHealth);
           }else{
               alert(results);
               break;
           };




       };

    };

    function winnerCheck(){
       console.log("in winnerCheck FN");
       var result="no winner";

       if (playerOneHealth<1 && playerTwoHealth<1){
           result = "You Both Die";
       }else if(playerOneHealth <1){
          result = playerTwoName+"WINS!!!"
       }else if(playerTwoHealth <1){
           result = playerOneName+"WINS!!!"
       };

       return result;

    };

    /******* The program gets started below *****/
    console.log('program starts');
    fight();


})();