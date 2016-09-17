function palindromeCont(myString){
var removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();
var checkPalindrome = removeChar.split('').reverse().join('');
if(removeChar === checkPalindrome){
  return true
}else{
  return false
}
}
console.log(palindromeCont("Aku suka rajawali, bila wajar aku suka"))//true
