const inputEl = document.querySelector(".todo-input > input"); //input
const btnEl = document.querySelector(".btn.btn--send"); //button
const ulListEl = document.querySelector(".todo-contents"); //ul

// function deleteTask(t) {
//   t.parentNode.remove();
// }

//텍스트를 입력해주세요 창 띄우기
function todoList (){
  if(inputEl.value === ""){
    inputEl.setAttribute("placeholder","내용을 입력해주세요.")
    return;
  }

  const liItem = document.createElement("li");
  const liDeleteBtn = document.createElement("button");
  const liCheckBox = document.createElement("input");
  const liText = document.createElement("span");

  liCheckBox.type = "checkbox";
  //인풋 체크팍스로 변경 
  liText.textContent = inputEl.value;
  //텍스트 입력값 li span안에 넣기

  //체크박스
  liCheckBox.addEventListener("click", function(e){
    if(liCheckBox.checked === true){
      liItem.setAttribute("style","text-decoration:line-through");
    } else {
      liItem.setAttribute("style","text-decoration:none");
    }
  });

  //삭제 버튼
  liDeleteBtn.textContent="삭제"
  liDeleteBtn.addEventListener("click", function(e){
    e.target.parentNode.remove();
  });
  // liDeleteBtn.classList.add('btn');
  // liDeleteBtn.classList.add('btn--delete');
  // liDeleteBtn.setAttribute("onclick", "deleteTask(this)");

  //li 아이템 추가
  liItem.append(liCheckBox);
  liItem.append(liText);
  liItem.append(liDeleteBtn);
  // liItem.append(inputEl.value);

  //ul에 최종 추가
  ulListEl.appendChild(liItem);
  inputEl.value = " ";
  inputEl.focus();
}

btnEl.addEventListener("click", todoList);



