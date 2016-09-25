function polaAngka(arr)
{
  for(var i=0;i<arr.length;i++){
    if(i===1)
    {
        return i
    }
    else if(arr[i+1]-arr[i] === arr[i+2]-arr[i+1] && arr[i+2]-arr[i+1] === arr[i+3]-arr[i+2])
    {
      if((arr[i+1]-arr[i]) === -2){
console.log("pola angka : dikurang "+(-(arr[i+1]-arr[i])));
      }else{
    console.log("pola angka : ditambah "+(arr[i+1]-arr[i]));
  }
  }else if(arr[i+1]/arr[i] === arr[i+2]/arr[i+1] && arr[i+2]/arr[i+1] === arr[i+3]/arr[i+2]){
    if((arr[i+1]/arr[i]) === 3){
      console.log("pola angka : dikali "+(arr[i+1]/arr[i]))
    }else
      console.log("pola angka : dibagi "+(arr[i]/arr[i+1]))
     }
     else {
          console.log("pola angka tidak ada");
     }
}
}
polaAngka([1,4,7,10])
polaAngka([7,5,3,1])
polaAngka([1,3,9,27])
polaAngka([27,9,3,1])



// [1,3,5,7] = "pola angka : ditambah 2"
// [1,3,9,27] = "pola angka : dikali 3"
// var polaAngka = [1,3,5,7]
// var x=2
// var result;
// for(var i=0;i<polaAngka.length;i++)
// {
//   if(i===3)return i
//   else if(polaAngka[i]+x === polaAngka[i+1]){
//   result = "pola angka : ditambah "+x;
// }
// console.log(result)
// return result
// }
