// 1~100까지 들어 있는 배열을 for문으로 만들기
const arr = [];
for (let i = 1; i <= 100; i++) {
  arr.push(i);
}
console.log(arr);

//map 메소드를 이용하여 해당 배열의 합산 구하기
let sum = 0;
//화살표함수로 변경
const mapArr = arr.map((item) => sum += item);

console.log(sum);
// console.log(mapArr);


//in은 객체에서 많이쓴다. key값을 리턴해주니까.
//of는 배열일때만 of를 쓸 수 있다. 값이 나온다.
const str = "apple";
for (let letter in str) {
  console.log(letter);
}
const obj = {
  nba : "lebron",
  soccer : "messi",
  baseball : "TMT",
}

for (let item in obj) {
  console.log(obj[item]);
}
