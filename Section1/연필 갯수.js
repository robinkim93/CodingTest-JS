function solution(n) {
  const answer = Math.ceil(n / 12);
  return answer;
}

console.log(solution(178));

/**
 * 1. 처음엔 단순히 n을 12로 나눈 값을 산출
 * 2. 모든 사람이 받기 위해선 나머지 값이 존재하면 안됨
 * 3. 왜냐면 178을 12로 나누면 14.8이 나오는데
 * 4. 한 다스는 12개가 통으로 들어있기 때문에 정확한 값이 아님.
 * 5. Math에 있는 ceil을 사용해서 소수점 아래로 값이 있다면 모두 올려줬음.
 */
