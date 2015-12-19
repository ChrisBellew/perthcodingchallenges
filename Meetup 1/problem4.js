// https://projecteuler.net/problem=4
//  numDigits = 3;
// var firstHalf = Math.pow(10, numDigits) - 3;

var answer = 906609;

var firstHalf = 997;
var found = false;

var palindrome;

while(firstHalf > 100 && !found) {
    palindrome = generateSixDigitPalindrome(firstHalf);
    
    for(var i = 999; i > 100 && !found; i--) {
        found = isFactor(palindrome, i) && isThreeDigits(palindrome, i);
        if(found) {
            console.log("factor is " + i);
        }
    }
    
    firstHalf--;
}

console.log(palindrome + ' is ' + ((palindrome === answer) ? 'correct':'incorrect'));

function generateSixDigitPalindrome(firstThreeDigits) {
    var str = firstThreeDigits.toString();
    str += str.split('').reverse().join('');
    return parseInt(str);
}

function isThreeDigits(numerator, denominator) {
    var num = numerator / denominator;
    return num >= 100 && num <= 999;
}

function isFactor(numerator, denominator) {
    return numerator % denominator === 0;
}




/*

The palindrome can be written as:

abccba

Which then simpifies to:

100000a + 10000b + 1000c + 100c + 10b + a

And then:

100001a + 10010b + 1100c

Factoring out 11, you get:

11(9091a + 910b + 100c)

So the palindrome must be divisible by 11.  Seeing as 11 is prime, at least one of the numbers must be divisible by 11.  So brute force in Python, only with less numbers to be checked:

Python
Hide Code
def c():
	max = maxI = maxJ = 0
	i = 999
	j = 990
	while (i > 100):
		j = 990
		while (j > 100):
			product = i * j
			if (product > max):
				productString = str(product)
				if (productString == productString[::-1]):
					max = product
					maxI = i
					maxJ = j
			j -= 11
		i -= 1
	return max, maxI, maxJ


Returns an answer in 0.016 secs.


*/