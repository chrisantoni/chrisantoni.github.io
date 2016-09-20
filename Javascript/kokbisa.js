//
// var tampungRandom=[]
// var random
// for(var i=0;i<10;i++)
// {
//   random = Math.floor(Math.random()*10)+1
//   tampungRandom.push(random)
// }
// console.log(tampungRandom);

var randoms = randomNumbers(10),
    rand = randoms(),
    result = [];
while(rand != null) {
    result.push(rand);
    rand = randoms();
}
console.log(result);


// var kumpulanHuruf = "aaawossrld"
// var kata = 'world'
//
// var arrayHuruf = kumpulanHuruf.split('')
// var arrayKata = kata.split('')
//
// for(var i=0;i<arrayHuruf.length;i++)
// {
//   for(var j=0;j<arrayKata.length;j++)
//   {
//     if(arrayHuruf[i] !== arrayKata[i])
//     arrayHuruf.splice(i,1)
//   }
// }
//
// if(arrayHuruf.length === arrayKata.length)
// {
//   console.log("true");
// }else {
//   console.log('false');
// }











// function stringCompression(string) {
//   var hapusSpasi = string.replace(/ /gi,'')
//     var frekuensi = [];
//     for (var i=0; i<hapusSpasi.length;i++) {
//         var karakter = hapusSpasi.charAt(i);
//         // aku makan nasi
//         if (frekuensi[karakter]) {
//            frekuensi[karakter]++;
//         } else {
//            frekuensi[karakter] = 1;
//         }
//     }
//
//     return frekuensi;
// };
// var string= "aku makan nasi"
// var frekuensi = {}
// for(var i=0;i<string.length;i++){
// var karakter = string.charAt(i)
//
// if(frekuensi.karakter)
// {frekuensi.karakter++
// }
// else frekuensi.karakter = 1
// }
//
// console.log(frekuensi);
