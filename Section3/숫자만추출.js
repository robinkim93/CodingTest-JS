function solution(word) {
  let answer = parseInt(word.replace(/[^0-9]/g, ""));
  return answer;
}

console.log(solution("g0en2T0s8eSoft"));

/**
 * 1. 정규표현식 사용해서 문자열에서 숫자를 제외한 나머지를 전부 제거
 * 2. 숫자로 반환해야하기 때문에 parseInt를 사용해줬음.
 */
