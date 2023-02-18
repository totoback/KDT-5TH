

// ### 1. Typeof
// > - Typeof를 사용해서 아래의 문구를 만드세요.
// - ""안에 문구는 typeof의 결과값으로 출력해야 합니다.
// - 출력문구
// -"number" ins't "string" data type.
// - typeof를 "bloolean"이나 "num"에 사용하면, "object"결과를 얻을 수 있습니다.

let num = 2;
let str = "String"
let loolean = false;
let obg = {};

console.log(`${typeof num} ins't ${typeof str} data type.`);
console.log(`${typeof boolean}이나 null에 사용하면, ${typeof obj} 결과를 얻을 수 있습니다.`);

// ### 2. 형변환과 prompt
// > 
// - 변수 mathScore, engScore 를 만들어 주세요.
// - mathScore = "77"; engScore ="88";
// - 시험 점수 평균을 계사하여 avgScore에 저장하고, 이를 출력하는 프로그램을 작성하세요!
// - 명시적 형 변환을 사용하여 평균 점수가 정확하게 나와야 합니다!

let mathScore = Number(prompt("수학 점수를 입력하세요."));
let engScore = Number(prompt("영어 점수를 입력하세요"));

let avg = (mathScore + engScore) / 2;
console.log(avg);

// ### 3. 클럽 가드 프로그램
// > 
// - 크럷 가드 프로그램을 만들어 봅시다!
// - if / else만 사용해서 구현해야 합니다(else if는 사용 X)
// - 성인(isAdult)이거나, VIP면 -> 통과
// - 성인이면서 VIP여도 취했으면(isDrunken) -> 돌아가
// - 성인이 아니고 VIP도 아니면서 취했어도, 돈(money)을 줬으면 -> 통과

let isAult = true;
let VIP = true;
let money = true;
let isDrunken = false;

if (((isAult && VIP) || !isDrunken) || money){
	console.log("통과")
} else {
	console.log("돌아가")
}


//4. if 문을 이용해서 오늘 요일을 alert로 출력 프로그램
// > 
// - if 문을 이용해서 오늘 요일을 alert으로 출력하는 프로그램 작성
// - 힌트
// - 오늘의 날짜 얻는 방법 : new Date().getDay();를 사용하면 오늘의 요일을 숫자로 받을 수 있다.
// - 0:일요일 / 1:월요일 / 2:화요일 / 3:수요일 / 4:목요일 / 5:금요일 / 6:토요일

let today = new Date().getDay();
if (today === 0){
	alert("일요일");
}else if(today === 1){
   	alert("월요일");
}else if(today === 2){
   	alert("화요일");
}else if(today === 3){
   	alert("수요일");
}else if(today === 4){
   	alert("목요일");
}else if(today === 5){
   	alert("금요일");
}else if(today === 6){
   	alert("토요일");
}
console.log(today);
