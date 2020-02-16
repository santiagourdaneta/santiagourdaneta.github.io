(function(){
  
var iconList = [
  "fa-code",
  "fa-google",
  "fa-child",
  "fa-bug",
  "fa-keyboard-o",
  "fa-headphones",
  "fa-lightbulb-o",
  "fa-mortar-board"
];
  
var factsList = [
    "Nunca es demasiado tarde para aprender a programar.",
    "Al aprender a programar, Google es tu mejor amigo.",
    "Te sientes como un súper héroe al arreglar un error en tu código.",
    "Programar a menudo te distrae incluso cuando estás haciendo otra cosa."
  ]; 

  function createElement(text, icon){
      var p = document.querySelector(".text");
      p.textContent = text;
      var span = document.querySelector(".icon span");
      span.className = "";
      span.classList.add("fa", icon, "fa-2x", "fa-fw");
  }
  
  var i = 0;
  var length = factsList.length;
  var delayTime = 5000;
  
  function nextFact(){
    var fact = factsList[i];
    var icon = iconList[i];
    
    createElement(fact, icon);
    
    i++;
    
    if(i >= length){
      i = 0;
    }
    setTimeout(nextFact, delayTime);   
  }
  nextFact();
  
 })();
