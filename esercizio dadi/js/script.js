//let utente = document.getElementById("dado").addEventListener("click", function(){
//    Math.floor(Math.random() * 10 + 1);
//    console.log(utente);
//})
let utente = Math.floor(Math.random() * 6 + 1); console.log(utente)
let pc = Math.floor(Math.random() * 6 + 1);console.log(pc)

if(utente > pc){
    console.log("vinto")
}
else if(utente < pc){
    console.log("perso")
}
else if(utente = pc){
    console.log("pareggio")
}