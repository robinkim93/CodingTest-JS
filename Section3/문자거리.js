function solution(s, t) {
  let answer = [];
  let maxLength = 100;

  for (let x of s) {
    if (x === t) {
      maxLength = 0;
      answer.push(maxLength);
    } else {
      maxLength++;
      answer.push(maxLength);
    }
  }

  maxLength = 100;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      maxLength = 0;
    } else {
      maxLength++;
      answer[i] = Math.min(answer[i], maxLength);
    }
  }

  return answer;
}

let s = "teachermode";
let t = "e";

console.log(solution(s, t));

/**
 * 1. 역시 못 풀어서 보고 풀었음.
 * 2. 두 방향에 대한 for문을 돌렸음. (앞에서 부터 한 번, 뒤에서 부터 한 번)
 * 3. 앞에서부터 t와 같은 요소를 만났을 때는 0을 push하고, 만나지 않았을 때는 1을 더한 값을 push를 했다.
 * 4. 뒤에서부터도 마찬가지인데, 같은 요소를 만났을 때는 0으로 초기화만 해주고,
 * 5. 만나지 않았을 때는 1을 더하는 것 까지는 같은 로직이지만, 이 때 이미 answer에 들어있는 값과 비교해서 더 작은 것으로 값을 대체해준다.
 */
