var numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43];

var strings = ["hej", "och", "hå", "på", "böljan", "den", "azurblå"];

var objects = [
                { 
                    vehicle: "car",
                    color: "red",
                    weight: 800
                },
                { 
                    vehicle: "bike",
                    color: "blue",
                    weight: 10
                },
                { 
                    vehicle: "plane",
                    color: "white",
                    weight: 8000
                }
              ];

const foreach = (arr) => arr.forEach( item => console.log(item) )

const forin = (arr) => { for (var index in arr) { console.log(arr[index]) } }

const forof = (arr) => { for (var value of arr) { console.log(value) } }

forof(strings)