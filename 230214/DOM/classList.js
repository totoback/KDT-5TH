
// classList.add 추가 
const boxEl = document.querySelector(".box");
boxEl.classList.add("orange"); //HTML문서에 추가됨

//classList.remove 삭제
const thirdBoxEl = document.getElementById("third");
thirdBoxEl.classList.remove("box"); //html에 class명이 삭제됨

//classList.contains 존재 여부 확인
console.log(boxEl.classList.contains("box")); //true
console.log(thirdBoxEl.classList.contains("box")); //false

//classList로 컨트롤