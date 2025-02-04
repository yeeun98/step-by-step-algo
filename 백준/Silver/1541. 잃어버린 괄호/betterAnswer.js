// •	효율성: ✅ O(N), 빠름
// •	가독성: ✅ 개선하면 더 깔끔해질 수 있음

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('-');

const numArr = input.map(val => val.split('+').reduce((acc, cur) => acc + +cur, 0));
const result = numArr.slice(1).reduce((acc, cur) => acc - cur, numArr[0]);

console.log(result);
