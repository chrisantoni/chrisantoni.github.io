var hasil;
var waktuKonversi = function(waktu)
{
    waktu = document.getElementById("input").value
    var jam = Math.floor(waktu/60)
    var menit_jam = jam * 60
    var sisa = waktu - menit_jam
    hasil = jam+":"+sisa
    console.log(hasil)
    document.getElementById("hasilKonversi").innerHTML = hasil;
}

//


//waktuKonversi(45)
// konversiWaktu(85)
// konversiWaktu(185)
// konversiWaktu(250)
// konversiWaktu(450)
// konversiWaktu(1450)
