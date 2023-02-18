
//includes
//해당 배열에 지정한 요소가 있는지 확인하는 메서드
//includes하고 찾고 싶은 숫자를 쓴다.
const numbers4 = [1,2,3,4,5];
console.log(numbers4.includes(3)); //true
console.log(numbers4.includes(7)); //false

//map함수로 숫자 찾는법
let flag =false;
numbers4.map(function(item){
  if(item === 3) flag = true;
});
console.log(numbers4.includes(3));
console.log(numbers4.includes(7));

