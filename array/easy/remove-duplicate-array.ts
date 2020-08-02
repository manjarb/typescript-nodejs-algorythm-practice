function containsDuplicate(nums: number[]): boolean {
  let i = 0;
  let newA = [nums[0]];
  for (let j = 1; j < nums.length; j++) {
    if (newA[i] !== nums[j]) {
      console.log(newA[i], " :newA[i]");
      console.log(nums[j], " :nums[j]");
      i++;
      newA.push(nums[j]);
    }
  }

  return newA.length !== nums.length;
}

console.log(containsDuplicate([1, 1, 2, 2, 2, 3, 3, 5, 5, 5, 7, 7]));
