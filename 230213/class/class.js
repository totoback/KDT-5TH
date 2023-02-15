//생성자 함수
//호이스팅 가능
const hyundai = new Car('hyundai', 'blue');
// const porsche = new Car('porshe', 'black');
// const toyota = new Car('toyota', 'white');

console.log(hyundai);
hyundai.drive();

function Car(brand, color){
  this.brand = brand;
  this.color = color;
  this.drive = () => {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다!`)
  }
} 



//클래스 버전
//호이스팅 불가능
class ClassCar{
  constructor(brand, color){
    this.brand = brand;
    this.color = color;
  }
  drive(){
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다!`)
  }
}

const porsche = new ClassCar('porsche','black'); //선언 부분을 클래스 버전은 위로 올리면 에러가 뜸

console.log(porsche);
porsche.drive();


