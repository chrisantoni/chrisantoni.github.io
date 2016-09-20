function faktorPrima(remainder) {
      var result = [], i;

      for (i = 2; i <= remainder; i++) {
          while ((remainder % i) === 0) {
              result.push(i);
              remainder /= i;
          }
      }
      return result
  }
console.log(faktorPrima(120));



// function faktorPrima(num){
//   var root = Math.sqrt(num)
//   var result = arguments[1] || []
//   var resultString;
//   var x = 2
//   var flag=false;
//   if(num % x){
//    x = 3
//    while((num % x) && ((x = x + 2) < root)){}
//   }
//   if(x<=root){
//     x=x
//   //  return console.log(x+1+" pangkat "+1);
// }else
// {
//   x=num
// }
//   result.push(x)
//   if(x===num)
//   {
//   console.log(result)
//     // for(var i=0;i<result.length;i++)
//     // {
//     //   if(result[i] === result[i+1])
//     //   {
//     //       if(result[i+1] === result[i+2]){
//     //       flag=false
//     //     console.log(result[i]+" pangkat "+3);
//     //   }else if(result[i+1] !== result[i+2])
//     //   {
//     //     if(result[i+2] !== result[i+3])
//     //     {
//     //       console.log(result[i+2]+" pangkat "+1);
//     //       console.log(result[i+3]+" pangkat "+1);
//     //     }
//     //   }
//     // }
//     // }
//   }
//   else return faktorPrima(num/x,result)
//
// }
// faktorPrima(120)
