function solution(str) {
  let answer;
  let min = 3;
  for (let x of str) {
    if (x.length >= min) {
      min = x.length;
      answer = x;
    }
  }
  return answer;
}

let str = ["teacher", "time", "student", "beautiful", "good"];

console.log(solution(str));

/**
 * 1. 방법이 떠오르지 않아서 영상을 보고 해결했음.
 * 2. 문자열 길이의 조건은 길이가 3 이상이기 때문에
 * 3. min을 3으로 두고 for of 문으로 순회하면서
 * 4. 문자열의 길이가 min 이상이면, min을 해당 문자열의 길이로 바꿔주고 (다른 요소들의 길이와 비교하기 위해)
 * 5. answer를 해당 문자열로 바꿔주면 된다.
 */
