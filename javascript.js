var orbDiv = "<div class='orb' id='orb" + 1 + "'>";

function orb (size, opacity, id) {
  
  this.size = size;
  this.opacity = opacity;
  this.id = id;
  
}

function createOrb (id) { 
  
  document.getElementById("mainOrb").innerHTML += "<div class='orb' id='orb" + id + "'>";
  
  var randomNumber = Math.floor(Math.random() * 150 + 30);
  
  $("#orb" + id).css({"width": randomNumber, "height": randomNumber, "margin-right": "5px"});
  
}

var newOrb = new orb(10, 0.5);

function generatePosition (orb) {
  
  var height = $(window).height() - 100;
  var width = $(window).width() - 100;

  //return a random X and Y coordinate
  return [Math.floor(Math.random() * height), Math.floor(Math.random() * width)];
  
}

function animateOrb(id, time) {
  
  var newPosition = generatePosition(newOrb);
  
  $('#orb' + id).animate({ 
    
    top: newPosition[0], 
    left: newPosition[1] 
  
  }, time, function(){
   
      animateOrb(id, 5000);   
    
    });
  
}

$(document).ready(function(){
  
  for (var i = 0; i < 100; i++){
    
    createOrb(i);
    
  }
  
  for (var i = 0; i < 100; i++){
    
    animateOrb(i, 9000);
    
  }
    
})