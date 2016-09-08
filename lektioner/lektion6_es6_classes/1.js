class Person {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return 'I can speak';
    }
}

class Employee extends Person {
    constructor(name, title) {
        super(name); // tar koden från Person:s constructor
        this.title = title;
    }
}

//static functions & properties

class Person2 {
    static sayHey() {
        return 'Hey!';
    }
}

Person2.sayHey();