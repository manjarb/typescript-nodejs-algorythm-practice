function plusOne(digits: number[]): number[] {
  // Backward Iterate digits
  for (let i = digits.length - 1; i >= 0; i--) {
    // +1 for each value
    digits[i]++;
    // if value is less than 10 exit loop
    if (digits[i] < 10) {
      break;
    }
    // else set current digit to 0
    // go to next position
    digits[i] = 0;

    // if i === 0 and digits[i] >= 10
    if (i === 0) {
      digits.unshift(1);
    }
  }

  return digits;
}

// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
console.log(plusOne([9, 9]));
// console.log(1234.split())
