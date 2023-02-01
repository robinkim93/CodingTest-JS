function solution(a, b) {
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer += "D";
    else if (
      (a[i] === 1 && b[i] === 3) ||
      (a[i] === 2 && b[i] === 1) ||
      (a[i] === 3 && b[i] === 2)
    )
      answer += "A";
    else answer += "B";
  }

  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];

console.log(solution(a, b));

/**
 * 1. 크게 풀이에 문제 될 것은 없었음
 * 2. 다만 고민해봐야할 부분은 else if를 한 줄로 작성할 것인지, 아니면 케이스마다 다르게 작성할 것인지가 고민되었다.
 * 3. 고민하다보니 swtich문으로 작성할 수도 있을 거 같다는 생각이 들었음.
 */
