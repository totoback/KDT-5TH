// Object.assign
//합치는 역할
const obj1 = {a:1, b:2};
const obj2 = {v:3, c:4};

//1번 오브젝트로 2번 오브젝트를 합친다
const resultObj = Object.assign(obj1, obj2);
console.log('obj1',obj1); //obj1 { a: 1, b: 2, v: 3, c: 4 }
console.log('obj2',obj2); //obj2 { v: 3, c: 4 } 데이터만 제공해서 변하지 않음
console.log('ressultObj', resultObj); //ressultObj { a: 1, b: 2, v: 3, c: 4 }
console.log(obj1 === resultObj); //true 메모리주소값을 resultObj에게 전달
resultObj.a = 10; //a값을 10으로 변경
console.log(obj1); //{ a: 10, b: 2, v: 3, c: 4 } a가 10으로 변경, 동일한 메모리 사용

const tetzObj = {
  name : "이효석",
  age : "39",
  brain : null,
};

//구조분해할당
//아래 두개는 같은 문법 
// const name = tetzObj.name;
//변수 명을 바꾸고싶을땐 :
//추가 하고싶을떈 =""
const { name:tetzName, age, brain, girlFriend = "없음"} = tetzObj; //구조 분해 할당의 방법(최신)
console.log(tetzName, age, brain, girlFriend); //이효석 39 null undefined



