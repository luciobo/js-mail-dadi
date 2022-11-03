
const userName = prompt("inserisci la tua mail")
// console.log(userName)
//                     0                     1                    2                  3                 4             
const listaMail = ["mumford@gmail.it", "massive@gmail.com", "rino@gmail.com", "nin@gmail.com", "lucio@gmail.com"];

// console.log(listaMail);

let trovato = false;

for (let i = 0; i < listaMail.length; i++) {

    // console.log((listaMail[i]))

    if (listaMail[i] === userName) {

        trovato = true;

    } 

}

if (trovato == true) {
    alert("email corretta")
} else {
    alert("email non corretta")
}

