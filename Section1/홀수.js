function solution(n) {
  let answer = [];
  let sum = 0;
  let min = 100;
  for (let x of n) {
    if (x % 2 === 1) {
      sum += x;
      if (min > x) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

/**
 * 1. 홀수는 2로 나눴을 때 나머지가 1이 되는 수이다 (0 제외)
 * 2. for ~of 문으로 배열 전체 요소를 순회하는 for문을 사용했다.
 * 3. 1번과 같은 조건식을 걸어주고 홀수 일 때, sum에 해당 요소를 계속 더해준다.
 * 4. 또 중첩으로 조건문을 작성해 미리 100으로 선언해둔 min보다 작은 요소를 재할당해준다.
 * 5. 왜냐면 입력된 값에서 100보다 큰 값은 있을 수 없기 때문에 더 적은 값을 계속 할당해주면 된다.
 * 6. 그리고 for문 밖에서 answer에 push를 사용해 값을 넣어주면 된다.
 */
