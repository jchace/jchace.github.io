/*
   Final Project Great Race JavaScript
   Author:      Jeffrey Chace, M00262132
   Date:        1 December 2020
   Class:       ITC370-896-FA20
   Instructor:  Dr. Tiffany Ford
   Institution: Missouri State University
   Filename:    raceScripts.js
*/

// Initialize Global Variables

var raceVar1 = 0;
var raceVar2 = 0;
var advance1 = 0;
var advance2 = 0;
var runRace;
var winPic;
var randomNumRange = 10;
var windowSizeStop = (window.screen.width * window.devicePixelRatio);

// Function to start the race

function startRace() {
    changeImage();
    setIntervalAndFire();
}

// Function to change the light to green

function changeImage() {
    element = document.getElementById('redgreen')
    if (element.src.match("Green")) {
        element.src = "resources/images/AmpelmannRed.jpg";
    } else {
        element.src = "resources/images/AmpelmannGreen.jpg";
    }
}

// Function to set the interval "runRace" firing every 
// 25 miliseconds and then clear it based on conditions 

function setIntervalAndFire() {
    runRace = setInterval(function() {

        // Check to see if car1 has reached the 
        // window right side and declare winner

        if ((advance1) >= (windowSizeStop - 220)) {
            clearInterval(runRace);
            showWinner("resources/images/ferrariWins.png");
            
        // Check to see if car2 has reached the 
        // window right side and declare winner

        } else if ((advance2) >= (windowSizeStop - 220)) {
            clearInterval(runRace);
            showWinner("resources/images/kidcarWins.png");
            
        }

        racer1();
        racer2();

    }, 20);
}

// Function to generate random number 
// between 0-17 and increment to move car1

function racer1() {

    raceVar1 = Math.floor((Math.random() * 10) + 1);
    advance1 = advance1 + raceVar1;
    car1.style.left = advance1 + 'px';
}

// Function to generate random number 
// between 0-17 and increment to move car2

function racer2() {

    raceVar2 = Math.floor((Math.random() * randomNumRange) + 1);
    advance2 = advance2 + raceVar2;
    car2.style.left = advance2 + 'px';
}

// Function to give Kiddie a Turbo boost

function turboCharge(){

    randomNumRange = 25;

}

// Function to show winner of the race

function showWinner(winPic){
   
    document.getElementById('winner').style.display = "block";  
    document.getElementById('winImg').src = winPic;

}

// Function to hide winner window on click

function hideWinner(){  

    document.getElementById('winner').style.display = "none";
    window.location.reload(false);

} 
