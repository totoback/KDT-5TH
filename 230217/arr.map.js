// arr map
const fruits = ["사과", "파인애플", "수박", "포도", "오렌지"];
const fruitsObjArr = fruits.map(function (item, index, origin) {
  console.log("item",item); //사과
  console.log("index",index); //순번
  console.log("origin",origin); //배열
  //리턴이 객체면 그대로 함축할 수 없다.
  return {
    id: index,
    name: item,
  }
});


//배열의 나누기 3하기
//1.기본적인 코드
const nums = [3, 6, 9, 12, 15, 18, 21];
const divideArr = nums.map(function(item, index){
  return item / 3;
});
console.log(divideArr);
//2.화살표함수로 축약
const nums4 = [3, 6, 9, 12, 15, 18, 21];
const divideArr2 = nums4.map((item, index) => {
  return item / 3;
});
console.log(divideArr2);
//3.한번 더 축약하기(중괄호, 리턴 삭제(리턴 이외에 다른 변수가 있으면 불가능))
const nums5 = [3, 6, 9, 12, 15, 18, 21];
const divideArr3 = nums5.map((item, index) => item / 3);
console.log(divideArr3);


//배열의 곱하기 4하기 
const nums2 = [1, 2, 3, 4, 5, 6];
const Arr = nums2.map(function(item, index, og){
  return item * 4;
});
console.log(Arr);