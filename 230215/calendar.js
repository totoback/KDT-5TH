// JS 구현
const calendar = document.querySelector("table"); //캘린더 전체
const date = document.querySelector("#date"); //날짜 input
const input = document.querySelector("#content"); //내용 input

// 클릭 된 요소를 저장하기 위한 전역 변수

// 내가 클릭한 td의 위치
let targetEl;

//날짜 클릭하면 input날짜에 추가하기
function calendarTask(e) {
  // console.log(e.target);
  //console.log(e.target.tagName);
  //날짜입력
  if (e.target.tagName === "P") {
    date.value = `2023년 2월 ${e.target.textContent}일`;
    targetEl = e.target.parentNode;
  } else if (e.target.tagName === "TD") {
    const day = e.target.children[0].textContent;
    // 타겟까지는 : td -> children[0]:P
    date.value = `2023년 2월 ${day}일`;
    targetEl = e.target;
  // } else if (e.target.tagName === "div"){
  //   e.target.remove();
  // }
  // 날짜 지우는 방법 _2번째
  }
}

//새로운 div태그 만들고 targetEl에 추가하기
function writeSchedule() {
  //input태그안에 텍스트 넣기
  if (input.value === "" && date.value === "") {
    input.setAttribute("placeholder", "내용을 입력하세요");
    date.setAttribute("placeholder", "날짜를 선택하세요");
    return;
    //else안쓰고 리턴시켜도 됨
  } else if (input.value === "") {
    input.setAttribute("placeholder", "내용을 입력하세요");
    return;
  } else if (date.value === "") {
    date.setAttribute("placeholder", "날짜를 선택하세요");
    return;
  }
  const addDiv = document.createElement("div");
  addDiv.textContent = input.value;
  addDiv.addEventListener("click", function () {
    addDiv.remove();
  // 코드 붙이는 방법 _1번째
  });
  targetEl.append(addDiv);
  // div에 input 값을 넣는다
  input.value = "";
  // input태그 초기화
}

calendar.addEventListener("click", calendarTask);


