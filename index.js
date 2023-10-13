// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = "jane"

function upperCaseCustomerName() {
    (customerName === 'bob') ? customerName = customerName.toUpperCase() : "ERROR" ;
}

function setBestCustomer() {
    bestCustomer = "not bob"
    return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
    return bestCustomer;
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "james"    
}