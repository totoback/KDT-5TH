//전개 연산자
// 배열의 값을 , 단위로 구분 하여 전개시켜주는 연산자
const fruits = ["사과","바나나","수박","망고","딸기"];
console.log(fruits); //[ '사과', '바나나', '수박' ]
console.log(...fruits); //사과 바나나 수박

//나머지 연산자(매개 변수 일 때)
//(...rest) 배열에 맞는 함수 사용 - map써도 되고..
function conLog(a,b,...c) {
  console.log(a,b,c); //사과 바나나 [ '수박', '망고', '딸기' ]
}

// conLog(fruits[0],fruits[1],fruits[2]); //사과 바나나 수박
conLog(...fruits); //사과 바나나 수박

const str = "apple";
const strToArr = [...str];
console.log(strToArr); //[ 'a', 'p', 'p', 'l', 'e' ]
// str.map(item => console.log(item));//문자열에는 map이란 함수를 쓸 수 없다.

const strToArr2 = str.split("");//문자열을 이기준으로 잘라서 배열로 만든다
console.log(strToArr2); //[ 'a', 'p', 'p', 'l', 'e' ]