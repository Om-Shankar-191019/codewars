// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// ArraysFundamentals

function sumTwoSmallestNumbers(numbers) {
  // Code here

  let secondLow = null;
  let lowest = 0;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] <= numbers[lowest]) {
      secondLow = lowest;
      lowest = i;
    } else if (numbers[i] > numbers[lowest]) {
      if (secondLow === null || numbers[i] < numbers[secondLow]) {
        secondLow = i;
      }
    }
  }
  return numbers[secondLow] + numbers[lowest];
}
