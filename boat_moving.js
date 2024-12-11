let row1 = "/^";
let row2 = "|#|";
let row3 = "|===|";
let row4 = "|0|";
let row5 = "| |";
let row6 = "=====";
let row7 = "_||_||_";

const building = row1 + "\n" + row2 + "\n" + row3 + "\n" + row4 + "\n" + row5
  + "\n" + row6 + "\n" + row7 + "\n";

function delay() {
  for (let index = 0; index < 900000000; index++) {

  }
}

function repeat(index, position) {
  if (index === position) {
    return "";
  }

  return "-" + repeat(index + 1, position,)
}

function movingBoat(index1) {
  if (index1 === 100) {
    return "";
  }

  console.clear();
  console.log(building)
  console.log(repeat(0, index1) + "ō͡≡o" );
  delay();

  return movingBoat(index1 + 1)
}

movingBoat(1);
