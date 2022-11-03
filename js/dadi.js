
const utente1 = Math.floor(Math.random() * 6 + 1)
console.log(utente1)

const utente2 = Math.floor(Math.random() * 6 + 1)
console.log(utente2)

if (utente1 < utente2) {
    console.log("utente1 uno vince")
    alert("Pippo Vince")
} else {
    console.log("utente2 uno vince")
    alert("Pluto Vince")
}