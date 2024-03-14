// Suppose a student can earn 100% on an exam by getting the answers all correct or all incorrect. Given a potentially incomplete answer key and the student's answers, write a function that determines whether or not a student can still score 100%. Incomplete questions are marked with an underscore, "_".

// ["A", "_", "C", "_", "B"]   # answer key
// ["A", "D", "C", "E", "B"]   # student's solution

// ➞ True

// # Possible for student to get all questions correct.

// ["B", "_", "B"]   # answer key
// ["B", "D", "C"]   # student's solution

// ➞ False

// # First question is correct but third is wrong, so not possible to score 100%.

// ["T", "_", "F", "F", "F"]   # answer key
// ["F", "F", "T", "T", "T"]   # student's solution

// ➞ True

// # Possible for student to get all questions incorrect.
// Examples

// (["B", "A", "_", "_"], ["B", "A", "C", "C"]) ➞ True

// (["A", "B", "A", "_"], ["B", "A", "C", "C"]) ➞ True

// (["A", "B", "C", "_"], ["B", "A", "C", "C"]) ➞ False

// (["B", "_"], ["C", "A"]) ➞ True

// (["B", "A"], ["C", "A"]) ➞ False

// (["B"], ["B"]) ➞ True

// (["_"], ["B"]) ➞ True
// Notes

// Test has at least one question.
// len(key) == len(answers)
// ALGORITHMSARRAYS

function possiblyPerfect(key, answers) {
  let first = null;
  let i;
  for (i = 0; i < key.length; i++) {
    if (key[i] !== "_") {
      if (key[i] === answers[i]) {
        first = true;
      } else {
        first = false;
      }
      break;
    }
  }

  if (first === null) return true;
  for (i = i + 1; i < key.length; i++) {
    if (key[i] !== "_") {
      if (first === true) {
        if (key[i] !== answers[i]) return false;
      } else {
        if (key[i] === answers[i]) {
          return false;
        }
      }
    }
  }
  return true;
}
