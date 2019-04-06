                    //////////////////////
                   //// Bobby Nguyen ////
                  //////////////////////

 
var wins = 0;                       // holds value for wins.
var losses = 0;                     // holds value for losses.
var yourScore = 0;                  // holds value for yourScore.
var targetScore;                    // hold value for your targetScore.

var crystalValueArray = [];         // holds the array of values for the crystal buttons.

var crystalOneValue;                // holds value of the first crystal
var crystalTwoValue;                // holds value of the second crystal
var crystalThreeValue;              // holds value of the third crystal
var crystalFourValue;               // holds value of the fourth crystal

// Audio varibles
var loseRings = new Audio("./assets/audio/losecoin.wav");
var greenHillZone = new Audio("./assets/audio/02_Green_Hill_Zone.mp3");
var finalZone = new Audio("./assets/audio/15_Final_Zone.mp3");

function startGame() {
    
     yourScore = 0;                 // set yourScore to 0.
     crystalValueArray = [];        // clears crystalValueArray.
    
    targetScore = Math.floor(Math.random() * 102) + 19; // randomly generate a targetScore between 19 - 120.

    randomCrystalValue();
    
    $("#your-score").html(yourScore);           // updates your total score in HTML
    $("#target-score").html(targetScore);       // updates target score in HTML
};

function randomCrystalValue() {
    
    for (let i = 1; i < 5; i++) {
        var crystalValue = Math.floor(Math.random() * 11) + 1; // randomly generate crystalValue between 1 - 12.
        crystalValueArray.push(crystalValue);                  // push the random value into the crystalValueArray. 
    }

    crystalOneValue = crystalValueArray[0];
    crystalTwoValue = crystalValueArray[1];
    crystalThreeValue = crystalValueArray[2];
    crystalFourValue = crystalValueArray[3];
    console.log(crystalOneValue + "|" + crystalTwoValue + "|" + crystalThreeValue + "|" + crystalFourValue );
};

function compareScore() {
    if (yourScore === targetScore) {
        win();
    }
     if (yourScore > targetScore) {
        lose();
    }
}

function win() {
        wins++
        superSonic();
        $("#win-text").html("wins: " + wins);
        startGame();
};

function lose() {
        losses++
        dies();
        loseRings.play();
        $("#lose-text").html("losses: " + losses);
        startGame();
};

$(document).ready(function(){

    $("#crystal1").click(function(){                // Adds the value of the first crystal to your total score.
        yourScore += crystalValueArray[0];
        $("#your-score").html(yourScore);
       compareScore();
        });

        $("#crystal2").click(function(){            // Adds the value of the second crystal to your total score.
            yourScore += crystalValueArray[1];
            $("#your-score").html(yourScore);
            compareScore();
            });

            $("#crystal3").click(function(){        // Adds the value of the third crystal to your total score.
                yourScore += crystalValueArray[2];
                $("#your-score").html(yourScore);
                compareScore();
                });

                $("#crystal4").click(function(){        // Adds the value of the fourth crystal to your total score.
                    yourScore += crystalValueArray[3];
                    $("#your-score").html(yourScore);
                    compareScore();
                    });
      });

      /////////////////////////////////   Fun Stuff   /////////////////////////////////////////////

      function dies() {
        $('.bg').css('background-image','url(./assets/images/sonic3.jpg)');
        changeBack();
        finalZone.pause();
        finalZone.currentTime = 0;
        greenHillZone.play();
        $("#rings").css("display", "block");
        setTimeout(function() { $('#rings').css('display', 'none'); }, 1000);
      };

      $("#start").click(function() {
        finalZone.pause();
        finalZone.currentTime = 0;
        greenHillZone.play();
        $("#start").css("display", "none");
    });

      function superSonic() {
        $('.bg').css("background-image","url('./assets/images/supersonic.jpg')");
        changeCrystal();
        finalZone.play();
        greenHillZone.pause();
        greenHillZone.currentTime = 0;
      }

      function changeCrystal() {
        $("#crystal1").attr("src", "./assets/images/Crystal5.PNG.png");
        $("#crystal2").attr("src", "./assets/images/Crystal6.png");
        $("#crystal3").attr("src", "./assets/images/Crystal7.PNG.png");
        $("#crystal4").attr("src", "./assets/images/Crystal8.PNG.png");
        changeCrystalAttr();
      }

      function changeCrystalAttr() {
        $('#crystal1').attr('id','crystal5');
        $('#crystal2').attr('id','crystal6');
        $('#crystal3').attr('id','crystal7');
        $('#crystal4').attr('id','crystal8');
      }

      function changeBack() {
        $("#crystal5").attr("src", "./assets/images/Crystal1.png");
        $("#crystal6").attr("src", "./assets/images/Crystal2.png");
        $("#crystal7").attr("src", "./assets/images/Crystal3.PNG.png");
        $("#crystal8").attr("src", "./assets/images/Crystal4.PNG.png");
        changeBackAttr();
    }

    function changeBackAttr() {
        $('#crystal5').attr('id','crystal1');
        $('#crystal6').attr('id','crystal2');
        $('#crystal7').attr('id','crystal3');
        $('#crystal8').attr('id','crystal4');
      }
      
     
startGame();
