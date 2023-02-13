//object
// const tetz = {
//   name: "이효석",
//   age: 39,
// };

// //접근
// console.log(tetz.name); //이효석
// console.log(tetz["age"]); //39

// //추가
// tetz.gender = "M"; //추가됨
// console.log(tetz);

// tetz["head"] = "big"; //추가됨
// console.log(tetz);

// //삭제
// delete tetz.head; //head삭제
// console.log(tetz);

// delete tetz["head"];
// console.log(tetz); //head삭제


//실습
const pororo = {
  name : "뽀로로",
  age : 7,
  height : 110,
  weight : 30,
  // running : function() {
  //   console.log("뽀로로가 뜁니다");
  // }
  running() {
    console.log("뽀로로가 뜁니다");
  }, //funtion없이도 이렇게 사용 가능하다.
  say() {
    console.log("뽀로로는 귀엽습니다");
  }
};

pororo.running(); //메소드 호출 방법
pororo.say();

for (let key in pororo){
  console.log(`key 는 ${key}, key 안의 값은 ${pororo[key]}`);
  // console.log("pororo.key", pororo.key); // 잘못된 방식
  // console.log("pororo[key]", pororo[key]); //반드시 []넣고 접근하기
}



// console.log(pororo.hairColor); //undefined
// console.log('name' in pororo); //true
// console.log('height' in pororo); //false


// console.log(pororo.name);
// console.log(pororo.age);

// pororo.gender = "M";
// pororo.height = "190";

// delete pororo.gender;
// console.log(pororo);