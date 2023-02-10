//while문 기본

// let index = 0;
// while (index < 10){
//   console.log(`인사를 ${index+1} 번째 드립니다`);
//   index++; //증감식을 꼭 작성해줘야함*
// }

// let index2 = 0;
// while (true){
//   console.log(`인사를 ${index2+1} 번째 드립니다`);
//   index2++; //증감식을 꼭 작성해줘야함
//   if (index2 > 10){
//     break; //반복문을 멈춰주는 명령어
//   }
// }


//do-while 비교
// let index1 = 0;
// do {
//   console.log(`do-while 인덱스는 ${index1}입니다`);
//   index1++;
// } while (index1 >10);

// let index2 = 0;
// while (index2 > 10){
//   console.log(`while 인덱스는 ${index2}입니다`);
//   index2++;
// }

//while로 구구단
i = 2;
j = 1;

while(i < 10){
  while(j < 10){
    console.log(`${i}*${j}=${i*j}`);
    j++;
  }
  j=1;
  i++;
}
