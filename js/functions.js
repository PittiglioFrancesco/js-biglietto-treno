// esercizio
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto
// è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.



// dichiarazione

var km = prompt('Inserisci il numero di chilometri che vuole percorrere');
console.log(km)

var age = prompt('Inserisci la tua età');
console.log(age)

var pSconto;

// operazioni

var costo = km * 0.21;

if (age < 18) {

    pSconto = Math.round(costo * 0.8);
    document.getElementById("risultato").innerHTML = "Il prezzo del biglietto è di " + costo + "€, ma dato che lei è un under 18 ha diritto ad uno sconto del 20% che le farà pagare il biglietto solo " + pSconto + "€."

} else if (age > 65) {

    pSconto = Math.round(costo * 0.6);
    document.getElementById("risultato").innerHTML = "Il prezzo del biglietto è di " + costo + "€, ma dato che lei è un over 65 ha diritto ad uno sconto del 40% che le farà pagare il biglietto solo " + pSconto + "€."


} else {

    document.getElementById("risultato").innerHTML = "Il prezzo del biglietto è di " + costo + "€.";

}