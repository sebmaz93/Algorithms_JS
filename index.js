//   whirlpool(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]

const whirlpool = n => {
  results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      results[i][endCol] = counter;
      counter++;
    }
    endCol--;

    for (let i = endCol; i >= startCol; i--) {
      results[endRow][i] = counter++;
      counter++;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      results[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }
  return results;
};
