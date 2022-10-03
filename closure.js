function list_member_exo(member_1){
    return function(member_2){
        return function(member_3){
            return member_1+","+member_2+","+member_3;
        }
    }
}

var EXO1 = list_member_exo("\nSehun"); 
var EXO2 = EXO1("Chanyeol");
var EXO3 = EXO2("Baekhyun\n"); 


console.log(EXO3); // 
