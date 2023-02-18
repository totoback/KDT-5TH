//arr.filter
//3보다 큰 값만 나오게하자
//fuction (아이템,인덱스,오리지날값)
const number2 = [1,2,3,4,5,6];
//화살표함수로 변경
const filterArr = number2.filter((item) => item > 3);
console.log(filterArr); //[4,5,6]
//원래 코드
// const filterArr = number2.filter(function(item,index,og){
//   return item > 3;
// });

//6글자 이상인 요소만 출력한다.
const words = ['spray','limit','elite','exuberant','destruction', 'present']
const resultArr = words.filter((item) => item.length > 6);
console.log(resultArr); //[ 'exuberant', 'destruction', 'present' ]

//배열에 12345추가
// const number3 = "12345".split("");
// console.log(number3);