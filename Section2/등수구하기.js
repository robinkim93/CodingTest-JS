function solution(str) {
  let answer = Array.from({ length: str.length }, () => 1);

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i] < str[j]) answer[i]++;
    }
  }

  return answer;
}

let str = [87, 89, 92, 100, 76];

console.log(solution(str));

/**
 * 1. 해당 내용도 방법이 떠오르지 않아서 고민하다 답을 보고 풀이를 했음.
 * 2. 일단 새로운 배열을 만들어내는 method를 알게 되었음.
 * 3. 이중 for문을 통해서 첫번째 요소와 나머지 요소들을 비교하는 문을 작성하고
 * 4. i번째 요소가 j번째 요소보다 작을 때 계속해서 순위에 1을 더해서 최종 순위를 결정할 수 있었음.
 * 5. 기억해야 할 것은 특정 요소를 다른 모든 요소와 비교하려고 할 때는 이중 for문을 작성하는 것이 가장 편한 방법이라는 것임.
 */
