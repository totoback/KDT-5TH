
//0~100의 숫자중에서 2 또는 5의 배수 총합 구하기
//나머지 연산자 % 사용
//5%3 -> 2
// let sum = 0;
// for (let i = 0; i < 101; i++){
//   if(i % 2 === 0 || i % 5 === 0){
//     sum += i;
//   }
// }
// console.log(sum);



//10의 배수 총합 구하기
// let sum = 0;
// for (let i = 0; i < 101; i++){
//   if(i % 10 === 0){
//     sum += i;
//   }
// }
// console.log(sum);

//7의 배수 총합 구하기 200
// let sum = 0;
// for (let i = 0; i < 201; i++){
//   if(i%7===0){
//     sum += i;
//   }
// }
// console.log(sum);

// 11의 배수 총합 구하기
let sum = 0;
for (let i = 0; i < 201; i++){
  if(i%11===0){
    sum += i;
  }
}
console.log(sum);
