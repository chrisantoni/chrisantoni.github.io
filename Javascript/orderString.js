var hasil;
var stringOrder = function(string)
{
   string = document.getElementById("inputString").value
   var arraySplit = string.split('')
   hasil = arraySplit.sort()
   console.log(hasil)
   document.getElementById("hasilKonversiString").innerHTML = hasil;
}
//stringOrder('matahari')
