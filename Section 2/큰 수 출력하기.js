function solution(str) {
  let answer = [str[0]];

  for (let i = 1; i < str.length; i++) {
    if (str[i] > str[i - 1]) {
      answer.push(str[i]);
    }
  }
  return answer;
}

let str = [7, 3, 9, 5, 6, 12];

console.log(solution(str));

/**
 * 1. 이중 for문을 돌리려고 했으나 하나의 값이 모든 값과 비교가 되었음.
 * 2. 첫번째 요소는 무조건 출력해야하니 answer에 넣고 시작
 * 3. for문에서 0번 index는 제외해야하니 1부터 시작하고
 * 4. i번째 index가 i - 1번째 index보다 크다면
 * 5. 해당 요소를 push해서 반환한다.
 */
