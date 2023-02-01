function solution(str) {
  let answer = 1;
  let max = str[0];

  for (let i = 1; i < str.length; i++) {
    if (max < str[i]) {
      max = str[i];
      answer++;
    }
  }
  return answer;
}

let str = [130, 135, 148, 140, 145, 150, 150, 153];

console.log(solution(str));

/**
 * 1. 처음 한 사람은 무조건 보이기 때문에 answer를 1로 선언
 * 2. 로직을 고민했을 때는 max라는 변수를 가장 큰 사람으로 두고 뒷 사람과 비교했을 때 뒷 사람이 더 크다면 max를 뒷 사람으로 바꿔주고 answer에 1씩 count해준다.
 * 3. 바로 해결할 수 있었음.
 */
