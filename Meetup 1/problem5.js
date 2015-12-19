// https://projecteuler.net/problem=5
var answer = 232792560;
var result = 0;
var found = false;
while(!found) {
    result+=20;
    var allMatch = true;
    for(var i = 1; i <= 20 && allMatch; i++) {
        if(result % i !== 0) {
            allMatch = false;
        }
    }
    
    if(allMatch) {
        found = true;
    }
    
}

console.log(result + ' is ' + ((result === answer) ? 'correct':'incorrect'));

/*

This does not require programming at all. Compute the prime factorization of each number from 1 to 20, and multiply the greatest power of each prime together:

20 = 2^2 * 5
19 = 19
18 = 2 * 3^2
17 = 17
16 = 2^4
15 = 3 * 5
14 = 2 * 7
13 = 13
11 = 11

All others are included in the previous numbers.

ANSWER: 2^4 * 3^2 * 5 * 7 * 11 * 13 * 17 * 19 = 232 792 560

*/