function solution(str) {
  let answer = [];
  let intCount = [];
  for (let i = 0; i < str.length; i++) {
    const convertString = String(str[i]);
    let sum = 0;
    for (let j = 0; j < convertString.length; j++) {
      sum += parseInt(convertString[j]);
      if (j === convertString.length - 1) {
        intCount.push(sum);
      }
    }
  }
  const max = Math.max(...intCount);

  for (let i = 0; i < intCount.length; i++) {
    if (intCount[i] === max) {
      answer.push(str[i]);
    }
  }

  return Math.max(...answer);
}

function solution2(str) {
  let answer;
  let max = 0;

  for (let x of str) {
    let sum = x
      .toString()
      .split("")
      .reduce((acc, v) => acc + Number(v), 0);
    if (max < sum) {
      max = sum;
      answer = x;
    } else if (max === sum) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

let str = [128, 460, 603, 40, 521, 137, 123];

console.log(solution(str));
console.log(solution2(str));

/**
 * 1. 첫 풀이는 매 글자를 for문을 돌며 형변환하고, 다시 다른 배열에 push해서 그 값과 기존 값의 index로 탐색해 값을 찾는 방법.
 * 2. for문도 많고, 형변환도 글자마다 일어나기 때문에 효율이 좋지 못할 것이라는 생각이 들었음.
 * 3. 실제 풀이는 for of문 안에서 해당 요소를 reduce로 형변환하여 값을 더해주고
 * 4. 그 값과 max값을 비교해서 원본을 answer에 할당하는 식으로 풀이가 진행되었음.
 */
