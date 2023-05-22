



let email = ["Fabio Cannavaro @italia.it",
"Gianluigi Buffon @italia.it",
"Gianluca Zambrotta @italia.it",
"Alessandro Nesta @italia.it",
"Fabio Grosso @italia.it",
"Marco Materazzi @italia.it",
"Mauro Camoranesi @italia.it",
"Andrea Pirlo @italia.it",
"Gennaro Gattuso @italia.it",
"Francesco Totti @italia.it",
"Luca Toni @italia.it",
"Filippo Inzaghi @italia.it",
"Simone Perrotta @italia.it",
"Vincenzo Iaquinta @italia.it",
"Alberto Gilardino @italia.it",
"Cristiano Zanetti @italia.it",
"Angelo Peruzzi @italia.it",
"Massimo Oddo @italia.it",
"Vincenzo Montella @italia.it",
"Alberto Aquilani @italia.it"]

let tuaemail = prompt("inserisci la tua email")
let flag = false;

for(let i=0; i<=email.length; i++){
    if(email[i] === tuaemail){
        flag = true
    }
}
if(flag === true){
    console.log("email corretta")
}
else{
    console.log("email non corretta")
}