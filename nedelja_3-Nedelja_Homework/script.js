//1. Napisati funkciju koja ispisuje sve elemente datog niza koji su deljivi sa 5

let niz = [2, 3, 10, 25, 30, 45, 51, 68, 100];

function divideby5(niz) {
    let tmp = []
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 5 == 0) {
            tmp.push(niz[i])
        }

    } return tmp
} console.log(divideby5(niz));


//2. Napraviti objekat pokemon koji sadrži sledeće informacije: (Napravite makar 4 različita pokemona)
// * Ime 
// * Vrsta 
// * Sposobnosti (niz sposobnosti pokemona) 
// * Karakteristike (objekat sa informacijama : napad (broj), odbrana (broj), brzina (broj))

//(Napraviti niz od ovih objekata)

let pokemon1 = {
    Ime: 'Heracross',
    Vrsta: 'Buba',
    Sposobnosti: ['Swarm', 'Guts', 'Moxie'],
    Karakteristike: {
        napad: 125,
        odbrana: 75,
        brzina: 85
    }
}

let pokemon2 = {
    Ime: 'Tyranitar',
    Vrsta: 'Mracni',
    Sposobnosti: [' Sand Stream', 'Unnerve'],
    Karakteristike: {
        napad: 134,
        odbrana: 110,
        brzina: 61
    }
}

let pokemon3 = {
    Ime: 'Dragonite',
    Vrsta: 'Zmaj',
    Sposobnosti: ['Inner Focus', 'Multiscale '],
    Karakteristike: {
        napad: 134,
        odbrana: 95,
        brzina: 80
    }
}

let pokemon4 = {
    Ime: 'Raichu',
    Vrsta: 'Elektricni',
    Sposobnosti: [' Static', 'Lightning Rod'],
    Karakteristike: {
        napad: 90,
        odbrana: 55,
        brzina: 110
    }
}

let nizPokemoni = [pokemon1, pokemon2, pokemon3, pokemon4];

console.log(nizPokemoni);



//3. Napraviti funkciju koja prima niz gore napravljenih objekata i vraća jedan niz sposobnosti svih pokemona

nizPokemoni.forEach(el => console.log(el.Sposobnosti));



//4. Sortirati pokemone po brzini, rastuće.

  nizPokemoni.forEach(el => console.log(el.Karakteristike.brzina));
 
 

//5. Napraviti funkciju koja prima niz pokemona, poredi pokemone po jačini i vraća kao pobednika onog koji ima najveću jačinu napada.
