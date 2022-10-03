function perasaan(feel){
    var nice_try = "Ungkapan tidak menggunakan IIFE";
    console.log(feel+" "+"merupakan salah satu output"+nice_try);
}

(function(feel){
    console.log("I LOVE U"+" "+feel);
})("menggunakan function IIFE");

perasaan("ILOVE U"); 
