function solution(arr) {
  let answer = 0;
  let sumRow = 0;
  let sumColumn = 0;

  for (let i = 0; i < arr.length; i++) {
    sumRow = 0;
    sumColumn = 0;
    for (let j = 0; j < arr.length; j++) {
      sumRow += arr[i][j];
      sumColumn += arr[j][i];
    }
    answer = Math.max(answer, sumRow, sumColumn);
  }
  sumRow = 0;
  sumColumn = 0;

  for (let i = 0; i < arr.length; i++) {
    sumRow += arr[i][i];
    sumColumn += arr[i][arr.length - i - 1];
  }
  answer = Math.max(answer, sumRow, sumColumn);

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.log(solution(arr));
