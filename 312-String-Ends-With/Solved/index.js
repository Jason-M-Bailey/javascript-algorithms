// String ends with?

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending) {
  return str.endsWith(ending) ? true : false;
}

console.log(`true === ${solution("abc", "bc")}`);

console.log(`false === ${solution("abc", "d")}`);

console.log(`true === ${solution("Hello world", "world")}`);
