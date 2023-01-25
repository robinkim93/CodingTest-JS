function solution(str) {
  let answer = "";
  for (let x of str) {
    if (x === x.toLowerCase()) answer += x.toUpperCase();
    else answer += x.toLowerCase();
  }
  return answer;
}

const str = "StuDY";

console.log(solution(str));

/**
 * 1. for of문을 통해 문자열을 순회하는 반복문을 선언
 * 2. 요소가 소문자(toLowerCase())라면 answer에 toUpperCase()로 바꿔서 더해주고
 * 3. 대문자(toUpperCase())라면 answer에 toLowerCase()로 소문자로 바꿔서 더해준다.
 */
