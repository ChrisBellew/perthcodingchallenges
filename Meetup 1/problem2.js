// https://projecteuler.net/problem=2
var answer = 4613732;

var maxFib = 4000000;

var sum = 0;

var fibNumOne = 0;
var fibNumTwo = 1;
var fibNext;

// Generate fibonacci sequence
do {
    // Calulate current number
    fibNext = fibNumOne + fibNumTwo;
    
    // If result is even number, add to sum
    if (fibNext % 2 === 0) {
        sum += fibNext;
    }
    
    // Set the numbers for the next calculation
    fibNumOne = fibNumTwo;
    fibNumTwo = fibNext;
}while (fibNext < maxFib);


console.log(sum + ' is ' + ((sum === answer) ? 'correct':'incorrect'));