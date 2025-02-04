const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const meetings = input.slice(1).map(line => line.split(' ').map(Number));

// 끝나는 시간 기준으로 정렬
meetings.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];  // 끝나는 시간이 같다면 시작 시간 기준 정렬
  return a[1] - b[1];
});

let count = 0;
let endTime = 0;

for (const [start, end] of meetings) {
  if (start >= endTime) {
    count++;
    endTime = end;
  }
}

console.log(count); // 회의실에서 사용할 수 있는 최대 회의 개수 출력