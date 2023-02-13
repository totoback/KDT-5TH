//this

// const user = {
//   name : "이효석",
//   age : 30,
//   sayHello(){
//     console.log(`안녕하세요. ${this.name} 님`);
//     console.log(`나이는. ${this.age} 님`);
//   }
// }

// user.sayHello();

// function sayHello() {
//   console.log(`Hello, I'm ${this.name}`);
// }
// const boy = {
//   name : "Mike",
//   sayHello,
// }
// const girl = {
//   name : "jane",
//   sayHello,
// }
// boy.sayHello();
// girl.sayHello();
// sayHello();

//실습
function showHeight() {
  console.log(`제 키는 ${this.height}`);
}

const pororo = {
  name : "뽀로로",
  height : 30,
  showName() {
    console.log(`이름은 ${this.name} 입니다`);
  }, 
  showHeight,
}
pororo.showName();
pororo.showHeight();
