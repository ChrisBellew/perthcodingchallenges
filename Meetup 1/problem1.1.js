// https://projecteuler.net/problem=1
var maxNumber = 1000000000;

console.time('thing');

var sum = 0;
for(var i = 3; i < maxNumber; i += 3) {
    if (!isMultiple(i, 5)) {
        sum += i;
    }
}

for(var i = 5; i < maxNumber; i += 5) {
    sum += i;
}

console.timeEnd('thing');
console.log(sum);

function isMultiple(num, denom) {
    return num % denom == 0;
}