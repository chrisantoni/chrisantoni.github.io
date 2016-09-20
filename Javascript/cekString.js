function cekString(kumpulanHuruf,kata){
  var arrayHuruf = kumpulanHuruf.split('')
  var arrayKata = kata.split('')
  for(var i=0;i<arrayHuruf.length;i++)
  {
    for(var j=0;j<arrayKata.length;j++)
    {
      if(arrayHuruf[i] !== arrayKata[i])
      arrayHuruf.splice(i,1)
    }
  }
  if(arrayHuruf.length === arrayKata.length)
  {
    return true
  }else {
    return false
  }
}
console.log(cekString('abcdaa','adaa'));//true
console.log(cekString("abcdefghijklmno", "matahari"));//false
console.log(cekString("aaawossrld", "world"))//true
console.log(cekString("aaawossrld", "worldd"))//false
