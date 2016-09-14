var pilihanLawan;
function randomPilihanLawan(){
      var jempolLawan="jempol";
      var telunjukLawan="telunjuk";
      var kelingkingLawan="kelingking";
      var random = (Math.random()*1)+0;
      if(random >= 0 && random <= 0.33)
      {
        pilihanLawan = jempolLawan;
        document.getElementById("pilihanLawan").innerHTML = jempolLawan;
        //console.log("pilihan lawan : "+jempolLawan);
      }else if(random > 0.33 && random <= 0.66)
      {
        pilihanLawan = telunjukLawan;
        document.getElementById("pilihanLawan").innerHTML = telunjukLawan;
      //  console.log("pilihan lawan : "+telunjukLawan);
      }else if(random > 0.66 && random <= 1)
      {
        pilihanLawan = kelingkingLawan;
        document.getElementById("pilihanLawan").innerHTML = kelingkingLawan;
      //  console.log("pilihan lawan : "+kelingkingLawan);
      }
}
//randomPilihanLawan()
function bertarung(a,b)
{
  a = document.getElementById("pilihan").value
  b = document.getElementById("pilihanLawan").innerHTML
	if(a==b)
	{
    //console.log("seri")
		document.getElementById("hasilBertarung").innerHTML = "seri";
	}else if(a != b)
	{
		if(a == "jempol" && b == "telunjuk")
		{
      //console.log("pengguna menang")
			document.getElementById("hasilBertarung").innerHTML = "Pengguna menang";
		}
		else if(a == "jempol" && b == "kelingking")
		{
      //console.log("lawan menang")
				document.getElementById("hasilBertarung").innerHTML = "Lawan menang";
		}else if(a == "telunjuk" && b == "jempol")
		{
      //console.log("lawan menang")
				document.getElementById("hasilBertarung").innerHTML = "Lawan menang";
		}else if(a == "telunjuk" && b == "kelingking")
		{
      //console.log("pengguna menang")
			document.getElementById("hasilBertarung").innerHTML = "Pengguna menang";
		}else if(a == "kelingking" && b == "telunjuk")
		{
      //console.log("lawan menang")
			document.getElementById("hasilBertarung").innerHTML = "Lawan menang";
		}else if(a == "kelingking" && b == "jempol")
		{
      //console.log("pengguna menang")
			document.getElementById("hasilBertarung").innerHTML = "Pengguna menang";
		}
	}
}


//bertarung(choice,pilihanLawan);
