var result;
function formatHuruf(str) {
    str= document.getElementById("formatHuruf").value
        result = str.replace(/([a-z]+)|([A-Z]+)/g, function(match,chr) {
          if(chr){
          return match.toUpperCase()
          }else {
          return match.toLowerCase()
          }
        });
        //console.log(result)
          document.getElementById("hasilFormatHuruf").innerHTML = result;
    }

//formatHuruf('MataHari paGi')
// function formatHuruf(s){
//  console.log(s);
//  var stringArr = [];
//  stringArr = s.split('');
//   for(var i = 0; i < stringArr.length; i++){
//    if(stringArr[i] === stringArr[i].toUpperCase()){
//      stringArr[i] = stringArr[i].toLowerCase();
//     // console.log(stringArr[i]);
//    }else{
//      stringArr[i] = stringArr[i].toUpperCase();
//     // console.log(stringArr[i]);
//    }
//    var result = stringArr.join("");
//   }
//  return result;
// }
//
// hasil = formatHuruf("MataHari PaGi saNgaT");
//
// console.log(hasil);
