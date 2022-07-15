class Customer {
  
    //Parameter Properties shortcut
    constructor(private _firstName: string, private _lastName: string) {
    }
    //don't need internal assignment since we're using Parameter Properties
  
    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }
   
    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }
}

let myCustomer = new Customer('Martin', 'Lawrence');

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
