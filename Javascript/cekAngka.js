function cekAngka(num1,num2)
{
  var num1String = num1.toString().split('')
  var num2String = num2.toString().split('')
  var tampungNum1String = []
  var tampungNum2String = []
  for(var i=0;i<num1String.length;i++)
  {
    if(num1String[i] === num1String[i+1])
    {
      tampungNum1String.push(num1String[i])
    }
  }

  for(var i=0;i<num2String.length;i++)
  {
    if(num2String[i] === num2String[i+1])
    {
      tampungNum2String.push(num2String[i])
    }
  }

  for(var i=0;i<tampungNum1String.length;i++)
  {
    if(tampungNum1String.length >= tampungNum2String.length)
    {
      for(var j=0;j<tampungNum1String.length;j++)
      {
        if(tampungNum1String[i] === tampungNum2String[j])return console.log('true')
        else return console.log('false')
      }
    }else
    {
      for(var j=0;j<tampungNum2String.length;j++)
      {
        if(tampungNum1String[i] === tampungNum2String[j])return console.log('true')
        else return console.log('false')
      }
    }
  }
}
cekAngka(1212111223,1211445)
//input = "1212111223" dan "1211445" = true
//parameter pertama ada "111" dan di parameter kedua didapatkan "11"
