function Bulan() {
    var sembilan = "september" ;
    var sepuluh = "oktober";
    return function() {
    console.log("\n"+"setelah bulan "+ sembilan+" Maka bulan berikutnya adalah bulan "+ sepuluh+ "\n");
    }
  }

  Bulan()();