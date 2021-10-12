// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

var oddOrEven = function (num) {
  // the '%' checks if there is a remainder
  // '% 2' is checking that there is no remainder after dividing by 2, which would equal even

  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};
