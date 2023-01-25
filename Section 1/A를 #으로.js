function solution(n) {
  let answer = n.replaceAll("A", "#");
  return answer;
}

console.log(solution("BANANA"));

/**
 * 1. replace()를 사용하는 것은 바로 유추 가능했음.
 * 2. replace 사용 시, 첫번째 A만 변경이 되었기 때문에 replaceAll()을 사용했음.
 * 3. replace를 사용할 때는 정규표현식으로 첫번째 인자를 /A/ 즉, 모든 A를 찾아서 바꿔주면 가능하다.
 */
