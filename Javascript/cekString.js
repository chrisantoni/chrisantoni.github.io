function cekString(kumpulanHuruf,kata){
  var flag=false;
  var tampungKata = []
var arrayHuruf = kumpulanHuruf.split('')
var arrayKata = kata.split('')

for(var i=0;i<arrayKata.length;i++)
    {
      for(var j=0;j<arrayHuruf.length;j++){
      if(arrayKata[i] === arrayHuruf[j]){
      tampungKata.push(arrayKata[i])
    }
      }
    }
    if(tampungKata.length === kata.length)
    return true
    else {
      return false
    }
}
console.log(cekString("abcd","ada"));//true
console.log(cekString("abcdefghijklmno", "matahari"));//false
// var kata = 'kata'
// var huruf = 'akta'
//
// huruf = kata
// console.log(huruf);
