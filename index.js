//TODO
//*asdaasdfas
//?
//!

/**********************************  Detecting Button Press with Click  *********************/

var btnNumb = document.querySelectorAll("button.drum").length;

for (var i = 0; i < btnNumb; i++) {
  //document.querySelector("button").addEventListener("click", handleClick);
  /* handleClick function using as a input in here it is waiting to call until the click event happens */
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

/**********************************  Detecting Keyboard Press *********************/

document.addEventListener("keydown", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

/******************************** Creating of Sound by Using Related Letter *********************/

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default:
      console.log(key);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

//* This function represents the AddEventListener working principle with a local example

/* function anotherAddEventListener (typeOfEvent,callBack){ */

/* Detect Event Code- "Action" that was needed-pressing letter or clicking ... */

/* informations corresponding to the action --Library of js */
/* var eventThatHappened = {
        eventType:"keydown" ,
        key:"p" ,
        durationOfKeypress: 2,
    } */

/* if the action that the user made(eventThatHappened.eventType) same as the wanted action(typeOfEvent),All the informations pluging into the input of callBack function*/
/* if (eventThatHappened.eventType === typeOfEvent){
        callBack(eventThatHappened) ;
    } */

/* eventThatHappened goes to the event */
/* anotherAddEventListener("keydown", function(event) {
    console.log(event) ;
}) ; */

//* Cell creation of houseKeeper1
/* var houseKeeper1 = {
    name: "Nataşa" ,
    height: 1.70 ,
    languages:["turkish","english"]
     
} */

//* Constructor Function

/*  function HouseKeeper (name, height, languages){
    this.name=name ;
    this.height=height ;
    this.languages=languages;
    this.clean = function () {
        alert("cleaning in progress") ;
    }
}

var houseKeeper1 = new HouseKeeper("berna",1.70,["Turkish","English"]) ;
var houseKeeper2 = new HouseKeeper("selin",1.80,["French","English"]) ; 
 */
