function solution(word) {
  let answer = "NO";
  const removeOtherWord = word.toLowerCase();
  const reverseRemoveOtherWord = removeOtherWord.split("").reverse().join("");
  if (reverseRemoveOtherWord === removeOtherWord) answer = "YES";
  return answer;
}

console.log(solution("gooG"));

/**
 * 1. 대소문자를 구분하지 않기 때문에 uppercase로 대문자 또는 lowercase로 소문자로 통일해준다.
 * 2. split으로 글자마자 잘라서 배열로 만들고 그 배열을 reverse로 거꾸로 돌려서 join으로 다시 문자열로 변환해준다.
 * 3. lowercase로 만든 입력값과 reverse로 돌린 변수가 같다면 answer를 Yes로 바꿔준다.
 */
