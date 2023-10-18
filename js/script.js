// RACOLTA DATI
const km = parseInt(prompt("ciao quanti chilometri vuoi percorere"))
console.log(km, typeof km)
const age = parseInt(prompt("quanti anni hai ?"))
console.log(age, typeof age)
const costOfTravel = (0.21 * km)
console.log(costOfTravel)
// logica

let discount =""

if (age <18)
{
   discount = (costOfTravel * 0.20 % 100)
   console.log(discount)
}
else if (age >65)
{
   discount = (costOfTravel * 0.40 % 100)
}
else 
{
   discount = (costOfTravel)
}

let totalPrice =""
if (age <18 || age >65)
{
   totalPrice = (costOfTravel - discount)
}
else {
   totalPrice = (costOfTravel)
}



const ticket = totalPrice. toFixed(2)
console.log(ticket, typeof ticket)

const message = `il prezzo del tuo biglieto è ${ticket}€`

// OUTPUT

document.getElementById("ticket") .innerHTML = message







