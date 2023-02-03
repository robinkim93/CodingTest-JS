function solution(arr) {
  let answer = 0;
  let length = arr.length;
  // 상하좌우 순
  let dx = [0, 0, -1, 1];
  let dy = [-1, 1, 0, 0];
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          nx >= 0 &&
          nx < length &&
          ny >= 0 &&
          ny < length &&
          arr[i][j] <= arr[nx][ny]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

console.log(solution(arr));

/**
 * 1. 혼자 풀지 못했음...
 * 2. 네방향 탐색이라는 유형으로 for문을 하나 더 돌려서 좌표를 네방향으로 움직여놓고 그 값과 원래의 값을 비교하는 문제 유형
 * 3. dx, dy라는 추가적인 배열을 통해 for문을 돌리면서 네방향으로 옮겨줄 수 있음.
 * 4. dx, dy로 움직인 nx, ny는 0번 인덱스보다 작아질 수 없기 때문에 조건문에 넣어줬음.
 * 5. 마찬가지로 nx, ny는 arr의 길이 이상 넘어갈 수 없기 때문에 그것 또한 조건문에 &&으로 넣어줬음.
 */

// if문에 중괄호가 필수는 아니지만 지금처럼 flag=0과 break 여러 문장을 실행할 경우에는 감싸줘야한다.
// 가독성을 위해서라도 한 줄만 존재하는 경우에도 중괄호를 써주는 것이 좋다.
