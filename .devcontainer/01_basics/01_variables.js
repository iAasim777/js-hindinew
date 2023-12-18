const accountId = 102085317
let accountEmail = "aasim123@yahaa.com"
var accountPassword = "12345"
 accountCity = "kolkata"
let accountState;
// accountId = 2 // not allowed

console.log(accountId);

accountEmail = "haha@haha.vom"
accountPassword = "333333"
accountCity = "doha"

/*
prefer not to use var because of issue in block scope and functional scope.
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])