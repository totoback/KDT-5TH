const mainBtn = document.querySelector(".todo-input > button") //버튼
const mainUl = document.querySelector(".todo-contents"); //ul
const mainInput = document.querySelector(".todo-input > input") //플레이스홀더 input
const mainDelete = document.querySelector(".btn--delete2")//전체 삭제 버튼
const selectDelete = document.querySelector(".btn--delete1")//선택 삭제 버튼


let todoList = function () {
  if(mainInput.value === ""){
    mainInput.setAttribute("placeholder","내용을 입력해주세요.");
    return; //else를 안쓰고 리턴으로 종결한다
  }

  const subLi = document.createElement("li");
  const subCheck = document.createElement("input");
  const subText = document.createElement("span");
  const subDelete = document.createElement("button");
  subCheck.setAttribute("type","checkbox");

  //텍스트
  subText.textContent = mainInput.value;

  //버튼
  subDelete.textContent = "삭제";

  //체크박스
  subCheck.addEventListener("click", function(){
    if(subCheck.checked === true){
      subText.setAttribute("style","text-decoration:line-through; color:#999");
      subCheck.classList.add("deleteBtn");
      subLi.classList.add("happy")
    } else {
      subText.setAttribute("style","text-decoration:none; color:000;");
      subCheck.classList.remove("deleteBtn");
    }
  })

  subDelete.addEventListener('click', function(e) {
    e.target.parentNode.remove();
  });

  //전체삭제
  mainDelete.addEventListener("click",function(){
    subLi.remove();
  })
  // 선택삭제
  selectDelete.addEventListener("click", function(){
    const checkList = document.querySelector(".deleteBtn");
    const happyList = document.querySelector(".happy");
    if(checkList.checked === true){
      happyList.remove();
      return;
    }
  })


  // li추가
  subLi.append(subCheck);
  subLi.append(subText);
  subLi.append(subDelete);

  // 최종 ul에 추가
  mainUl.appendChild(subLi);
  mainInput.value = "";
}

mainBtn.addEventListener("click",todoList);
//추가 버튼에 클릭이 일어났을때 todolist함수를 실행하겠다.
