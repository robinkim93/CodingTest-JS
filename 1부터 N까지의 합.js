function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(10));

/**
 * 1. 문제없이 풀었지만 for문 중간에서 처음엔 i < n + 1을 해줬음.
 * 2. 왜냐면 0부터 시작하기 때문에 n을 하나 더해서 돌리려고 했는데
 * 3. 생각해보니 n와 같을때까지 돌려주면 되는것이기 때문에 조건식을 수정하였음.
 */
