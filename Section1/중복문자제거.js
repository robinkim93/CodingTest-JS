function solution(str) {
  let answer = "";

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) answer += str[i];
  }

  return answer;
}

let str = "ksekkset";

console.log(solution(str));

/**
 * 1. indexOf의 특성을 몰라 해결하지 못한 문제
 * 2. indexOf는 제일 첫번째 요소만 도출해낸다.
 * 3. 이 점을 이용해 indexOf가 찾은 요소의 위치와 for문의 i값이 같은 것은 그대로 두고
 * 4. 그 뒤로 중복된 단어가 나오면 i의 index는 정상위치의 index지만 indexOf로 찾은 index는 그 전에 만난 중복된 요소의 index를 가진다
 * 5. 이것을 이용해 조건문을 통해 같은 값을 answer에 넣어주면 됨.
 * 6. 중복된 값은 같지 않아지기 때문에 통과된다.
 */
