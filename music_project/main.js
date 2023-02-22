//패널 돌리기
const frame = document.querySelector("section"); // section
const articleArr = frame.querySelectorAll("article") //프레임에서 모든 아티클 가져와라
const len = articleArr.length;
const deg = 360 / len;

console.log(articleArr);

for(let i = 0; i < len; i++){
  articleArr[i].style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
}