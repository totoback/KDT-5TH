// arr.reduce
//맵이나 필터는 배열을 리턴
//리듀스는 최종 값을 리턴
//배열의 합
const numbers5 = [1,2,3,4,5];
const sumResult = numbers5.reduce(function(acc,item,index,og){
  return acc += item;
}, 0);
console.log(sumResult);

const numbers6 = [2, -5, -123, -5000, 23, 0, 340, 3];
//양수와 음수의 값
//양수가 나오면 앞에 0, 음수가 나오면 뒤에 0
const resultReduce = numbers6.reduce((acc,item)=>{
  if(item < 0){
    acc[0] += 1;
    //처리할 현재 요소가 음수일 경우
  } else{
    acc[1] += 1;
    //처리할 현재 요소가 양수일 경우
  }
  return acc;
}, [0, 0]);
//초기화
console.log(resultReduce);

//실습문제
//1 부터 100 까지의 숫자가 들어 있는 배열을 for 문으로 만들기
const arr = [];
for (let i = 1; i <= 100; i++) {
  arr.push(i);
}
console.log(arr);
//Reduce 메소드를 이용하여 해당 배열의 합산을 구하기! 단, reduce 메소드의 누산기를 이용하기
const result = arr.reduce((acc,item)=> acc += item,0);
// return acc + item; //다른방법
console.log(result);


