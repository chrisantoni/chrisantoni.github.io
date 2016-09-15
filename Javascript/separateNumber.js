var hasilAkhir ;
var numberArr = [];
function separateNumber(number){
  number= document.getElementById("numberSeparate").value
 var convertString = number.toString();
 if(convertString.length>=10 && convertString.length<=16){
 numberArr = convertString.split('');
 for(var i = 0; i < numberArr.length; i++){

  if(numberArr[i] % 2 != 0){
   if(numberArr[i+1] % 2 != 0){
    if(numberArr[i+1] === undefined){
      numberArr[i]+="";
    }else{
     numberArr[i]+="-";
    }
   }

  }
  var result = numberArr.join("");

 }
 hasilAkhir =  result;
 document.getElementById("hasilSeparateNumber").innerHTML = hasilAkhir
 document.getElementById("errorMessage").innerHTML = ""
}else{
 //console.log("error, please enter a number between 10-16");
 var errorMessage = "error, please enter a number between 10-16"
  document.getElementById("errorMessage").innerHTML = errorMessage
}
}
