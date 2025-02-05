// 시간 초과 코드
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const arr = input.slice(1).map(line => line.split(' '));

const stack = [];
arr.map((val) => {
    if(val.length == 2) stack.push(val[1]);
    else {
        if(val == 'top') !stack.length ? console.log('-1') : console.log(stack[stack.length - 1]);
        if(val == 'size') console.log(stack.length);
        if(val == 'empty') console.log(Number(!Boolean(stack.length)));
        if(val == 'pop') !stack.length ? console.log('-1') : console.log(stack.pop());
    }
});

// ✅ 1️⃣ 시간 초과 원인
// 	1.	map() 사용 문제
// 	•	map()은 새로운 배열을 반환하기 위해 사용되는데, 너는 결과를 반환하지 않고 단순히 console.log()를 위해 사용했어.
// 	•	이런 경우 forEach 또는 for문이 더 효율적이야.
// 	2.	console.log()를 반복 호출
// 	•	많은 양의 입출력 처리를 console.log()로 직접 출력하면 성능이 급격히 떨어짐.
// 	•	백준은 입출력 속도가 매우 중요하기 때문에, 출력을 한 번에 모아서 처리해야 해.