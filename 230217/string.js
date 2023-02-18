//문자열
//문자열도 배열이다
const str = "Hello, World! World"; //H + e + l + l + o

 //문자열의 길이, length
console.log(str.length); //19
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

//문자열 위치 찾기, indexOf 0부터 시작 7번째 해당단어부터 시작
console.log(str.indexOf("World")); //7

//문자열 자르기, slice(시작위치, 종료위치) 
console.log(str.slice(0,6)); //Hello

//slice와 indexOF 같이 쓰기
// console.log(str.slice(0, str.indexoF("World")));

//문자열 바꾸기, replace
console.log(str.replace("World", "뽀로로"));
console.log(str);

//문자열 반복하기, repeat(반복 횟수) 
const str2 = "우영";
const longStr = str2.repeat(10) + "우";
console.log(longStr);

//앞 뒤 공백 문자 제거하기 trim()
const str3 = "     Hello, World     ";
console.log(str3.trim());


// function solution(n) {
//   const answer = "수박";
//   if (n === 4) {
//     const repeatAnswer = answer.repeat(4);
//     console.log(repeatAnswer);
//   }else ( n === 3) {
//     const repeatAnswer = answer.repeat(3);
//     console.log(repeatAnswer);
//   }
// }

//수박 코테 문제
function solution(n) {
  let answer = '';
  for (let i = 1; i < n; i++){
    if( i % 2 === 1) {
      answer += "수";
    } else {
      answer += "박";
    }
  }
}

function solution(n) {
  let answer = '';
  const str = "수박";
  return n%2 === 1? str.repeat(Math.floor(n/2))+"수" : str.repeat(Math.floor(n/2))
}
