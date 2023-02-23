const divAll = document.querySelector("part__week-day");
const dateInputField = document.querySelector('.contents__date > input:first-child');
const addItem = document.querySelector('.day > li');
const textInputField = document.querySelector('.contents__date > input:nth-child(2)');
const addItemBtn = document.querySelector('.btn');

let targetEl;
let calendar = function(e){
  if(e.target.tagName ==="LI"){
    dateInputField.value = `2023년 2월 ${e.target.textContent}일`;
    targetEl = e.target.parentNode;
  }else if(e.target.tagName === ""){
    return;
  }
}
divAll.addEventListener("click",calendar);

let addItemLi = function(e){
  if(textInputField.value === ""){
    textInputField.ariaPlaceholder = "날짜를 선택해주세요.";
    return;
  }
  const contentsItem = document.createElement('div');
  contentsItem.textContent = textInputField.value;
  contentsItem.addEventListener("click",function(e){
    e.target.remove();
  })
  if(targetEl.tagName === "LI"){
    targetEl.appenChild(contentsItem);
  }

  textInputField.value="";
}
addItemBtn.addEventListener("click", addItemLi);