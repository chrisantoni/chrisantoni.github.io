function sortNumber(a,b)
{
  return a-b
}
var total=0
function array1(numArray){
var numArray01 = numArray.sort(sortNumber);
console.log(numArray01);
var angkaMaksimal = numArray01[numArray01.length-1]
console.log(angkaMaksimal);
var total=0
for(var i=0;i<numArray01.length-1;i++)
{
  total += numArray01[i]
}
return (total<=angkaMaksimal)?true:false
}

console.log(array1([1,2,15,4,5]))//true
