"use strict";
class Customer {
    //Parameter Properties shortcut
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    //don't need internal assignment since we're using Parameter Properties
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let myCustomer = new Customer('Martin', 'Lawrence');
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
