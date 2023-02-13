class Car {
  constructor(brand, color){ //값을 받을떈 constructor 을 반드시 써야함'
    this.brand = brand;
    this.color = color;
  }
  showSpec(){
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다`)
  }
}

//클래스 상속
class ElecCar extends Car{ //extends로 상속 받아온다.
  constructor(brand, color, fuel){
    super(brand, color); //super를 쓴다.
    this.fuel = fuel;
  }
  showSpec() {
    super.showSpec();
    console.log(`그리고 이 차는 ${this.fuel}의 힘으로 움직입니다.`) 
    // console.log(`${this.brand}의 ${this.color}색 자동차가 ${this.fuel}의 힘으로 움직입니다.`)
  }
  // showFuel(){
  //   console.log(`해당 자동차는 ${this.fuel}의 힘으로 움직입니다.`);
  // }
};

//#Overriding
const hyundai = new Car('hyundai', 'blue');
hyundai.showSpec();

const tesla = new ElecCar('tesla', 'red', 'electricity');
tesla.showSpec();
// tesla.showFuel();


//instanceof
console.log(hyundai instanceof Car);
console.log(tesla instanceof ElecCar);

//super
//부모 클래스에 접근 하고 싶을 때 사용합니다!







