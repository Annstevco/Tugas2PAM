var pergram = 950000;
var x = 5;

function Total_harga(gram, n){
    return n * gram;
}

var payment = Total_harga(pergram,x);
console.log("Harga yang harus dibayarkan untuk membeli emas seberat 5 gram =  "+payment);