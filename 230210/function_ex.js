//실습

//삼각형 넓이 밑변x높이/2
// function tri(width, height) {
//   return (width * height) / 2;
// }
//화살표 함수로 변경
let tri = (width, height) => {
  return (width * height) / 2;
};
//원의 넓이
//매개변수 기본값 = 3 줌
// function cir(radius = 3) {
//   return radius * radius * 3.14;
// }
//화살표 함수로 변경
let cir = (radius = 3) => {
  return radius * radius * 3.14;
};
//피타고라스
// function pytha(num1, num2) {
//   return Math.sqrt(num1 ** 2 + num2 ** 2);
// }
//화살표 함수로 변경
let pytha = (num1, num2) => {
  return Math.sqrt(num1 ** 2 + num2 ** 2);
};

console.log(tri(2, 5));
console.log(cir());
console.log(pytha(3, 4));
