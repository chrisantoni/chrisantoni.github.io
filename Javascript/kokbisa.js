function countDown(num)
{
  if(num===0)return
    console.log(num);
    return countDown(num-1)
}

countDown(10)




  // function indexPrima(index) {
  //     var primes = [''],
  //         n, divisor;
  //     if (index === 0) {
  //         return ("index should start at 1");
  //     } else {
  //         var limit = (index * 10);
  //     }
  //     outerLoop:for (n = 2; n <= limit; n++) {
  //         for (divisor = 2; divisor < n; divisor++) {
  //             if (n % divisor === 0) {
  //                 continue outerLoop;
  //             }
  //         }
  //         primes.push(n);
  //     }
  //
  //     return primes[index];
  //
  // }
  // console.log(indexPrima(4))
