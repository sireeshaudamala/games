function vertical(index, charecter) {
  let string = "|";

  for (let offSet = 0; offSet < index; offSet++) {
    string += charecter;
  }

  return string + "|\n";
}

function box(length) {
  if (length === 0) {
    return "";
  }

  return vertical(19, " ") + box(length - 1);
}
let position = 24;

function makeingBox() {
  const boxx = vertical(19, '-') + box(10) + vertical(19, "-");
  let index = 0;
  let string = "";
  while (index < boxx.length) {
    if (index === position) {
      string += '🐍';
      index += 2;
    }

    string += boxx[index];
    index++;
  }
  return string;
}

function userInput() {
  const enter = +prompt("enter")
  if (enter === 1) {
    position += 2;
  }

if(enter === 2){
  position -= 2;
}

  console.clear()
  console.log(makeingBox());

  return userInput();
}
console.log(userInput());
