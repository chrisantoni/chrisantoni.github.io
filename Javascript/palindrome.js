var hasil;
function checkPalindrom(str) {
    str = document.getElementById("inputPalindrome").value
    hasil = (str == str.split('').reverse().join(''));
    console.log(hasil)
    document.getElementById("cekPalindrome").innerHTML = hasil;
}

//checkPalindrom("malam") == true
