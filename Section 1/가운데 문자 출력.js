function solution(str) {
  let answer;
  let mid = Math.floor(str.length / 2);
  if (str.length % 2 === 1) answer = str.substr(mid, 1);
  else answer = str.substr(mid - 1, 2);
  return answer;
}

let str = "good";

console.log(solution(str));

/**
 * 1. substring은 첫번째 인자는 포함되고 두 번째 인자는 포함되지 않는다
 * 2. study라는 글자를 study.substring(2,3)을 하면 2번째 index인 u는 남고 d는 남지 않는다.
 * 3. substr은 첫번째 인자에 시작 index를 두번째 인자에 시작 index부터 몇글자를 뽑을 것이냐를 쓸 수 있다.
 * 4. 중간글자를 빼기 위해서 문자열을 2로 나눈 값을 floor로 버림 처리해줌.
 * 5. 홀수일 경우는 중간 하나의 문자만
 * 6. 짝수일 경우는 중간 두개의 문자를 반환한다.
 */
