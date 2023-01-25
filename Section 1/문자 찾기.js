function solution(str, char) {
  let answer = 0;
  for (let x of str) {
    if (x === char) {
      answer++;
    }
  }
  return answer;
}

const str = "COMPUTERPROGRAMMING";
const char = "R";

console.log(solution(str, char));

/**
 * 1. for of문으로 str라는 문자열의 요소들을 순회시키고
 * 2. 특정 요소가 찾아야하는 문자인 char와 같으면 answer에 1씩 더해주는 식을 작성
 */
