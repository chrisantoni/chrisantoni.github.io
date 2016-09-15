 //formatAngka(250000, 100), menjadi 2,500
var fixedResult;
 function formatAngka(pembilang, pembagi)
 {
      pembilang= document.getElementById("bilangan").value
      pembagi= document.getElementById("bagi").value
   if(pembilang > pembagi)
   {
       var result= pembilang/pembagi;
       fixedResult = result.toLocaleString()
       //console.log(fixedResult)
        document.getElementById("hasilFormatAngka").innerHTML = fixedResult;
        document.getElementById("hint").innerHTML ="";
   }
   else {
     {
     var error = "pembilang harus lebih besar dari pembagi"
     //console.log(errorMessage)
     document.getElementById("hint").innerHTML = error;
     }
   }
 }

 //formatAngka(25,100)
