// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

function rotate(matrix: number[][]): number[][] {
  // from sample position will change in this pattern
  // first row
  // [0,0] -> [0,3]
  // [0,1] -> [1,3]
  // [0,2] -> [2,3]
  // [0,3] -> [3,3]
  // second row
  // [1,0] -> [0,2]
  // [1,1] -> [1,2]
  // [1,2] -> [2,2]
  // [1,3] -> [3,2]
  // third row
  // [2,0] -> [0,1]
  // [2,1] -> [1,1]
  // [2,2] -> [2,1]
  // [2,3] -> [3,1]

  // ((input 2D size - 1) - first index) will be come new second index
  // original second index will become first index
  // Ex // [0,1] -> [1,3]

  // find 2D size
  const size = matrix.length - 1;
  const result: number[][] = [];
  // Iterate to first D
  for (let i = 0; i < matrix.length; i++) {
    // Iterate to second D
    for (let j = 0; j < matrix[i].length; j++) {
      // If result(input 2D size - 1) - first index) not exist create empty one
      if (!result[j]) {
        result[j] = [];
      }
      // Assign value from upper formula
      // ((input 2D size - 1) - first index) will be come new second index
      // original second index will become first index
      result[j][size - i] = matrix[i][j];
    }
  }

  matrix = result;
  console.log(matrix, " :m");

  return result;
}

console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
);

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
