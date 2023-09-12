  const accountId = 413501    //vlaueS change nhi hogi aur isko re-assign nhi kar sakte..block level scope hota hai

  let accountEmail = "sufiyan@gmail.com" // value ko re-assign kar sakte hain..lekin same scope me me redeclared nhi kar sakte..let variable ka block level scope hota hai

  var accountPassword = "12345"  // redecalre aue reassign kar sakte hain...functional or global scope hota hai..

  let accountState;


// checking re-assign

// accountId = 2  // cannot be re-declared  
accountEmail = "shaikh@gmail.com"
accountPassword = "212121"

console.table([accountId,accountEmail,accountPassword,accountState])

