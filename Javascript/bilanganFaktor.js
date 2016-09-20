var numberArr = [];
function bilanganFaktor(n){
    for( var i = 1;  i <= n;  i++ ) {
        if( n % i == 0 ){
          numberArr.push(i);
        }
    }
      var result = numberArr.join(",");

      return result;
}

hasil = bilanganFaktor(10);
console.log(hasil);
