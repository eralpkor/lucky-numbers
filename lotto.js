
function getLucky(e) {
  var lucky1 = Math.floor(Math.random() * 69) + 1;
  var lucky2 = Math.floor(Math.random() * 69) + 1;
  var lucky3 = Math.floor(Math.random() * 69) + 1;
  var lucky4 = Math.floor(Math.random() * 69) + 1;
  var lucky5 = Math.floor(Math.random() * 69) + 1;
  var bonus = Math.floor(Math.random() * 69) + 1;
  if (e.value === 'click'){
    e.value = 'reset';
    document.getElementById("btn").innerHTML = "CLICK HERE TO PICK NOW";
    document.getElementById("numbers").innerText = "Numbers: " + lucky1 + ", " + lucky2 + ", " + lucky3 + ", " + lucky4 + ", " + lucky5;
    document.getElementById("bonus").innerText = "Bonus: " + bonus;
    document.getElementById("greeting").innerText = "Good Luck!";
  } else{
    e.value = 'click';
    document.getElementById('btn').innerHTML = 'RE-DRAW LUCKY NUMBERS';
    document.getElementById("numbers").innerText = "Numbers: ";
    document.getElementById("bonus").innerText = "Bonus: ";
  } 
}