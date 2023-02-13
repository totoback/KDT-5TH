const tetz = {
  name : "이효석",
  email : "toto.joung@gmail.com",
}

const 이효석 = {
  name : "이효석",
  email : "toto.joung@gmail.com",
}

console.log("##",JSON.stringify(tetz) === JSON.stringify(이효석));

// console.log(tetz === 이효석);  //주소값을 비교하기에 false가 뜸


//객체의 불변성
const tetzCopy = tetz; //주소값을 받아옴, 둘다 동일한 값이라고 보면 됨
tetzCopy.name = "Tetz";

// tetzCopy = 이효석;// 이렇게 하면 에러를 뛰울듯

console.log(tetz);
console.log(tetzCopy);
console.log(tetz === tetzCopy); //true

