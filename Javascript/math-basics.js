var hasil;
function pangkatAngka(a,b)
{
  a = document.getElementById("angka").value
  b = document.getElementById("pangkat").value
	hasil = Math.pow(a,b);
  document.getElementById("hasilPangkatAngka").innerHTML = hasil;
}

function akarKuadrat(a)
{
  a = document.getElementById("akar").value
	hasil = Math.sqrt(a);
  document.getElementById("hasilAkarKuadrat").innerHTML = hasil;
}

function hipotenusa(a,b)
{
  a = document.getElementById("angka1").value
  b = document.getElementById("angka2").value
	hasil = Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));
  document.getElementById("hasilHipotenusa").innerHTML = hasil;
}

function luasLingkaran(a)
{
  a = document.getElementById("luasLingkaran").value
	hasil = Math.round(Math.PI*Math.pow(a,2));
  document.getElementById("hasilLuasLingkaran").innerHTML = hasil;
}
