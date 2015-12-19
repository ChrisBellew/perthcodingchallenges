// https://projecteuler.net/problem=2
// http://thejavamathematician.blogspot.com.au/2015/01/4-ways-to-generate-fibonacci-numbers.html
var answer = 4613732;

var maxFib = 4000000;

var sum = 0;

var fibs = [];
fibs[0] = 0;
fibs[1] = 1;

var current = 0;
var next = 1;

// Generate fibonacci sequence
do {
    fibs[next] = fibs[current] + fibs[next];
    
    current = next;
    next = (current === 0) ? 1 : 0;

    // If result is even number, add to sum
    if (fibs[next] % 2 === 0) {
        sum += fibs[next];
    }
    
}while (fibs[next] < maxFib);


console.log(sum + ' is ' + ((sum === answer) ? 'correct':'incorrect'));