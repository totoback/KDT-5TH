
//매서드 체이닝 실습 문제

//split - 잘라주는 명령어
//reverse - 배열을 뒤집어주는 명령어
//join - 합쳐지는 명령어


const kdtCurriculum = ["HTML", "CSS","JS","BACKEND","REACT"];
//위 배열에서 첫번째와 마지막 데이터의 문자열을 메소드체이닝을 이용해 반대로 뒤집어 주세요.
const result1 = kdtCurriculum[0].split("").reverse().join("");
const result2 = kdtCurriculum[4].split("").reverse().join("");
const result3 = kdtCurriculum.shift().split("").reverse().join(""); 
const result4 = kdtCurriculum.pop().split("").reverse().join(""); 
console.log(result1); //LMTH
console.log(result2); //TCAER
console.log(result3); //LMTH
console.log(result4); //TCAER
