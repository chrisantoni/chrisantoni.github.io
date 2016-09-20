// function geserHuruf(string, number)
// {
//
// }

//
// konversi huruf tersebut dengan menggeser urutannya sebanyak n.
// Contohnya : input "Matahari Pagi" dan "4", menghasilkan "Qexelevm Tekm".
// Input "wxyz" dan "4", menghasilkan "abcd"
  //
  // function CaesarCipher(str, num) {
  //     var result = '';
  //     var charcode = 0;
  //
  //     for (i = 0; i < str.length; i++) {
  //         charcode = (str[i].charCodeAt()) + num;
  //         result += String.fromCharCode(charcode);
  //     }
  //   return result
  //
  // }
  // console.log(CaesarCipher('wxyz', 4));
  function geserHuruf(str, num) {
      var alphabet = "abcdefghijklmnopqrstuvwxyz";
      var newStr = "";
      for (var i = 0; i < str.length; i++) {
          var char = str[i],
          isUpper = char === char.toUpperCase() ? true : false;
          char = char.toLowerCase();
          if (alphabet.indexOf(char) > -1) {
              var newIndex = alphabet.indexOf(char) + num;
              if(newIndex < alphabet.length) {
                  isUpper ? newStr += alphabet[newIndex].toUpperCase() : newStr += alphabet[newIndex];
              } else {
                  var shiftedIndex = -(alphabet.length - newIndex);
                  isUpper ? newStr += alphabet[shiftedIndex].toUpperCase() : newStr += alphabet[shiftedIndex];
              }
          } else {
             newStr += char;
          }
      }
      return newStr;
  }
  console.log(geserHuruf('Matahari Pagi', 4));
  console.log(geserHuruf('wxyz', 4));
