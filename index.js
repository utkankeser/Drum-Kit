 for (var i = 0; i < document.querySelectorAll("button").length; i++) {
   document.querySelectorAll("button")[i].addEventListener("click",function (){

    var buttonInnerHTML = this.innerHTML;

     makeSound(buttonInnerHTML);
     addAnimation(buttonInnerHTML);

   });
}



document.addEventListener("keydown",function (event) {
var buttonInnerHTML = event.key;
makeSound(buttonInnerHTML);
addAnimation(buttonInnerHTML);
})




function makeSound(ıbıdıbıdıe) {

  switch (ıbıdıbıdıe) {
    case "w":
     var cras = new Audio('./sounds/crash.mp3');
     cras.play();
      break;

     case "a":
     var kiick = new Audio('./sounds/kick-bass.mp3');
     kiick.play();

       break;
     case "s":
     var snare = new Audio('./sounds/snare.mp3');
     snare.play();
         break;
     case "d":
     var tom1 = new Audio('./sounds/tom-1.mp3');
     tom1.play();
         break;
     case "j":
     var tom2 = new Audio('./sounds/tom-2.mp3');
     tom2.play();

         break;
         case "k":
         var tom3 = new Audio('./sounds/tom-3.mp3');
         tom3.play();

           break;
           case "l":
           var tom4 = new Audio('./sounds/tom-4.mp3');
           tom4.play();

             break;

  default:
  alert("Wrong key");}
}



function addAnimation(activeKey){
  document.querySelector('.'+activeKey).classList.add("pressed");

  setTimeout(function () {
      document.querySelector('.'+activeKey).classList.remove("pressed");
  },100);
}
