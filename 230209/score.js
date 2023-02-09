// let userInput = prompt("값을 입력 하세요");

let mathScore = prompt("수학 점수를 입력하세요.");
let engScore = prompt("영어 점수를 입력하세요.");

// let avg = (mathScore + engScore) / 2;
// console.log(avg); //형 변환

let mathScore1 = Number(mathScore);
let engScore1 = Number(engScore);
let avg2 = (mathScore1 + engScore1) / 2;
console.log("평균 점수는 = "+ avg2 +"점");