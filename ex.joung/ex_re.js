// Typeof를 사용해서 아래의 문구를 만드세요.
// ""안에 문구는 typeof의 결과값으로 출력해야 합니다.
// 출력문구
// -"number" ins't "string" data type.
// typeof를 "bloolean"이나 "num"에 사용하면, "object"결과를 얻을 수 있습니다.


let num = 1;
let str = "안녕";
let bool = true;
let obj = {};

console.log(`${typeof num} ins't ${typeof str} data type.`);
console.log(`${typeof bool}이나 ${typeof num}에 사용하면, ${typeof obj}결과를 얻을 수 있습니다.`);

// - 크럷 가드 프로그램을 만들어 봅시다!
// - if / else만 사용해서 구현해야 합니다(else if는 사용 X)
// - 성인(isAdult)이거나, VIP면 -> 통과
// - 성인이면서 VIP여도 취했으면(isDrunken) -> 돌아가
// - 성인이 아니고 VIP도 아니면서 취했어도, 돈(money)을 줬으면 -> 통과

let isAdult = true;
let VIP = true;
let isDrunken = false;
let money = true;

if(((isAdult && VIP) || !isAdult) || money === user){
  console.log("통과");
}else{
  console.log("돌아가");
}

// - if 문을 이용해서 오늘 요일을 alert으로 출력하는 프로그램 작성
// - 힌트
// - 오늘의 날짜 얻는 방법 : new Date().getDay();를 사용하면 오늘의 요일을 숫자로 받을 수 있다.
// - 0:일요일 / 1:월요일 / 2:화요일 / 3:수요일 / 4:목요일 / 5:금요일 / 6:토요일

// let today = new Date().getDay();
let todayArr = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"]
for (let i = 0; i <= todayArr.length; i++){
  if (new Date().getDay() === i){
    console.log(todayArr[i]);
  }
}


//구구단
// for(let i = 1; i < 10; i++){
//   console.log(`2x${i}=${i*2}`);
// }

for(let i = 2; i < 10; i++){
  for (let j = 1; j < 10; j++){
    console.log(`${i}x${j}=${i*j}`);
  }
}

// 6. 0~100의 숫자 중에서 2또는 5의 배수 총합 구하기
// - 힌트 : 나머지 연산자 % 사용 / 5%3=2(5를 3으로 나눈 나머지 2의 값을 반환)

let sum2 = 0;
for(let i = 0; i <= 100; i++){
  if (i % 2 === 0 || i % 5 === 0){
    sum2 = sum2 + i
  }
}
console.log(sum2);


const kdtCurriculum = ["html","css","js","bootstrap","backend"]
// const arrAll = kdtCurriculum.slice();
const arrAll = kdtCurriculum.split();
console.log(arrAll);