function faktorPrima(remainder) {
      var result = [], i;
      var resultToString;
      var splitPangkat;
      for (i = 2; i <= remainder; i++) {
          while ((remainder % i) === 0) {
              result.push(i);
              remainder /= i;
          }
      }
resultToString = result.toString().replace(/,/g,'')
console.log(resultToString);
      for(var i=1;i<resultToString.length;i++)
      {
        if(resultToString[i]===resultToString[i+1])continue
        splitPangkat = resultToString.split(resultToString[i]).length-1
      console.log(resultToString[i]+" pangkat "+splitPangkat);
      }
  }
  faktorPrima(12)




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
//   resultToString = result.toString().replace(/,/g,'')
//   console.log(resultToString);
//       for(var i=1;i<resultToString.length;i++)
//         {
//           if(resultToString[i]===resultToString[i+1])continue
//           splitPangkat = resultToString.split(resultToString[i]).length-1
//         console.log(resultToString[i]+" pangkat "+splitPangkat);
//         }
//   }
//   else return faktorPrima(num/x,result)
//
// }
// faktorPrima(12)
