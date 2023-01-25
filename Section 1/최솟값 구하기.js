function solution(n) {
  let answer = n[0];
  for (let i = 1; i < n.length; i++) {
    if (answer > n[i]) answer = n[i];
  }
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

/**
 * 1. answer에 미리 배열의 첫번째 index를 할당한다.
 * 2. for문을 1부터 배열의 길이만큼 돌리고
 * 3. 배열의 나머지 요소들을 돌면서 answer보다 작은 값을 계속 할당해준다.
 */
