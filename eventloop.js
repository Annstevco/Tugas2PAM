function Sign_in(langkah_awal, waktu) {
    while (waktu > 0){
        waktu--;
    }
    console.log(langkah_awal);
}

console.log("\n[Tahap untuk sign in akan dimulai!]")
console.log("[Masukan username yang sudah terdaftar]")
Sign_in("[Memasukan Username Selesai]", 10000000000);
console.log("[Memasukan Password yang sudah di daftarkan]")
Sign_in("[Memasukan Password Selesai]", 10000000000);
console.log("[silahkan mengklik tombol sign in]")
Sign_in("[mengklik tombol sign in Selesai]", 10000000000);
console.log("[Anda sudah berhasil sign in akun anda]\n");