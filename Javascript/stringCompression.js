function stringCompression(string) {
  var hapusSpasi = string.replace(/ /gi,'')
    var frekuensi = [];
    for (var i=0; i<hapusSpasi.length;i++) {
        var karakter = hapusSpasi.charAt(i);
        // aku makan nasi
        if (frekuensi[karakter]) {
           frekuensi[karakter]++;
        } else {
           frekuensi[karakter] = 1;
        }
    }

    return frekuensi;
};

console.log(stringCompression("aku makan nasi"));

// function stringCompression()
// {
//   var flag=false
//   var count=0
//   var countTotal=0
//   var tempArray = []
//   var stringKata = "aku makan nasi"
//   var removeSpace = stringKata.replace(/ /gi,'')
//   var arrayKata = removeSpace.split('')
//   var sortKata = arrayKata.sort()
// //sortKata = aaaaikkmnnsu
//   for(var i=0;i<sortKata.length;i++){
//   if(sortKata[0] === sortKata[i])
//   {
//     count++
//   }
//   if(sortKata[count] === sortKata[i])
//   {
//     console.log(sortKata[count])
//   }
// }
// //console.log(count)
// //console.log(sortKata[tempArray.length]+""+countY)
// }
//
// stringCompression()
