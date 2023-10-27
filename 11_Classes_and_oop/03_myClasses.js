//classes are like blueprint or templates for creating objects.it defines properties and methods

class user {
    constructor(username,email,password){
        this.username = username,
        this.email = email,
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const userOne = new user("Sufi","sss@gmail.com","123")

console.log(userOne.encryptPassword());
console.log(userOne.changeUsername());

//***************************************************** 

   class person {
    constructor(firstName,lastName,age){

        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age

    }

    fullName(){
        return `Full Name Is ${this.firstName} ${this.lastName}`
    }
   }

   const personOne = new person("sufiyan","shaikh","27")

   console.log(personOne.fullName());