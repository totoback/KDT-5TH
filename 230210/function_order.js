//호이스팅
//먼저 함수 선언해도 문제는 없음
sayHello();

let sayHello = function() { //함수 표현식
  console.log('Hello');
}
