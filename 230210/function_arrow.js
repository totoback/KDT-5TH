//화살표 함수
//function을 쓰지 않고 쓰는 화살표 함수


//함수 선언문
//호이스팅을 지원하는건 선어문 밖에 없음
function sayHello() {
  console.log('hello');
}
function sum(num1, num2) {
  return num1 + num2;
};

//함수 표현식
let sayHello = function () {
  console.log('hello');
}
let sum = function(num1, num2) {
  return num1 + num2;
};

//화살표 함수
//this가 안생기는 함수
let sayHello = () => {
  console.log('hello');
}
let sum = (num1, num2) => {
  return num1 + num2;
};

