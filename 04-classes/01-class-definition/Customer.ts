class Customer {
    //properties - public by default
    firstName: string;
    lastName: string;

    //constructors - use constructor keyword - must use "this"
    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }

    //getter/setter methods
    
}
//now use it
/* create an instance without constructor
let myCustomer = new Customer();

myCustomer.firstName = 'Martin';
myCustomer.lastName = 'Lawrence';
*/

//with constructor
let myCustomer = new Customer('Martin', 'Lawrence');

myCustomer.firstName = 'Susan';
myCustomer.lastName = 'Public';

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);