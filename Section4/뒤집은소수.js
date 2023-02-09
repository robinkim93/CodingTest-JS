function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(str) {
  let answer = [];
  for (let x of str) {
    let reverseInt = parseInt(x.toString().split("").reverse().join(""));

    if (isPrime(reverseInt)) answer.push(reverseInt);
  }

  return answer;
}

let str = [32, 55, 62, 20, 260, 370, 200, 30, 100];

console.log(solution(str));

/**
 * 1. 소수란 1과 자기 자신 외에 다른 수로 나누어 떨어지는 수가 없는 수를 말한다.
 * 2. for of문 안에서 reverseInt처럼 형변환 -> split -> reverse -> join의 순으로 돌리면 원래 수가 reverse된 string이 생긴다.
 * 3. 이것을 parseInt해서 정수로 만들어주고,
 * 4. 이 정수가 소수인지 판별해야 하는데,
 * 5. 1은 답이 될 수 없기 때문에 i는 2부터 시작하고, 인자로 받은 num까지 나누어 떨어지는 수가 있으면 false를 내뱉어야 하는데,
 * 6. 16이라면 1*16, 2*8, 4*4, 8*2, 16*1 이 약수 조합이 되고, 이 때 16의 제곱근인 4를 기준으로 뒤 쪽으로는 볼 필요가 없기 때문에
 * 7. num의 제곱근을 구해주는 Math.sqrt를 사용해 제곱근까지만 for문이 돌도록 한다.
 */
