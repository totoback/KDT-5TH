//클럽 가드 프로그램 실습
// let isAdult = true;
// let vip = true;
// let isDrunken = false;
// let money = true;

// if (((isAdult === true && vip === true) || isDrunken === true) || money === true){
//   console.log('통과');
// } else {
//   console.log('돌아가');
// }

//강사님 코드
let 최지영 = {
  성인인가 : true,
  vip : false,
  취했는가 : true,
  돈 : false
};

if (((최지영.성인인가 || 최지영.vip) && !최지영.취했는가) || 최지영.돈){
  console.log('통과');
} else{
  console.log('돌아가');
}
if (최지영.돈 || (최지영.취했는가 && (최지영.성인인가 || 최지영.vip))){
  console.log('통과');
} else{
  console.log('돌아가');
}