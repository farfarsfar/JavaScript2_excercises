'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person(name, age, occupation) {
        _classCallCheck(this, Person);

        this._name = name;
        this.age = age;
        this.occupation = occupation;
    }

    _createClass(Person, [{
        key: 'printPerson',
        value: function printPerson() {
            console.log('Hej! Jag heter ' + this.name + ' och är ' + this.age + ' år gammal.');
        }
    }, {
        key: 'name',
        get: function get() {
            return this._name.toUpperCase();
        },
        set: function set(newName) {
            this._name = newName;
        }
    }], [{
        key: 'shoutName',
        value: function shoutName() {
            console.log('JAG HETER INGENTING HAR JAG SAGT');
        }
    }]);

    return Person;
}();

var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age, gender, debt) {
        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

        _this.gender = gender;
        _this.debt = debt;
        return _this;
    }

    _createClass(Student, [{
        key: 'printPerson',
        value: function printPerson() {
            _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'printPerson', this).call(this);
            console.log('Hej! Jag heter ' + this.name + ' och är ' + this.age + ' år gammal. Mitt kön: ' + this.gender + '. Min studieskuld: ' + this.debt);
        }
    }]);

    return Student;
}(Person);

var person = new Person('Steffe', 24);
var student = new Student('Maggan', 34, "kvinna", 300000);

student.printPerson();

person.name = "Olle";
console.log(person.name);

student.name = "Lisa";
console.log(student.name);