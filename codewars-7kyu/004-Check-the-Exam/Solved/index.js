// Check the Exam

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

function checkExam(array1, array2) {
  var score = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      score += 4;
      console.log("correct add 4");
    } else if (array2[i].length === 0) {
      console.log("no answer");
    } else {
      score -= 1;
      console.log("wrong, -1");
    }
  }

  return score < 0 ? 0 : score;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // 6
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); // 16
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])); // 7
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])); // 0
