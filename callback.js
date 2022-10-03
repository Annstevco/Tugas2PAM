console.log("\nMenghitung Luas Lingkaran");


setTimeout(selesai,5000)
console.log("{Sedang dalam proses perhitungan......}");

function selesai(){
    console.log("{Proses Telah Selesai, dan akan menunjukan hasil perhitungan}");
}

setTimeout(Proses_Kalkulasi,10000);
function Proses_Kalkulasi(){
    var R = 21;
    var phi = 3.14 ;
    var luas = phi * R * R;
    console.log("Luas lingkaran tersebut adalah "+luas+"\n");
}