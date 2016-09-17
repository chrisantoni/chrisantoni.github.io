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


var string= "aku makan nasi"
var frekuensi = {}
for(var i=0;i<string.length;i++){
var karakter = string.charAt(i)

if(frekuensi.karakter)
{frekuensi.karakter++
}
else frekuensi.karakter = 1
}

console.log(frekuensi);
