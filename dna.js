function repeat(index, string) {
  if (index < 0) {
    return "";
  }
  return string + repeat(index - 1, string);
}

function delay() {
  for (let index = 0; index < 90000000; index++) {
  }
}

function dna() {
  for (let index = 0; index < 50; index += 0.30) {
    const value1 = Math.sin(index) * 10 + 50;
    console.log(repeat(value1, " ") + "✨");
    delay();

    const value2 = Math.sin(-index) * 10 + 50;
    console.log(repeat(value2, " ") + "✨");
    delay();
  }
}

dna();
