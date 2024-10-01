let a = [2, 3, 4, 5, 5, 6, 4];

a.sort();
// console.log(a);

// ------------star pattern---------
// ******
// ******
// ******
function squareStarPattern(width, height) {
  for (let i = 0; i < height; i++) {
    let row = "";
    for (let j = 0; j < width; j++) {
      row += "*";
    }
    console.log(row);
  }
}

squareStarPattern(6, 3);
