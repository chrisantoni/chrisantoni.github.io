//cari sebuah kata yang mengandung jumlah variasi perulangan huruf paling banyak
// function repeatedLetter(string)
// {
//
// }
 //
 // var input = "Indahnya matahari di pagi ini"
 // result = "Indahnya"//perulangan terbanyak a dan n
 // function WordCount(str) {
 //   return str.split(" ").length;
 // };
 // console.log(WordCount("Indahnya matahari di pagi ini"));

 function repeatedLetter(str) {
   return ((str = str.split(' ').map(function(word) {
     var letters = word.split('').reduce(function(map, letter) {
           map[letter] = map.hasOwnProperty(letter) ? map[letter] + 1 : 1;
           return map;
         }, {});
     return {
       word: word,
       count: Object.keys(letters).filter(function(letter) {
         return letters[letter] > 1;
       }).length
     };
   }).sort(function(a, b) {
     return b.count - a.count;
   }).shift()) && str.count && str.word) || -1;
 }
 console.log(repeatedLetter('Indahnya matahari di pagi ini'));
