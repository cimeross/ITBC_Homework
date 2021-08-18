

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
        napad: 130,
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

//nadovezivanje na 3 zadatak sa predhodnog domaceg
//1. Napraviti html strukturu da se na pocetku vide 2 button-a. Kada se klikne na oba (naravno ponaosob), 
//trebaju se izlistati svi pokemoni iz niza u svom dugmetu. Na klik jednog dugmeta, trebaju se izlistati
//sve informacije o tom pokemonu.


let btn_pokemon = document.querySelector('#btn_p')

btn_pokemon.addEventListener('click', () => {
    for (let i = 0; i < nizPokemoni.length; i++) {
        document.getElementById('more').innerHTML += '<button class="dugme">' + nizPokemoni[i].Ime + '</button>';
        console.log(nizPokemoni[i].Ime + ' ');
        document.querySelector('.dugme').addEventListener('click', () => {
            document.write(JSON.stringify(nizPokemoni[i]));
        });
    }
});












