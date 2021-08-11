// 1.  Napisati funkciju koja vrsi sumiranje i mnozenje jednog niza i vratiti te vrednosti u niz


let arr = [1, 2, 3, 4];
function mnozenje(arr) {
    let sum = 1;
    for (let i = 0; i < arr.length; i++) {
        sum = sum * arr[i];
    }
    return sum
}

const array = [1, 2, 3, 4];
function sabiranje(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum
}
console.log(sabiranje(array));
console.log(mnozenje(arr));


// 2. Napisati funkciju koja iz datog niza izbacuje null, undefined, NaN, 0, "" itd...


let niz = [0, 1, 2, 3, undefined, NaN, "string", "", 4, 5, 6, 9, 8, 7];

function remove(niz) {
    return niz.filter(x => x)
}
console.log(remove(niz));



/* 
  3. За првих 100 бројева исписати:
        ако је дељив са 3  Fizz, са 5  Buzz, и са оба  FizzBuzz, у супротном Broj
        Ако је дељив са 3,5,7 - FizzBuzzZazz
        3,5 - FizzBuzz
        3,7 - FizzZazz
        5,7 - BuzzZazz 
*/


for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
        console.log("FizzBuzzZazz");
    }
    else if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0 && i % 7 == 0) {
        console.log("FizzZazz");
    }
    else if (i % 5 == 0 && i % 7 == 0) {
        console.log("BuzzZazz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


