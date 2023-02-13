// 생성자 함수
function Car(brand, color) {
  this.brand = brand;
  this.color = color;
  this.drive = function () {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`)
  }
}

// 생성자 함수를 상속
function ElecCar(brand, color, fuel){
  Car.call(this, brand, color); //super랑 같은 역할을 함 
  this.fuel = fuel;
  
  this.drive = function () {
    console.log(`${this.brand}의 ${this.color}색 자동차가 ${this.fuel}로 주행합니다.`)
  }
}

//상속
ElecCar.prototype = Object.create(Car.prototype);
ElecCar.prototype.constructor = ElecCar;

//사용
const tesla = new ElecCar('tesla', 'white', 'electricity');
tesla.drive();

console.log(tesla instanceof object);

//class버전을 사용하는걸 추천 






