/*Template Strings
Skriv vidare på den här koden så att den använder ‘Template literals’ och så att den skriver ut
varje namn, ålder och kön på personerna i arrayen i en mening liknande: “Hej mitt namn är Kjell,
jag är 43 år gammal och jobbar som arbetslös.”

2
Använd sedan samma metod (Template literals) för att skriva ut vad deras sammanlagda ålder är.
*/

var persons = [
{name: 'Kjell', age: 43, occupation: 'arbetslös'},
{name: 'Birgitta', age: 60, occupation: 'rökare'},
{name: 'Peter', age: 57, occupation: 'hemlig agent'}
];

const logPeople = () => {
    var toLog = "";
    var combinedAge = persons.reduce( (a, b) => (a + b.age), 0 );

    persons.forEach( person => {
        toLog += `Hej jag heter ${person.name} och är ${person.age} år gammal. Min arbetsbeskrivning är: ${person.occupation}.\n`;
    });

    console.log(toLog)
    console.log(`Vi är tillsammans ${combinedAge} år gamla.`)
}

logPeople()

/*
Slutligen
Gå igenom er egen kod (er kod för inlämningsuppgifterna) och se över vad ni kan ES6-ifiera. Kan
ni göra er egen kod mer kompakt och snyggare med ES6-syntax?

*/