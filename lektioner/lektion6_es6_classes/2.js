class Person {

    constructor(name, age, occupation){
        this._name = name
        this.age = age
        this.occupation = occupation
    }

    static shoutName() {
        console.log(`JAG HETER INGENTING HAR JAG SAGT`)
    }

    get name() {
        return this._name.toUpperCase()
    }

    set name(newName) {
        this._name = newName
    }
    printPerson () {
        console.log(`Hej! Jag heter ${this.name} och är ${this.age} år gammal.`)
    }
}

class Student extends Person {
    constructor(name, age, gender, debt) {
        super(name, age)
        this.gender = gender
        this.debt = debt
    }
    printPerson () {
        super.printPerson()
        console.log(`Hej! Jag heter ${this.name} och är ${this.age} år gammal. Mitt kön: ${this.gender}. Min studieskuld: ${this.debt}`)
    }
}
var person = new Person('Steffe', 24);
var student = new Student('Maggan', 34, "kvinna", 300000)

student.printPerson();

person.name = "Olle"
console.log(person.name)

student.name = "Lisa"
console.log(student.name)
