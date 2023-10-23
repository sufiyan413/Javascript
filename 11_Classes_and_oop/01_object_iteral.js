// Object literal is way to define and create objects with properies and methods


const user = {
    username: 'sufiyan',
    loginCount: 8,
    signedIn: true,

    //method 
    getUserDetails: function() {
        // console.log("Got User Details");
        // console.log(`Username: ${this.username}`);
        console.log(this); // current context   
    }
}

console.log(user.username);
console.log(user.getUserDetails());