const km = parseFloat(prompt('Quanti chilometri vuoi percorrere?'))
const age = parseInt(prompt('Quanti hanni hai?'))

// discount values
const discountUnder18 = 0.2
const discountOver65 = 0.4

// discount calculations
const pricePerKm = 0.21
const ticketPrice = pricePerKm * km
const ticketPriceUnder18 = ticketPrice * (1 - discountUnder18)
const ticketPriceOver65 = ticketPrice * (1 - discountOver65)

// if there are incorrect numbers (strings) it doesn't show the alert with the price
if (isNaN(km) || isNaN(age)) {
    alert('Inserisci un numero valido')
} else {
    if (age < 18) {
        alert(`Il tuo biglietto costa ${ticketPriceUnder18.toFixed(2)}€\nSconti applicati: ${discountUnder18 * 100}%`)
    } else if (age >= 65) {
        alert(`Il tuo biglietto costa ${ticketPriceOver65.toFixed(2)}€\nSconti applicati: ${discountOver65 * 100}%`)
    } else {
        alert(`Il tuo biglietto costa ${ticketPrice.toFixed(2)}€`)
    }
}