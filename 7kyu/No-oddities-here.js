// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// ArraysFundamentals

function noOdds(values) {
  // Return all non-odd values
  let res = values.filter((val) => val % 2 == 0);
  return res;
}
