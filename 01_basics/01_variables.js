const accountID = 144553 // used to declare constant
let accountEmail = "jai@google.com"
var accountPassword = "12345" 
accountCity = "Mumbai" 

let accountState;

// accountID = 2 // not allowed

accountEmail = "jp@jp.com"
accountPassword = "2121112"
accountCity = "Thane"

console.log(accountID);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountID, accountEmail,accountPassword,accountCity,accountState])


