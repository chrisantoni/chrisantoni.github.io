function faktorPrima(num){
  var root = Math.sqrt(num)
  var result = arguments[1] || []
  var x = 2
  if(num % x){
   x = 3
   while((num % x) && ((x = x + 2) < root)){}
  }
  if(x<=root)x=x
  else x=num
  result.push(x)
  if(x===num)return result
  else return faktorPrima(num/x,result)
}
console.log(faktorPrima(12))
