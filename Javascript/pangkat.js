function pangkat(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * pangkat(base, exponent - 1);
}
console.log(pangkat(8,2));


// function pangkat(num1,num2)
// {
// return Math.pow(num1,num2)
// }
//
// console.log(pangkat(3,3))
