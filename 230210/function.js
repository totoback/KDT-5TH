// function helloFunc() {
//   console.log('Hello');
// }

// function returnFunc(){
//   console.log('Retrun');
//   return 'retrun';
// }

// let str = helloFunc();
// console.log(str);

// //익명함수
// let noNameFunc = function () {
//   console.log('noname');
//   return 'no name';
// }
// let str2 = noNameFunc();
// console.log(str2);

//매개변수 디폴트
function sayHello(name = 'friend' ) {
  console.log(`hello~ ${name}`);
}

sayHello('Mike'); //전달 되면 전달된게 우선
sayHello(); //전달이 안될 때는 기본값이 우선

// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(10, 20)); // 10과 20은 인자

// function square(num) {
//   return num ** 2; //제곱
// }
// console.log(square(37));
