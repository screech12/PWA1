/**
 * Created by steven_creech on 02/19/14.
 * Assignment: The Duel Part3
 */


// self-executing function
(function(){

    console.log("FIGHT!!!");

    //player name
    //fighter1 = {name:'Spiderman', damage:20, health:100};
    //fighter2 = {name:'Batman', damage:20, health:100};
    var fighters = [{name:'Spiderman', damage:20, health:100},{name:'Batman', damage:20, health:100}];

    //player damage
    //var player1Damage = 20;
    //var player2Damage = 20;

    //player health
    //var playerOneHealth = 100;
    //var playerTwoHealth = 100;

    var round = 0;




    function fight(){
        //console.log('in the fight function');

        //alert(fighter1[0]+":"+fighter1[2]+" *START* "+fighter2[0]+":"+fighter2[2]);
        var fhtBtn = document.querySelector('#fight_btn');
        fhtBtn.onclick = fight;
        //var round = 0;
    //function fight(){


        //for (var i = 0; i < 10; i++){
            //random formula is - Math.floor(Math.random() * (max - min) + min;
            //console.log(i);

            //var minDamage1 = fighters[0] * .5;
            //var minDamage2 = fighters[1] * .5;
            var f1 = Math.floor((Math.random()*fighters[0].damage) + fighters[0].damage * .5);
            var f2 = Math.floor((Math.random()*fighters[1].damage) + fighters[1].damage * .5);

            //console.log(f1);
            //console.log(f2);

            //inflict damage
            fighters [0].health-=f1;
            fighters [1].health-=f2;

            //console.log(fighters[0]+":"+fighters[1]+" "+fighters[0]+":"+fighters[1]);
            var results = winnerCheck();
            console.log(results);

            if(results === "no winner"){
                round++;
                var roundNum = document.querySelector('#fight_btn h4');
                roundNum.innerHTML = ('ROUND ' + round + ' OVER');
                var scrLks = document.querySelectorAll("#scores p");
                scrLks[0].innerHTML = (fighters[0].name+':'+fighters[0].health);
                scrLks[1].innerHTML = (fighters[1].name+':'+fighters[1].health);

                //alert(fighter1[0]+":"+fighter1[2]+ " *Round "+round+" OVER*"+"* "+fighter2[0]+":"+fighter2[2]);
            }else{
                var ftBtn = document.querySelector('#fight_btn a');

                ftBtn.innerHTML = ("DONE!!!");
                var rstLks = document.querySelectorAll('#scores p');

                rstLks[0].innerHTML = ('');
                rstLks[1].innerHTML = (results + '');

                //alert(results);
               // break;





        }

    }

    function winnerCheck(){
        console.log("in winnerCheck FN");
        var result="no winner";

        if (fighters[0].health < 1 && fighters[1].health < 1){
            result = "Both Fighters Die";

        }else if(fighters[0].health <1){
            result = fighters[1].name +" WINS!!!"

        }else if(fighters[1].health <1){
            result = fighters[0].name +" WINS!!!"
        }

        return result;

    }

    /******* The program gets started below *****/
    //console.log('program starts');
    fight();


})();
