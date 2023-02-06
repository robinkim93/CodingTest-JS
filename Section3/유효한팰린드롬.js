function solution(word) {
  let answer = "NO";
  const removeOtherWord = word.toLowerCase().replace(/[^a-z]/g, "");
  const reverseRemoveOtherWord = removeOtherWord.split("").reverse().join("");
  if (reverseRemoveOtherWord === removeOtherWord) answer = "YES";
  return answer;
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));

/**
 * 1. 전 문제와 같지만 알파벳을 제외해야하기 때문에 replace에 정규표현식을 사용해 나머지 글자들을 제거해 알파벳만 남긴다.
 * 2. 그 이후는 전 문제와 같은 로직으로 풀이
 */
