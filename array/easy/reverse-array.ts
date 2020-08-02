function rotate(nums: number[], k: number): void {
  const rArray: number[] = [];
  nums.forEach((num, i) => {
    const newIndex = i + k;
    console.log(newIndex, " :newIndex");
    console.log(nums.length, " :nums.length");
    console.log(newIndex % nums.length, " :newIndex % nums.length");
    console.log("---");
    rArray[newIndex % nums.length] = num;
  });

  console.log(rArray);
}

rotate([1, 2, 3, 4, 5, 6, 7], 3);
rotate([1, 2], 4);
