function solution(str) {
  return str.toUpperCase();
}

function solution(str) {
  let answer = "";
  for (let x of str) {
    if (x === x.toLowerCase()) answer += x.toUpperCase();
    else answer += x;
  }
  return answer;
}

const str = "ItisTimeToStudy";

console.log(solution(str));

/**
 * 1. toUpperCase()를 사용해줌.
 * 2. 다른 풀이로는 str의 요소를 순회하는 for of문을 선언 후,
 * 3. 요소가 toLowerCase()라면 toUpperCase()를 사용해서 대문자로 바꿔주고
 * 4. 아니라면 그냥 그대로 넣어주는 식으로 작성 할 수 있음
 *
 * for(let x of str) {
 * if(x === x.toLowerCase()) answer += x.toUpperCase()
 * else answer += x
 * }
 */
