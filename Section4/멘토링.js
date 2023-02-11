function solution(str) {
  let answer;
  let count = [];

  str.map((item) => {
    for (let i = 0; i < item.length - 1; i++) {
      for (let j = i + 1; j < item.length; j++) {
        count.push([item[i], item[j]]);
      }
    }
  });

  const test2 = count.reduce(
    (acc, v) => ({ ...acc, [v]: (acc[v] || 0) + 1 }),
    {}
  );

  answer = Object.entries(test2).filter(
    (item) => item[1] === str.length
  ).length;

  return answer;
}

let str = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(solution(str));
