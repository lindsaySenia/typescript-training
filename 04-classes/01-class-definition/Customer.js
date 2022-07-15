var Customer = /** @class */ (function () {
    //constructors - use constructor keyword - must use "this"
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//now use it
/* create an instance without constructor
let myCustomer = new Customer();

myCustomer.firstName = 'Martin';
myCustomer.lastName = 'Lawrence';
*/
//with constructor
var myCustomer = new Customer('Martin', 'Lawrence');
myCustomer.firstName = 'Susan';
myCustomer.lastName = 'Public';
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
