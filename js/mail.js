
const userName = prompt("inserisci la tua mail")
// console.log(userName)
//                     0                     1                    2                  3                 4             
const listaMail = ["mumford@gmail.it", "massive@gmail.com", "rino@gmail.com", "nin@gmail.com", "lucio@gmail.com"];

// console.log(listaMail);

let trovato = false;


for (let i = 0; i < listaMail.length; i++) {

    // console.log((listaMail[i]))

    if (listaMail === userName) {

        alert("utente autorizzato")

    } else {

        alert("untente non autorizzato")
    }

}