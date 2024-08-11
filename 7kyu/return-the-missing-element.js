// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

// Examples:
// [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
// [9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3
// ArraysFundamentals

function getMissingElement(superImportantArray) {
  //TODO
  let n = 9;
  let sum = (9 * (9 + 1)) / 2;
  let loopSum = 0;
  for (let i = 0; i < superImportantArray.length; i++) {
    loopSum += superImportantArray[i];
  }

  return sum - loopSum;
}

function getMissingElement2(arr) {
  for (let i = 0; i < 10; i++) {
    if (arr.indexOf(i) === -1) return i;
  }
}

function getMissingElement3(arr) {
  let reducedSum = arr.reduce((acc, ele) => acc + ele, 0);
  let sum = (9 * (9 + 1)) / 2;
  return sum - reducedSum;
}

function getMissingElement4(arr) {
  for (let i = 0; i < 10; i++) {
    if (!arr.includes(i)) return i;
  }
}
