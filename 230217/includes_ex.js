//실습문제(교집합)
let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

//방법1
//map : 기존 배열에 특정 작업을 한 배열을 리턴하는 메소드
const sameArr2 = [];
const diffArr2 = [];
fruits1.map((item)=>{
  if(fruits2.includes(item)){
    sameArr2.push(item);
  } else {
    diffArr2.push(item);
  }
});

//방법2
// 두 배열에서 동일한 요소만을 가지는 배열 sameArr 만들기
const sameArr = fruits1.filter(function(item){
  // fruits1의 조건에 부합하는 배열 요소만을 반환할건데
  return fruits2.includes(item);
  // fruits2의 해당 배열에 지정한 요소가 있는지 확인하는 메소드를 찾아라
});
//화살표 함수
// const sameArr = fruits1.filter(item)=>fruits2.includes(item);

// 두 배열에서 서로 다른 요소만을 가지는 배열 diffArr 만들기
const diffArr = fruits1.filter(function(item){
  return !fruits2.includes(item);
});
//화살표 함수
// const diffArr = fruits1.filter(item) -> !fruits2.includes(item));

console.log(sameArr); //[ '사과', '파인애플', '수박', '참외', '오렌지', '망고' ]
console.log(diffArr); //[ '딸기', '자두' ]