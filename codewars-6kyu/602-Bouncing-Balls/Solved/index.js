// Bouncing Balls

// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces to two-thirds of its height (a bounce of 0.66). His mother looks out of a window 1.5 meters from the ground. How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

function bouncingBall(h, bounce, window) {
  // testing all edge cases that should return -1
  if (h <= 0.0 || bounce <= 0.0 || bounce >= 1.0 || window >= h) {
    return -1;
  }

  let views = 1;

  while ((h *= bounce) > window) {
    views += 2;
  }

  return views;
}

console.log(bouncingBall(3.0, 0.66, 1.5));
console.log(bouncingBall(30.0, 0.66, 1.5));
