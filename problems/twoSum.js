// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

arrayOfNumbers = [1, 2, 3, 4, 5];

let findTheIndexsOfTheSumEqual = (array, target) => {
  console.log(`The array is ${array} and the target is ${target}`);
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j <= array.length - 1; j++) {
      if (array[i] + array[j] == target) {
        return [i, j];
      }
    }
  }
};

console.log(findTheIndexsOfTheSumEqual(arrayOfNumbers, 9));
