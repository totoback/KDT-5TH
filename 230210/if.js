//if 문

if (false) {
  console.log('true입니다.'); //참
} else if(true){
  console.log('elseif문 내부 입니다');
} else {
  console.log('flase입니다.'); //거짓
}

//조건 비교
let tetzAge = 39;
tetzAge += 2;
if (tetzAge <= 40){
  console.log('그는 MZ입니다'); //참
} else {
  console.log('그는 X세대 입니다.'); //거짓;
} 

let Age = 28;
if (Age <= 40){
  console.log('그는 늙었습니다.'); //참
} else if (Age <= 40 && Age >= 20){
  console.log('그는 MZ 입니다.');
} else {
  console.log('그는 애기 입니다.'); //거짓;
} 

//if문 중첩
let isOld = true;
let isRich = false;

if (isOld){
  if (isRich){
    console.log('망했어요');
  } else {
    console.log('낫 베드');
  }
} else {
  if (isRich) {
    console.log('대박');
  } else {
    console.log('부럽');
  }
}

//NOT 연산자
let otherAge =16;
let isAdult = otherAge > 19;

// if(!isAdult){
//   console.log('돌아가');
// } else {
//   console.log('통과');
// }

//다중 비교
//여성이고, 이름이 Jane 이거나 성인이면 통과
let gender = 'M';
let name = 'Tom';
let isAdultTom = true;

if (gender === 'F' && name === 'Jane' || isAdultTom === true) {
  console.log('통과');
} else {
  console.log('돌아가');
}
//or이 있어서 트루 돌아가로 하려면 밑에 처럼 수정
// if (gender === 'F' && (name === 'Jane' || isAdultTom === true))

