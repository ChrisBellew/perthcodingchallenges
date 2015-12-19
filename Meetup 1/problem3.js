var x = 1, div = 0, primes = [];

while(primes.length != 13195) 
{
    x++;
    for(var i = 2; i < x && !div; i++)
    {
        if(!(x % i))
        {
          div++;  
        } 
        if(!div)
        {
            primes.push(x);
        }
        else
        {
            div = 0;
        }
    }
}

console.log(primes[primes.length-1]);