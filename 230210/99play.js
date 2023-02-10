let i = 2;
let j = 1;

while (i < 10) {
  while(j < 10){
    console.log(`${i} x ${j} = ${i * j}`);
    j++; //증감식
  }
  i++;
  j = 1; //초기화
}