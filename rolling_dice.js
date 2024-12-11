const SPACE = "┃        ┃";
const RIGHT = "┃⚪️      ┃";
const MIDDLE = "┃   ⚪️   ┃";
const LEFT = "┃      ⚪️┃";
const TWO_DOTS = "┃⚪️    ⚪️┃";

const line = repeat(8, "━");
const topLine = "┏" + line + "┓";
const bottomLine = "┗" + line + "┛";

function repeat(index, string) {
  if (index === 0) {
    return "";
  }

  return string + repeat(index - 1, string);
}

function getDice(index) {
  switch (index) {
    case 1: return SPACE + "\n" + MIDDLE + "\n" + SPACE;
    case 2: return SPACE + "\n" + TWO_DOTS + "\n" + SPACE;
    case 3: return RIGHT + "\n" + MIDDLE + "\n" + LEFT;
    case 4: return TWO_DOTS + "\n" + SPACE + "\n" + TWO_DOTS;
    case 5: return TWO_DOTS + "\n" + MIDDLE + "\n" + TWO_DOTS;
    case 6: return TWO_DOTS + "\n" + TWO_DOTS + "\n" + TWO_DOTS;
  }
}

function delay() {
  for (let index = 0; index < 90000000; index++) {
  }
}

function blink() {
  for (let index = 0; index < 7; index++){
    animation(index);
  }

  const output = Math.ceil(Math.random() * 6);
  animation(output);
}

function animation(index) {
  console.clear();
  const dice = getDice(index);
  console.log(topLine + "\n" + dice + "\n" + bottomLine);
  delay();
}

blink();
