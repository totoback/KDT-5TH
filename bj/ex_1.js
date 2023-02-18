const fs = require('fs'); //fs=파일시스템

const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const arr1 = input[0].split(" ");
const arr2 = input[1].split(" ");

console.log(arr1);
console.log(arr2);

const numArr1 = arr1.map(item => parseInt(item, 10));
const numArr2 = arr2.map(item => parseInt(item, 10));

console.log(numArr1);
console.log(numArr2);