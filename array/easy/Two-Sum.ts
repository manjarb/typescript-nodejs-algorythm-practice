// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSum(nums: number[], target: number): number[] {
  const result: number[] = [];
  // Iterate to nums for first value
  for (let i = 0; i < nums.length; i++) {
    // Iterate to nums for second value
    for (let j = i + 1; j < nums.length; j++) {
      // if nums[i] + nums[j] === target
      if (nums[i] + nums[j] === target) {
        // assign correct index to array result
        result[0] = i;
        result[1] = j;
        // exit both for loop
        return result;
      }
    }
  }

  return result;
}

// console.log(twoSum([2, 7, 7, 15, 2], 9));
console.log(twoSum([2, 5, 5, 11], 10));
