//패널 돌리기
const frame = document.querySelector("section"); // section
const articleArr = frame.querySelectorAll("article") //프레임에서 모든 아티클 가져와라
const len = articleArr.length;
const deg = 360 / len;
const names = ["cardio", "groove", "happy", "light","lily","limes","pop","swing"]; //사진 이미지 이름 배열

console.log(articleArr);

for(let i = 0; i < len; i++){
  articleArr[i].style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;

  //사진 부분 일괄 적용
  const pic = articleArr[i].querySelector(".pic");
  pic.style.backgroundImage = `url(./assets/img/${names[i]}.jpg)`;

  // 음악 부분 일괄 적용
  const title = articleArr[i].querySelector(".text > h2");
  title.innerHTML = `${names[i]}`;

  //음악 태그 & 파일 일괄 적용 & 음악 컨트롤
  const audio = document.createElement("audio");
  audio.setAttribute("src",`./assets/music/${names[i]}.mp3`)
  audio.setAttribute("loop","loop");
  articleArr[i].append(audio);
}

//Prev, Next 버튼 액션 처리
const perv = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");

let num = 0; //회전 위치 조절용
let active = 0; //활성화 패널 위치 기억용

perv.addEventListener("click", function(){
  frame.style.transform = `rotate(${deg * ++num}deg)`;
  if(active === 0){
    active = len - 1;//active = 7
  }else{
    active--;
  };
  for(let el of articleArr){
    el.classList.remove("on");
    //on 초기화 선언

    //이전 버튼을 눌렀을 때, 이전 노래를 멈추게하는 방법
    // el.querySelector(".pic").classList.remove("on");
    // el.querySelector("audio").pause();
  };
  articleArr[active].classList.add("on");
  
  //length는 0 = 1
  //다시 active에 해당하는것만 on을 추가해라.
});

next.addEventListener("click", function(){
  frame.style.transform = `rotate(${deg * --num}deg)`;
  if(active === len - 1){ //7
    active = 0; //0부터 시작
  }else{
    active++;
  };
  for(let el of articleArr){
    el.classList.remove("on");

    //다음 버튼을 눌렀을 때, 이전 노래를 멈추게하는 방법
    // el.querySelector(".pic").classList.remove("on");
    // el.querySelector("audio").pause();
  };
  articleArr[active].classList.add("on");
  //다시 active에 해당하는것만 on을 추가해라.
});


let before = 0;

//cd 모양 사진 회전
for(let el of articleArr){
  const play = el.querySelector(".play");
  const pause = el.querySelector(".pause");
  const reload = el.querySelector(".reload");
  
  //closest 가장 가까운 클래스를 찾아준다.
  play.addEventListener("click", function(e){
    if(before === 0){
      before = e.target;
    }else if(before !== e.target){
      before.closest("article").querySelector(".pic").classList.remove("on");
      before.closest("article").querySelector("audio").pause();
      before = e.target;
    }
    el.querySelector(".pic").classList.add("on");
    el.querySelector("audio").play();
  });
  pause.addEventListener("click", function(){
    el.querySelector(".pic").classList.remove("on");
    el.querySelector("audio").pause();
  });
  reload.addEventListener("click",function(e){
    if(before === 0){
      before = e.target;
    }else if(before !== e.target){
      before.closest("article").querySelector(".pic").classList.remove("on");
      before.closest("article").querySelector("audio").pause();
      before = e.target;
    }
    el.querySelector(".pic").classList.add("on");
    el.querySelector("audio").load();
    el.querySelector("audio").play();
  });
}



