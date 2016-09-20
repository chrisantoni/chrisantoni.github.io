function sortNumber(a,b)
{
  return a - b;
}
var total=0
function array1(numArray){
numArray = numArray.sort(sortNumber);
var angkaMaksimal = numArray[numArray.length-1]
var total=0
for(var i=0;i<numArray.length-1;i++)
{
  total += numArray[i]
}
return (total<=angkaMaksimal)?true:false
}

console.log(array1([1,2,3,4,5,15]))//true
