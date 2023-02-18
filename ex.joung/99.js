// 99단
// for (let i = 2; i < 10; i++) {
//   for (let j = 1; j <10; j++) {
//   console.log(`${i}x${j}=${i*j}`);
//   }
// }

//구구단 2단
let num = 2;
for (let i = 1; i < 10; i++) {
  console.log(`${i}x${num}=${i * num}`);
}

// ### 6. 0~100의 숫자 중에서 2또는 5의 배수 총합 구하기
// - 힌트 : 나머지 연산자 % 사용 / 5%3=2(5를 3으로 나눈 나머지 2의 값을 반환)

let sum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    sum = sum + i;
  }
}
console.log(sum); //3050

let i = 2;
let j = 1;

while (i < 9) {
  console.log(`${i}단`);
  while (j <= 9) {
    console.log(`${i}x${j}=${i * j}`);
    j++;
  }
  j = 1;
  i++;
}

let sum2 = 0;
for (let i = 1; i <= 1000; i++) {
  if (i % 2 === 0) continue;
  {
    sum2 += i;
  }
}
console.log(sum2);

let kdt = ["참치", "회", "감사히", "잘", "먹었습니다"];

kdt.push("감사합니다");
console.log(kdt);
kdt.pop();
console.log(kdt);
kdt.unshift("맛 좋은");
console.log(kdt);

//배열 전체 출력
for (let i = 0; i < kdt.length; i++) {
  console.log(kdt[i]);
}

// - name: "뽀로로" / age:7
// - pororo의 이름과 나이를 출력하기
// - pororo의 성별 (gender)을 추가하고 출력하기
// - pororo의 키 (height)를 추가하고 출력하기
// - pororo의 성별 데이터를 삭제하고, pororo 객체를 출력하기

const pororo = {
  name: "뽀로로",
  age: 7,
};
console.log(pororo);

pororo.height = "190";
console.log(pororo);
pororo.gender = "M";
console.log(pororo);
delete pororo.gender;
console.log(pororo);

// - pororo객체의 뽀로로의 이름을 출력하는 method 추가하기
// - 특정 객체의 height를 출력하는 showHeight()함수를 작성하고 pororo객체의 메소드를 추가->pororo의 키를 출력하기
function showHeight() {
  console.log(`제 키는 ${this.height}cm 입니다`);
}
const pororo2 = {
  name: "뽀로로",
  height: 190,
  showName() {
    console.log(`제 이름은 ${this.name}입니다.`);
  },
  showHeight,
};

pororo2.showName(); //이름은 뽀로로 입니다.
pororo2.showHeight(); //키는 190 입니다.

//생성자 함수
function Kdt(name, gender) {
  this.name = name;
  this.gender = gender;
  this.row = function () {
    console.log(`이름 : ${this.name} 성별 : "${this.gender}`);
  };
}

let user1 = new Kdt("홍길동", "M");
let user2 = new Kdt("김박순", "M");
let user3 = new Kdt("홍길동", "M");
let user4 = new Kdt("홍윙동", "M");

user1.row();
user2.row();
user3.row();
user4.row();

//class 상속자 실습
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
    //가로x높이의 값을 반환한다. 넓이
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return super.getArea();
    //사각형의 넓이
  }
}
class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return (this.width * this.height) / 2;
    //삼각형의 넓이
  }
}
class Circle extends Shape{
  constructor(radius){
    super(); //super반드시 넣어줘야 한다.
    this.radius = radius;
  }
  getArea() {
    return this.radius ** 2 * 3.14;
  }
 }
let rec = new Rectangle(10, 10);
let tri = new Triangle(10, 10);
let cir = new Circle(3);

console.log(rec.getArea());
console.log(tri.getArea());
console.log(cir.getArea());



//메서드 체이닝
const kdtCurriculum = ["html","css","js","bootstrap","backend"]
const result1 = kdtCurriculum[0].split('').reverse().join('');
const result2 = kdtCurriculum[1].split('').reverse().join('');
console.log(result1);
console.log(result2);
