// Number of people in the bus
// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

var number = function (busStops) {
  var passengers = 0;

  for (let i = 0; i < busStops.length; i++) {
    passengers += busStops[i][0] - busStops[i][1];
  }

  return passengers;
};

// 5
console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);

// 17
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);

// 21
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8],
  ])
);

// 0
console.log(number([[0, 0]]));
