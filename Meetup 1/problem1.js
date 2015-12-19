// https://projecteuler.net/problem=1

console.time('thing');

var sum = 0;
var maxnum = 1000000000;
for(var i = 1; i < maxnum; i++) {
    if (isMultiple(i, 3) || isMultiple(i, 5)) {
        sum += i;
    }
}


console.log(sum);
console.timeEnd("thing");

function isMultiple(num, denom) {
    return num % denom == 0;
}