function jenisBilangan()
{
  var flag=false
    for(var i=1;i<=100;i++)
    {
      if(i%2===0)
      {
        if(i===2)
        {console.log(i+" adalah bilangan prima")}
        else if(i%2 !== 0 && i%3 !==0 && i%5 !==0 && i%7 !==0)
        {
          console.log(i+" adalah bilangan prima")
        }
        else{
        console.log(i+" adalah bilangan genap")
      }
      }else if(i%2 !==0)
      {
        if(i===3 || i===5 || i === 7){
          console.log(i+" adalah bilangan prima")
        }else if(i%2 !== 0 && i%3 !==0 && i%5 !==0 && i%7 !==0)
        {
          if(i===1){console.log(i+" adalah bilangan ganjil")}else
          console.log(i+" adalah bilangan prima")
        }else{
        console.log(i+" adalah bilangan ganjil")
      }
      }
    }
}
jenisBilangan()
