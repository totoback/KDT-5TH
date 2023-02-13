//생성자 함수
//변수명은 대문자 , 세미콜론 찍고, new연산자를 사용해서 호출
// function Kdt(name, gender){ //생성자 함수는 대문자로 하자. 국룰임, 매게변수를 받게 되어있다.
//   this.name = name; //생성자 함수는 this로 선언한다.
//   this.gender = gender;
//   this.showName = function () {
//     console.log(`성함은 ${this.name} 입니다`);
//   }
// }

// let user1 = new Kdt('이효석', "M"); //new연산자를 사용해서 호출한다.
// let user2 = new Kdt('김성현', "M");
// let user3 = new Kdt('윤제', "M");
// let user4 = new Kdt('송민선', "F");
// let user5 = new Kdt('송수빈', "F");

// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
// console.log(user5);

// user1.showName();
// user2.showName();
// user3.showName();
// user4.showName();
// user5.showName();

// 생성자 함수 실습
function Kdt(name, gender) {
  this.name = name;
  this.gender = gender;
  this.showName = function(){ //method 함수 추가하기
    console.log(`저는 ${this.name}, 성별은 ${this.gender} 입니다`) 
  }
}

let user1 = new Kdt("김은정", "F"); //생성자 함수
let user2 = new Kdt("최지영", "F"); //생성자 함수
let user3 = new Kdt("박성재", "M"); //생성자 함수
let user4 = new Kdt("홍성범", "M"); //생성자 함수

user1.showName(); //저는 김은정, 성별은 F입니다.
user2.showName(); //저는 최지영, 성별은 F입니다.
user3.showName(); //저는 박성재, 성별은 M입니다.
user4.showName(); //저는 홍성범, 성별은 M입니다.

