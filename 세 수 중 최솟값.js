function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (answer > c) answer = c;
  return answer;
}

console.log(solution(77, 4, 56));

/*
 * 1. a와 b를 비교해 a가 b보다 크다면 answer를 a로 할당
 * 2. b가 크다면 answer를 b로 할당
 * 3. 나머지 남은 c는 answer와 비교해서 c가 answer보다 크다면 answer는 c
 * 4. 아니면 그대로 b가 할당된 answer를 return
 */
