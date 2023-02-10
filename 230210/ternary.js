//if 문
let name = "이효석";
if (name === "이효석"){
  console.log("맞았습니다");
} else {
  console.log("틀렸습니다");
}

//3항 연산자
name === "이효석" ? console.log("맞았습니다") : console.log("틀렸습니다");
// if문 줄여쓰고 싶을때

//3항 연산자 중첩으로 쓰는 방법
name === "장근석" ? console.log("맞았습니다") : name === "장근석" ? console.log("아시아의 프린스") : console.log("누구세요");
