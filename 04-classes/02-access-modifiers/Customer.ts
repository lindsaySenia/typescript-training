class Customer {
    //properties - public by default
    private _firstName: string;
    private _lastName: string;

    //constructors - use constructor keyword - must use "this"
    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    //get/set accessors 
    public get firstName(): string {
        return this._firstName;
    }

    //no return type (not even void)
    public set firstName(value: string) {
        this._firstName = value;
    }

    //generated by IDE
    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }


}

//with constructor
let myCustomer = new Customer('Martin', 'Lawrence');

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

//Accessors are only available when targeting ECMAScript 5 and higher.
// use tsc --target ES5