//나머지 연산자
let num = Math.floor(Math.random() * 10);
console.log(num); //0
console.log(num % 2); //1

//거듭제곱 **
console.log(2 ** 4); // 2의 4제곱 **쓴다
console.log(Math.sqrt)

//연산자 줄여 쓰기
let num2 = 5;
num2 = num2 + 5;
console.log(num2);

let num3 = 5;
num3 += 5;
console.log("연산자 줄여쓰기",num3);

//증가 감소 연산자
let num4 = 10;
console.log('증가 감소 연산자',num4++); //10 *변수 뒤에 ++을 붙이면 해당줄이 아닌 다음 줄 부터 +1이 반영 됨*
console.log(num4); //11
console.log(++num4); //12

//비교 연산자
let a = 5;
let b = '5';

console.log('비교 연산자',a === b); //false
console.log('비교 연산자',a !== b); //true