const kdt = ['김은정', '최지영', '박성재', '홍성범'];

kdt.push('최지영'); //제일 뒤에 이름 추가하기
console.log(kdt); 

kdt.pop(); //배열에서 자신을 빼기
console.log(kdt);

kdt.unshift('맨 앞 최지영'); //맨 앞에 추가
console.log(kdt);

for (let i = 0; i < kdt.length; i++){
  console.log(kdt[i]);
}

// kdt.push('백진솔'); //추가 .push
// console.log(kdt);

// kdt.pop('백진솔'); //삭제 .pop
// console.log(kdt);

// kdt.unshift('이효석'); //배열 맨 앞에 추가
// console.log(kdt);

// kdt.shift(); //추가한 내용 삭제
// console.log(kdt);

// for(let i = 0; i < kdt.length; i++){
//   console.log(kdt[i]);
// }

// console.log(kdt.pop('백진솔')); //어떤값을 뺐는지 알려줌
// console.log(kdt.push('백진솔')); //배열의 길이

// console.log(kdt[0]);
// console.log(kdt.length);


//배열을 사용하는 이유
// 배열.length //30