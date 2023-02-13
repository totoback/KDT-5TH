let sayHello = () => {
  console.log(`Hello, I'm ${this.name}`); //화살표 함수에서 this를 사용하는것은 위험하다.
  console.log(this);
}

let sayHello2 = function () {
  console.log(`Hello, I'm ${this.name}`);
  console.log(this);
}

const boy = {
  name : "Mike",
  sayHello,
}

const girl = {
  name : "jane",
  sayHello2,
}

boy.sayHello(); //화살표 함수
girl.sayHello2(); //함수 표현식