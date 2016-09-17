//
var tampungPrima = [0]
var flag = true
const totalAngka = 10000000000
function indexPrima(index)
{
  var totalIndex = Math.pow(index,2)
  for(var i=1;i<=totalIndex;i++)
  {
    if(i===2){
      flag = true
      if(flag)tampungPrima.push(i)
     }else if(i===3){
       flag= true
       if(flag)tampungPrima.push(i)
     }else if(i===5){
       flag= true
       if(flag)tampungPrima.push(i)
     }else if(i===7){
       flag= true
       if(flag)tampungPrima.push(i)
     }
    if(i%2 !== 0 && i%3 !==0 && i%5 !==0 && i%7 !==0)
    {
      if(i===1)flag=false
      else if(i>1){
      flag=true
      tampungPrima.push(i)
    }
    }else{
      flag=false
    }
  }
  console.log(tampungPrima[index])
}
indexPrima(10000)
// function indexPrima()
// {
//   var tampungPrima=[]
//   var totalNumber = 10;
//       for(var i=0;i<10;i++)
//       {
//         if(i===1){
//           return false
//         }else if(i===2){
//           tampungPrima.push(i)
//           console.log(tampungPrima);
//         }else if(i===3){
//           tampungPrima.push(i)
//           console.log(tampungPrima);
//         }
//         if(i%2 !== 0 && i%3 !==0)
//         {
//           tampungPrima.push(i)
//           console.log(tampungPrima)
//         }else{
//           return false
//         }
//         var joinPrima = tampungPrima.join('')
//         console.log(joinPrima);
//       }
//     console.log(joinPrima);
//   // for(var i=0;i<tampungPrima.length;i++){
//   // if(angka === i+1)return tampungPrima[i]}
// }
//
// indexPrima()
//
// // console.log(indexPrima(3))
