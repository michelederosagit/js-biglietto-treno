// Chiedo KM
var km = parseInt(prompt("Scrivi qui il numero dei km!"));
console.log(km);

// Chiedo l'età
var eta = parseInt(prompt("Scrivi qui la tu età!"));
console.log(eta);

// Calcolo Totale Viaggio
var prezzo = 0.21;
var totale = prezzo * km;
console.log(totale);

// Calcolo Sconti
sconto20 = (totale * 20) / 100;
sconto40 = (totale * 40) / 100;


// Calcolo Sconti
if (eta < 18){
  totale = totale - sconto20;
  document.getElementById('biglietto').innerHTML = "€" + (Math.round(totale));
} else if (eta > 64){
  totale = totale - sconto40;
  document.getElementById('biglietto').innerHTML = "€" + (Math.round(totale));
}
else {
  document.getElementById('biglietto').innerHTML = "€" + (Math.round(totale));
}
