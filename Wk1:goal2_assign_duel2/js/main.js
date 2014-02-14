/**
 * Created by stevencreech on 01/13/14.
 * Assignment: The Duel Part2
 */


// self-executing function
(function(){

    console.log("FIGHT!!!");

    //player name
    var fighter1 = ["Spiderman", 20, 100];
    var fighter2 = ["Batman" , 20, 100];

    //player damage
    //var player1Damage = 20;
    //var player2Damage = 20;

    //player health
    //var playerOneHealth = 100;
    //var playerTwoHealth = 100;

    var round = 0;

    function fight(){
        console.log('in the fight function');

        alert(fighter1[0]+":"+fighter1[2]+" *START* "+fighter2[0]+":"+fighter2[2]);

        for (var i = 0; i < 10; i++){
            //random formula is - Math.floor(Math.random() * (max - min) + min;
            //console.log(i);

            var minDamage1 = fighter1[1] * .5;
            var minDamage2 = fighter2[1] * .5;
            var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2[2]-minDamage2)+minDamage2);

            //console.log(f1);
            //console.log(f2);

            //inflict damage
            fighter1 [2]-=f1;
            fighter2 [2]-=f2;

            console.log(fighter1[0]+":"+fighter1[2]+" "+fighter2[0]+":"+fighter2[2]);
            var results = winnerCheck();
            console.log(results);

            if(results === "no winner"){
                round++;
                alert(fighter1[0]+":"+fighter1[2]+ " *Round "+round+" OVER*"+"* "+fighter2[0]+":"+fighter2[2]);
            }else{
                alert(results);
                break;
            };




        };

    };

    function winnerCheck(){
        console.log("in winnerCheck FN");
        var result="no winner";

        if (fighter1[2]<1 && fighter2[2]<1){
            result = "You Both Die";

        }else if(fighter1[2] <1){
            result = fighter2[0]+"WINS!!!"

        }else if(fighter2[2] <1){
            result = fighter2[0]+"WINS!!!"
        };

        return result;

    };

    /******* The program gets started below *****/
    console.log('program starts');
    fight();


})();
