

//메서드 체이닝
//--->Hello로 변경하는 법
//split - 잘라주는 명령어
//조건 1. 무엇이 남는지 ? 확인하기
//조건 2. 값에 사용할 수 있는 메서드가 따라와야 함
let helloTest = "H-e-l-l-o"; //문자는 연결된 '배열' 개념이다
let helloTestArr = helloTest.split("-"); //split - 잘라주는 명령어
console.log(helloTestArr); //['H', 'e', 'l', 'l,', 'o']

//reverse - 배열을 뒤집어주는 명령어
let reverseHelloTestArr = helloTestArr.reverse();
console.log(reverseHelloTestArr);

//join - 합쳐지는 명령어
let helloStr = helloTestArr.join("");
console.log(helloStr);

let resultStr = reverseHelloTestArr.join("");
console.log(resultStr); //olleH

//메소드 체이닝-메소드를 순차적으로 연결하는 행위
let finalStr = helloTest.split("-").reverse().join(""); 
console.log(finalStr); //olleH


//객체에서 메소드체이닝
const obj = {
  arr : ['a','b','c','d','e'],
  number: 10,
};

let testStr = obj.arr.reverse().join("");
console.log(testStr); //edcba

let testStrr = obj.str?.reverse().join(""); //백엔드에서 사용하는.. 값이 있을지 없을지 긴가민가 할 때 씀 '?'
console.log(testStr);