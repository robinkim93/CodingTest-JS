function solution(str) {
  let answer = [];
  let arrayStr = str.split("");

  let sameWordCount = arrayStr.reduce(
    (ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 1 }),
    {}
  );

  Object.entries(sameWordCount).map((item) => {
    if (item[1] !== 1) {
      answer.push(item[0], item[1]);
    } else {
      answer.push(item[0]);
    }
  });

  return answer.join("");
}

let str = "KKHSSSSSSSE";

console.log(solution(str));
