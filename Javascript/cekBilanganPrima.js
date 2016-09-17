// var tampungPrima = []
// function isPrime(x){
//   var result = false
//       d = x-1;
//       if(x===1)
//       {
//         console.log(false)
//         return false
//       }
//       while (d > 1){
//         if ((x % d) == 0) {
//         console.log(result)
//         return result
//         }
//         d--;
//       }
//       tampungPrima.push(x)
//       result = true
//       console.log(result)
//           console.log(tampungPrima)
//     }
//
// isPrime(7)

// function cekBilanganPrima(number)
// {
//   if(number === 1)return false
//   if(number === 2)return true
//
// }
//
// console.log(cekBilanganPrima(1))

function cekBilanganPrima(angka)
{
  if(angka===1){
    console.log(angka+": bukan prima")
    return false
  }else if(angka===2){
    console.log(angka+": bilangan prima")
    return true
  }else if(angka===3){
    console.log(angka+": bilangan prima")
    return true
  }else if(angka===5){
    console.log(angka+": bilangan prima")
    return true
  }else if(angka===7){
    console.log(angka+": bilangan prima")
    return true
  }
  if(angka%2 !== 0 && angka%3 !==0 && angka%5 !==0 && angka%7 !==0)
  {
    console.log(angka+": bilangan prima")
    return true
  }else{
    console.log(angka+": bukan prima");
    return false
  }

  }
  //return false}
for(var i=1;i<100;i++)
{
  cekBilanganPrima(i)
}





























//cekBilanganPrima
