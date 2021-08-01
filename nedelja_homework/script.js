let string1 = "neki prvi string"
let string2 = "neki drugi string koji je i duzi string"
let string3 = "neki treci string koji je dugacak"
let string4 = "neki cetvrti"

//1. Zadatak --- Proveriti koji je string najduzi i ispisati samo njega

//  1. Primer
let najduzi

if (string1.length < string2.length) {
    najduzi = string2
    console.log(najduzi);
} else if (string1.length < string3.length) {
    najduzi = string3
    console.log(najduzi);
} else {
    najduzi = string4
    console.log(najduzi);
}

//  2. Primer
// let niz = [string1, string2, string3, string4];
// let najduzi = niz.reduce(function (a, b) {
//     return a.length > b.length ? a : b;
// });
// console.log(najduzi);




//2. Zadatak --- Ispisati najkraci string koji sadrzi rec "string"

let najkraci
if (string1.includes("string") && string1.length < string2.length) {
    najkraci = string1
    console.log(najkraci);
} else if (string4.includes("string") || string4.length > string1.length) {
    najkraci = string4
    console.log(najkraci);
}
else {
    console.log("Error");
}

//3.  Zadatak --- Sastaviti sve stringove bez prve reci "neki" osim ako string sadrzi deo recenice "string koji je", takve stringove izostaviti

// -----------



//4. Zadatak --- Na osnovu kolicine i cene artikla ispisati ukupnu cenu
//Kolicina je zadata u gramima
//cena je zadata po kilogramu


let kolicina = 3000;
let cenaArtikla = 100;

kolicina = (3000 / 1000);

let ukupnaCena = kolicina * cenaArtikla;
console.log(ukupnaCena);



//5. Zadatak --- Dopuniti 4. zadatak sa casa kolicinom novca, i ispisati racun(ako nema dovoljno novca ispisati poruku)

let kolicinaNovca = 400;

if (kolicinaNovca > ukupnaCena) {
    console.log(`Racun iznosi ${ukupnaCena}.`);
}
else if (kolicinaNovca == ukupnaCena) {
    console.log("Imate tacan iznos novca");
}
else {
    console.log("Nemate dovoljno novca");
}
