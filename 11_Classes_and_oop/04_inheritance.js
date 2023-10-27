class User {                   // baseClass
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {                  //subClass
    constructor(username, email, password) {
        super(username)  // Call the constructor of the superclass
        this.email = email,
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const userOne = new Teacher("Sufiyan","sss@gmail.com","123456")

userOne.addCourse()


const userTwo = new User("Aazam")

userTwo.logMe()