function solution(a, b, c) {
  let max;
  let answer = "YES";
  const allAdd = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (allAdd - max <= max) answer = "NO";
  return answer;
}

console.log(solution(6, 7, 11));

/*
 * 1. 삼각형은 가장 긴 변의 길이를 제외한 나머지 두 변의 길이의 합이 가장 긴 변의 길이보다 길어야 만들어질 수 있다.
 * 2. 그래서 먼저 가장 긴 변을 찾도록 조건문을 달아서 max로 할당한다.
 * 3. a, b, c 중 어떤 값이 max에 할당되었는지 모르기 때문에 a, b, c를 모두 더한 allAdd에서 max를 빼주어 나머지 두 변의 길이의 합을 구했다.
 * 4. 세 변의 길이에서 가장 긴 변의 길이를 뺀 값이 가장 긴 변의 길이보다 짧으면 삼각형이 성립될 수 없기 때문에
 * 5. answer에 "NO"를 할당하고, 그게 아니라면 "YES"가 되니 미리 answer에 "YES"를 할당하였음.
 */
