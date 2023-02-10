// for (let i = 0; i < 20; i++){
//   if(i % 2 === 1){
//     continue;
//   }else{
//     console.log(`${i} 번 입니다`);
//   }
//   if (i === 16) break; //i가 15가 되면 브레이크
// }

// 1부터 1000까지의 숫자 중에서 짝수의 합을 구하는 프로그램을 만들어주세요.
// 단 continue를 사용해야합니다.
let sum = 0;

for (let i = 0; i < 1001; i++){
  if(i % 2 === 1) continue;
  sum += i;
}
console.log(sum);

