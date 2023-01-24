function solution(arr) {
  let answer = arr;
  const sum = arr.reduce((acc, value) => acc + value, 0);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }
  return answer;
}

const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

console.log(solution(arr));

/**
 * 1. 방법을 고민해봐도 방법이 떠오르지 않아서 강의를 먼저 보게 되었음.
 * 2. 방식은 reduce로 배열의 전체요소를 모두 더한 값에서 어떠한 두 값을 뺐을 때 100이 되는 수를 찾는 방식
 * 3. 배열 내의 총 합을 구하려면 arr.reduce((acc, value) => acc+value, 0)으로 acc에 계속 value를 누적해주면서 구할 수 있다.
 * 4. 조건문을 사용해 전체에서 배열의 요소들을 순회하며 짝지은 두 값의 합을 뺐을 때 100인 값을 찾는 식을 적어준다.
 * 5. i와 j를 splice로 index값을 줘 잘라내는데, 앞에 있는 값을 먼저 자르면 index 값이 달라지기 때문에 뒤에서 부터 잘라준다.
 */
