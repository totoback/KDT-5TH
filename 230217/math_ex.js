//실습

// 1.주어진 배열에서 가장 큰 수와 작은 수의 찾아서 소수점을 버림 처리, 해당 수 절대값의 평균을 구하기
let nums = [-1.23, 13, 14.52, -33.53, 30];
//배열의 최대 최소값 찾기
console.log(Math.floor(Math.max(...nums))); //30
console.log(Math.floor(Math.min(...nums))); //-34
//절대값의 평균구하기
let sum = 0;
for (let i=0; i<nums.length; i++){
  sum = sum + Math.abs(nums[i]);
}
console.log(sum/nums.length); //18.456

// 2. 0 ~ 100 까지의 숫자 중에서 랜덤한 정수가 나오도록 만들기
console.log(Math.floor(Math.random() * 100)); //74


// 코테 실습 문제
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.
// 입출력 예
// n	return
// 12	28
// 5	6
// 입출력 예 설명
// 입출력 예 #1
// 12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

// 입출력 예 #2
// 5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.
const tc = 12;
function solution(num) {
  let answer = 0;
  for(let i = 1; i<= num; i++){
    if(num % i === 0) answer = answer + i;
    
  }
  return answer;
}
console.log(solution(tc)); //28