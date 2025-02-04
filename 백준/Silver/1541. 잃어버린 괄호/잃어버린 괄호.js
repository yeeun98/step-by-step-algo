const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('-');

const numArr = input.map((val) => {
    const tmp = val.split('+');
    let sum1 = tmp.reduce((acc, cur) => {
        return Number(acc) + Number(cur);
    }, 0);
    return sum1
});
let result = numArr.slice(1).reduce((acc, cur) => {
    return Number(acc) - Number(cur);
}, numArr[0]);

console.log(result);
