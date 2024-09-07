// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]
// ArraysFundamentalsAlgorithms

function isPresent(b, element) {
  for (let i = 0; i < b.length; i++) {
    if (b[i] === element) {
      return true;
    }
  }
  return false;
}

function arrayDiff(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (!isPresent(b, a[i])) {
      result.push(a[i]);
    }
  }

  return result;
}

// (or)---------------------

function arrayDiff2(a, b) {
  let result = a.filter((item) => {
    if (!isPresent(b, item)) {
      return true;
    }
  });

  return result;
}
