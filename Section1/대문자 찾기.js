function solution(str) {
  let answer = 0;
  for (let x of str) {
    if (x === x.toUpperCase()) {
      answer++;
    }
  }
  return answer;
}

const str = "KoreaTimeGood";

console.log(solution(str));

/**
 * 1. for of문으로 문자열의 요소를 순회하는 반복문을 만들고, 안에서 특정 요소와 특정 요소의 toUpperCase 즉, 대문자와 같은지 확인
 * 2. 값이 true라면 answer에 1씩 카운팅 해준다.
 * 3. 또 다른 방법은 아스키코드를 이용할 수 있는데
 * 4. charCodeAt() 을 통해 해당 글자의 아스키코드를 받아온다.
 * 5. 대문자는 아스키코드 65~90번까지, 소문자는 97~122번까지이기 때문에
 * 6. 조건문을 65~90까지라면 answer를 1씩 카운팅하는 식으로도 해결할 수 있다.
 * 7. 프로그래머라면 적어도 소문자 대문자의 아스키코드 정도는 상식으로 알아두자!
 */
