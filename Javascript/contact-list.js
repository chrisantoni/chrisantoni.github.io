var daftarKontak = [];

var Program = {
		tambahKontak : function(nama, email, telepon)
		{
      nama= document.getElementById("nama").value
      email= document.getElementById("email").value
      telepon= document.getElementById("telepon").value
			daftarKontak.push(nama,email,telepon);

      var message = "kontak baru ditambahkan"
      document.getElementById("kontakBaru").innerHTML = message;
		},
		lihatSemua : function()
		{
			for(i=0;i<daftarKontak.length;i+=3){
			var result = "nama : "+daftarKontak[0+i]+"\nemail : "+daftarKontak[1+i]+"\ntelepon : "+daftarKontak[2+i]+"\n";
      console.log(result);
      document.getElementById("hasilKontakList").innerHTML += ","+result;
			}

		}
		,
		cariKontak : function(nama)
		{
      nama= document.getElementById("cariNama").value
			for(i=0;i<daftarKontak.length;i++){
			if( nama == daftarKontak[i])
			{

				var message = daftarKontak[i]+daftarKontak[i+1]+daftarKontak[i+2];
        document.getElementById("hasilPencarian").innerHTML = message;
			}
			}
		}
}
Program.tambahKontak("tony","tony_chen93@yahoo.com","324234312");
// Program.tambahKontak("Andy","andy_chen@yahoo.com","1313444");
// Program.tambahKontak("toni","tony_chen@yahoo.com","1313444");
// Program.tambahKontak("budi","budy_chen@yahoo.com","1313444");
//console.log(daftarKontak)
// Program.lihatSemua();
// Program.cariKontak("toni");
