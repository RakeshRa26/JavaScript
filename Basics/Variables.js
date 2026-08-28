const accountId = 1223
let accountEmail = "rakeshrawal@gmail.com"
var accountPassword = "12345"
accountCity = "Ghodaghodi"
let accountState;

// accountId = 2    // not allowed
accountEmail = "hc@gmail.com"
accountPassword ="222222"
accountCity = "Kathmandu"


console.log(accountId);

/* 
Prefer not used to Var
because of issue in block  scope and functional scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

