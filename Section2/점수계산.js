function solution(str) {
  let answer = 0;
  let acc = 0;
  for (let x of str) {
    if (x === 1) {
      acc++;
      answer += acc;
    } else acc = 0;
  }
  return answer;
}

let str = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

console.log(solution(str));

/**
 * 1. 변수선언을 하나 더 하는 것에 대한 생각은 했으나 방법을 찾지 못해 답을 보고 풀이를 했음.
 * 2. for of문으로 str의 요소들을 순회하며 요소가 1이라면 acc라는 누적숫자를 추가하고 그 누적숫자를 answer에 더해준다.
 * 3. str 요소가 0이라면 acc에 누적된 값을 초기화하여 다음 요소에서 1을 만났을 때 다시 acc가 1이 될 수 있도록 초기화 한다.
 */
