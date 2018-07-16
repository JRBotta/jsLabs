var slots = function (){
  var slotValues = ['Star','Leaf','Mushroom'];

  //generates between 3 and 5 wheels with 5 to fifteen icons each
  var temp = [];
  var minWheels = 3;
  var optWheels = 2;

  var minIcons = 5;
  var optIcons = 10;

  for(let i = 0; i < Math.ceil((Math.random() * (optWheels + 1))) + minWheels - 1; i++) {
    temp.push([]);
    for(let j = 0; j < Math.ceil((Math.random() * (optIcons + 1))) + minIcons - 1; j++) {
      temp[i].push(slotValues[Math.floor(Math.random() * slotValues.length)]);
    }
  }
  return temp;

}();

function spin(slots) {
  var temp = [];
  for(let i = 0; i < slots.length; i++) {
    temp.push(slots[i][Math.floor(Math.random() * slots[i].length)]);
  }
  determineWinner(temp);
}

function determineWinner(slots) {
  var temp = slots[0];
  var bool = true;
  for(let i = 1; i < slots.length; i++) {
    if(slots[i] !== temp) {
      bool = false;
    }
  }
  console.log(slots);
  if(bool) {
    console.log("Winner!");
  } else {
    console.log("Loser");
  }
}
spin(slots);
