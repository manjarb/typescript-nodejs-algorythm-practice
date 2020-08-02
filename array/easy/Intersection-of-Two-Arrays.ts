function intersect(nums1: number[], nums2: number[]): number[] {
  const result: number[] = [];

  // Iterate Over first input
  for (let i = 0; i < nums1.length; i++) {
    // Iterate Over second input
    for (let j = 0; j < nums2.length; j++) {
      // if number exist add result array
      if (nums1[i] === nums2[j]) {
        result.push(nums2[j]);
        // remove added number
        nums2.splice(j, 1);
        j = nums2.length;
      }
    }
  }

  return result;
}

// intersect([1, 2, 2, 1], [2, 2]);
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
