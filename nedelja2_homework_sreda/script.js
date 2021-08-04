
// 1. -- Zadatak --

let puz = 3;
let drvo = 100;
let dan = 1;

while (puz <= drvo + 1) {
    if (puz % 3 == 0 && drvo++) {
        console.log(`${dan++}. dan: Puz je presao ${puz} cm, visina drveta je ${drvo - 1} cm. `);
    }
    puz++
    drvo++
    drvo--
}

console.log("Puz se popeo na drvo za 50 dana.");





// -- 2. Zadatak --


let iznos = '10000';
let popust = '';

// zaposleni
if (iznos > 5000) {
    popust = (5 / 100) * iznos;
    console.log(`Zaposleni ostvaruju popust radnim danima od 5% sto iznosi ${popust} dinara.`);
} else {
    console.log('error');
}


//studenti 
if (iznos > 3000) {
    popust = (20 / 100) * iznos;
    console.log(`Studenti ostvaruju popust radnim danima od 20% sto iznosi ${popust} dinara.`);
} else {
    console.log("Studenti ne ostvaruju popust");
}


// penzioneri 
if (iznos > 2000) {
    popust = (30 / 100) * iznos;
    console.log(`Penzioneri ostvaruju popust radnim danima od 30% sto iznosi ${popust} dinara.`);
} else {
    console.log("Penzioneri ne ostvaruju popust");
}



// firme 
if (iznos >= 10000) {
    popust = (10 / 100) * iznos;
    console.log(`Firme ostvaruju popust radnim danima od 10% sto iznosi ${popust} dinara.`);
} else {
    console.log("Firme ne ostvaruju popust");
}


//ostali 
console.log("Svi ostali ne ostvaruju nikakav popust.");




// Ukupan popust za zaposlene ako je vikend akcija subotom

let zaposleni = (5 / 100) * iznos;
let zaposleniVpopust = (5 / 100) * zaposleni;

// Ukupan popust za studente ako je vikend akcija subotom

let studenti = (20 / 100) * iznos;
let studentiVpopust = (5 / 100) * studenti;

// Ukupan popust za penzionere ako je vikend akcija subotom

let penzioneri = (30 / 100) * iznos;
let penzioneriVpopust = (5 / 100) * penzioneri;

// Ukupan popust za firme jer je vikend akcija subotom

let firme = (10 / 100) * iznos;
let firmeVpopust = (5 / 100) * firme;

// Popust vikendom od 5% za ostale

let ostali = (5 / 100) * iznos;



let vikendPopust = 6;
switch (vikendPopust) {
    case 1: case 2: case 3: case 4: case 5: case 7:
        console.log("Nema dodatnog popusta od 5% radnim danima i nedeljom.")
        break;
    case 6:
        console.log("Dodatni popust za sve od 5% jer je vikend akcija subotom.");
        console.log(`Ukupan popust za zaposlene je ${zaposleniVpopust + zaposleni} dinara.`);
        console.log(`Ukupan popust za studente je ${studentiVpopust + studenti} dinara.`);
        console.log(`Ukupan popust za penzionere je ${penzioneriVpopust + penzioneri} dinara.`);
        console.log(`Ukupan popust za firme je ${firmeVpopust + firme} dinara.`);
        console.log(`Ukupan popust za ostale je ${ostali} dinara.`);
        break;
    default:
        console.log("Error");
        break;
}