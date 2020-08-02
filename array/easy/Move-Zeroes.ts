function moveZeroes(nums: number[]): number[] {
  // Iterate to nums
  const originLength = nums.length;
  // define actual index
  let j = 0;
  for (let i = 0; j < originLength; i++) {
    // if current value === 0
    if (nums[i] === 0) {
      // push 0 to last position
      nums.push(0);
      // remove value in current position
      nums.splice(i, 1);
      // -1 current index
      i--;
    }
    // Increase actual index
    j++;
  }

  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
