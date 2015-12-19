// https://projecteuler.net/problem=1
var maxNumber = 1000000000;

console.time('thing');
var sum = 0;
for(var i = 0; i < maxNumber - 15; i += 15) {
    sum += i;
    sum += i + 3;
    sum += i + 5;
    sum += i + 6;
    sum += i + 9;
    sum += i + 10;
    sum += i + 12;
}

if (i < maxNumber) {
    sum += i;
}

if (i + 3 < maxNumber) {
    sum += i + 3;
}

if (i + 5 < maxNumber) {
    sum += i + 5;
}

if (i + 6 < maxNumber) {
    sum += i + 6;
}

if (i + 9 < maxNumber) {
    sum += i + 9;
}

if (i + 10 < maxNumber) {
    sum += i + 10;
}

if (i + 12 < maxNumber) {
    sum += i + 12;
}
console.timeEnd('thing');

console.log(sum);