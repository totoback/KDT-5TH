//절대값
const num1 = -999; //999
console.log(Math.abs(num1));

//최대, 최소값 구하기
console.log(Math.min(1, 2, 3, 4, -6, -77, 10000)); //이중에 제일 작은 숫자를 찾아 리턴 -77
console.log(Math.max(1, 2, 3, 4, -6, -77, 10000)); //이중에 제일 큰 숫자를 찾아 리턴 10000

const numArr = [1, 2, 3, 4, -6, -77, 10000]; //배열
console.log(Math.min(...numArr)); //전개연산자 객체가 되었건, 구조를 해체해준다. -77
console.log(Math.max(...numArr)); //전개연산자 객체가 되었건, 구조를 해체해준다. 10000
console.log(...numArr); //1 2 3 4 -6 -77 10000

//소숫점 관리
const num3 = 3.14;
console.log(Math.round(num3)); //반올림 3
console.log(Math.floor(num3)); //소숫점 버림 3
console.log(Math.ceil(num3)) //올림 4

//랜덤
console.log(Math.random()); //0~1사이 랜덤된 소수를 보여준다. 0.4471029738278345
