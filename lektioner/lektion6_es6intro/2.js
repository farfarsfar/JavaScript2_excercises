// Uppgift 1
var squareRoot = function(x){
return x*x;
}

const squareRoot6 = (x) => x*x

//Uppgift 2
function multiply(x,y){
return x*y;
}

const multiply6 = (x,y) => x*y;

//Uppgift 3
var numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21];
var multiplyArray = numbers.map(function(number){
return number * 2;
})

const multiplyArray6 = numbers.map( x => x * 2 )

//Uppgift 4
var oddNumbers = numbers.filter(function(number){
return number % 2;
})

const oddNumbers6 = numbers.filter( x => x % 2 );

//Uppgift 5
var totalNumbers = numbers.reduce(function(total, number){
return total + number;
})

const totalNumbers6 = numbers.reduce( (total, number) => total + number )

//Uppgift 6
//Skriv en funktion med filter som tar bort dubbletter i en array.

const removeDouble1 = (array) => {
    return array.filter((elem, pos, arr) => {
        return array.indexOf(elem) == pos;
    });
}
const removeDouble2 = (arr) => {
    let mySet = new Set(arr);
    return [...mySet]
}



