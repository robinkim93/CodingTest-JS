function solution(day, arr) {
  const answer = arr.filter((item) => String(item).charAt(1) === String(day));
  return answer.length;
}

function solution2(day, arr) {
  return arr.filter((item) => item % 10 === day).length;
}

const arr = [12, 20, 54, 30, 87, 91, 30];

console.log(solution(0, arr));

/**
 * 1. 두 가지 방법이 떠올랐는데 하나는 조건에 맞다면 count를 하는 것
 * 2. 나머지 하나는 조건에 맞는 요소들로 새로운 배열을 만들어 그 길이를 재는 것
 * 3. 나는 두번째 방법으로 해결했음.
 * 4. filter는 배열의 요소들을 순회하며 조건에 맞는 요소들로 만들어진 새로운 배열을 반환한다.
 * 5. 요소의 두번째 글자에 접근하기 위해서 요소를 string으로 바꿔주고 charAt으로 2번째 글자를 반환한다.
 * 6. 반환된 2번째 글자와 마찬가지로 비교하기 위해 day를 string으로 바꿔 true인 값들로 이루어진 새로운 배열을 반환한다.
 * 7. 반환된 배열의 길이를 length로 재서 정답을 반환한다.
 *
 * 1. 다른 방법은 각 요소를 10으로 나눈 나머지 값이 day와 같은 요소만 filter로 새 배열을 만든 후 length를 바로 return해도 된다.
 */
