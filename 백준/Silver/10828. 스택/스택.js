const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const arr = input.slice(1).map(line => line.split(' '));

const stack = [];
const output = [];
for(val of arr){
    if(val.length == 2) stack.push(val[1]);
    else {
        if(val == 'top') !stack.length ? output.push('-1') : output.push(stack[stack.length - 1]);
        if(val == 'size') output.push(stack.length);
        if(val == 'empty') output.push(Number(!Boolean(stack.length)));
        if(val == 'pop') !stack.length ? output.push('-1') : output.push(stack.pop());
    }
}

console.log(output.join('\n'));