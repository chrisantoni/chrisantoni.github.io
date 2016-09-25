"use strict";
var dataMenu = [
  {nama:'nasi goreng',jenis:'makanan',harga:25000},
  {nama:'ayam goreng',jenis:'makanan',harga:12000},
  {nama:'tahu',jenis:'makanan',harga:5000},
  {nama:'teh',jenis:'minuman',harga:5000},
  {nama:'coca cola',jenis:'minuman',harga:15000},
  {nama:'jus buah',jenis:'minuman',harga:25000}
]
class Restaurant{

  addMenu()
  {
    var tampungMenu = []
      var addMenu = dataMenu.map(function(menu){
        tampungMenu.push("add new menu :"+menu.nama)
      })
      console.log(tampungMenu);
  }

  showList()
  {
      var isMenu = function(menuList)
      {
        return menuList
      }

      var showMenu = dataMenu.map(isMenu)
      console.log("Daftar Menu")
      console.log(showMenu)
  }

  addOrder()
  {
      //var tampungOrder = [1,2,3]
      var addingOrder = dataMenu.filter(function(order)
    {
      return order.nama === 'nasi goreng' || order.nama === "teh"
    }).map(function(orderName){
      return (orderName.nama)
    })
    for(var i=0;i<addingOrder.length;i++){
    console.log("add order : "+addingOrder[i]);
  }
  console.log("daftar pesanan :");
  for(var i=0;i<addingOrder.length;i++)
  {
    console.log(addingOrder.length-1+" "+addingOrder[i]);
  }
  }

  listOrder()
  {
    this.addOrder()
  }

  billing()
  {
    var hargaTotal = dataMenu.filter(function(order)
  {
    return order.nama === 'nasi goreng' || order.nama === "teh"
  }).map(function(orderHarga){
    return (orderHarga.harga)
  }).reduce(function(total,order){
    return total+order
  },0)

  console.log("total billing normal : "+hargaTotal+"\n");
  }

  promoBilling()
  {
    var addingOrder = dataMenu.filter(function(order)
    {
          return order.nama === 'nasi goreng' || order.nama === "teh" || order.nama === "jus buah"
    }).map(function(orderName){
          return (orderName.nama)
    })
          for(var i=0;i<addingOrder.length;i++){
          console.log("add order : "+addingOrder[i]);
  }

      console.log("daftar pesanan :");
      for(var i=0;i<addingOrder.length;i++)
      {
        if(addingOrder[i] === "jus buah"){
          console.log(addingOrder.length-1+" "+addingOrder[i]);
        }else{
        console.log(addingOrder.length-2+" "+addingOrder[i]);
      }
      }

      var hargaTotal = dataMenu.filter(function(order01)
      {
        if(order01.nama === "teh")return false
        return order01.nama === 'nasi goreng' || order01.nama === "teh" || order01.nama === "jus buah"
      }).map(function(orderHarga01){
        if(orderHarga01.nama === "jus buah")
        return orderHarga01.harga*2
        return (orderHarga01.harga)
      }).reduce(function(total01,order01){
      return total01+order01
      },0)
      console.log("\ntotal setelah promo 1 : "+hargaTotal+"\n");
  }

  promoBilling_02()
  {
    var promoBilling02 = dataMenu.filter(function(order)
  {
    return order.nama === 'nasi goreng' || order.nama === "teh" || order.nama === "jus buah"
  }).map(function(orderName){
    return (orderName.nama)
  })
  for(var i=0;i<promoBilling02.length;i++){
  console.log("add order : "+promoBilling02[i]);
}

console.log("daftar pesanan :");
for(var i=0;i<promoBilling02.length;i++)
{
  if(promoBilling02[i] === "jus buah"){
    console.log(promoBilling02.length-1+" "+promoBilling02[i]);
  }else{
  console.log(promoBilling02.length-2+" "+promoBilling02[i]);
}
}

var harga = dataMenu.filter(function(order)
{
  return order.nama === 'nasi goreng' || order.nama === "teh" || order.nama === "jus buah"
}).map(function(orderHarga){
  if(orderHarga.nama === "jus buah")
  return orderHarga.harga
  return (orderHarga.harga)
}).reduce(function(total,order){
return total+order
})

console.log("\ntotal setelah promo 2 : "+harga+"\n");
  }

  ccBilling(days,jenisPembayaran)
  {
    var weekday = new Array(7);
    weekday[1] = "Monday"
    weekday[2] = "Tuesday"
    weekday[3] = "Wednesday"
    weekday[4] = "Thursday"
    weekday[5] = "Friday"
    weekday[6] = "Saturday"
    weekday[7]=  "Sunday"

    //var n = weekday[d.getDay()];
    var ccBill = dataMenu.filter(function(order)
  {
    return order.nama === 'nasi goreng' || order.nama === "teh" || order.nama === "jus buah"
  }).map(function(orderName){
    return (orderName.nama)
  })
  for(var i=0;i<ccBill.length;i++){
  console.log("add order : "+ccBill[i]);
}

console.log("daftar pesanan :");
for(var i=0;i<ccBill.length;i++)
{
  if(ccBill[i] === "jus buah"){
    console.log(ccBill.length-1+" "+ccBill[i]);
  }else{
  console.log(ccBill.length-2+" "+ccBill[i]);
}
}
    if(jenisPembayaran === "credit card"){
if(days === weekday[1] ||days === weekday[2] ||days === weekday[3] ||days === weekday[4] ||days === weekday[5]){
    var harga = dataMenu.filter(function(order)
    {
      return order.nama === 'nasi goreng' || order.nama === "teh" || order.nama === "jus buah"
    }).map(function(orderHarga){
      if(orderHarga.nama === "jus buah")
      return ((orderHarga.harga-(orderHarga.harga*0.25))*2)
      return (orderHarga.harga-(orderHarga.harga*0.25))
    }).reduce(function(total,order){
    return total+order
  },0)
    console.log("\ntotal setelah promo weekdays : "+harga);
    }
    if(days === weekday[6] ||days === weekday[7]){
        var harga = dataMenu.filter(function(order)
        {
          return order.nama === 'nasi goreng' || order.nama === "teh" || order.nama === "jus buah"
        }).map(function(orderHarga){
          if(orderHarga.nama === "jus buah")
          return ((orderHarga.harga-(orderHarga.harga*0.5))*2)
          return (orderHarga.harga-(orderHarga.harga*0.5))
        }).reduce(function(total,order){
        return total+order
      },0)
        console.log("\ntotal setelah promo weekend : "+harga);
        }
  }else if(jenisPembayaran === "cash"||"tunai")
  {
    if(days === weekday[1] ||days === weekday[2] ||days === weekday[3] ||days === weekday[4] ||days === weekday[5]){
        var harga = dataMenu.filter(function(order)
        {
          return order.nama === 'nasi goreng' || order.nama === "teh" || order.nama === "jus buah"
        }).map(function(orderHarga){
          if(orderHarga.nama === 'jus buah')
          return 2*orderHarga.harga
          return orderHarga.harga
        }).reduce(function(total,order){
        return total+order
      },0)
        console.log("\ntotal harga : "+harga);
        }
        if(days === weekday[6] ||days === weekday[7]){
            var harga = dataMenu.filter(function(order)
            {
              return order.nama === 'nasi goreng' || order.nama === "teh" || order.nama === "jus buah"
            }).map(function(orderHarga){
              if(orderHarga.nama === 'jus buah')
              return 2*orderHarga.harga
              return orderHarga.harga
            }).reduce(function(total,order){
            return total+order
          },0)
            console.log("\ntotal harga : "+harga);
            }
  }
  }
}

var restaurant = new Restaurant()
restaurant.addMenu()
restaurant.showList()
restaurant.listOrder()
restaurant.billing()
restaurant.promoBilling()
restaurant.promoBilling_02()
restaurant.ccBilling("Monday","credit card")
