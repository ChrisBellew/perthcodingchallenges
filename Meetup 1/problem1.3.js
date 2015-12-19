// https://projecteuler.net/problem=1

var maxNum = 1000;

var sum = 0;

// n = maxNum / divisor
// 1/2 * n * (n+1)

// 3 + 6 + 9 ... 999
// Reorder as 3 + 999, 6 + 996 ...
// 1002 * (num pairs)

for(var i = 3; i < 1000; i+=3) {
    sum += i;
}

sum += ((maxNum - 5) * maxNum / 2 / 5);

for(var i = 15; i < maxNum; i+=15) {
    sum -= i;
}

console.log(sum);

// I GIVE UP

// 233168