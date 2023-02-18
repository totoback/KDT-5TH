// find / findIndex
const fruits3 = ['Apple','Banana','Cherry'];
const findResult = fruits3.find((item)=>{
  // return item === "Apple";
  return /^A/.test(item);
  //정규식 : 글자에 대문자 A가 시작되면 true, false
});
const findeIndexResult = fruits3.findIndex((item)=> {
  // return item === "Banana";
  return /^B/.test(item);
});

console.log(findResult);
console.log(findeIndexResult); //2

