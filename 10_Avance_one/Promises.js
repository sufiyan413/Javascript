// creating promises

const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography,network
    setTimeout(function () {
        console.log('Async Task Is Complete');
        resolve()
    }, 1000)
})

// consumptions

promiseOne.then(function () {
    console.log("promise consumed");
})

//******************************************************************

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("async task 2");
        resolve()
    }, 1000)

}).then(function () {
    console.log("async 2 resolved");
})

//******************************************************************


const promiseThree = new Promise(function (resolve, reject) {

    setTimeout(function () {

        resolve({ username: "shaikh", email: "sss@gmail.com" })

    }, 1000)
})

promiseThree
    .then(function (user) {

        console.log(user);

    })

//******************************************************************

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {

        let error = true

        if (!error) {
            resolve({ username: "sufi", password: "123" })
        } else {
            reject('ERROR: something went wrong')
        }

    }, 2000)
})

promiseFour.then((user) => {
    // console.log(user);
    return user.username
})
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => {
        console.log("The promise is either resolved or reject");
    })


//******************************************************************


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {

        let error = true

        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR: Js went wrong')
        }

    }, 2000)
})

async function consumePromiseFive() {

    try {
        const response = await promiseFive
        console.log(response);

    } catch (error) {
        console.log(error);
    }

}

consumePromiseFive()


//******************************************************************


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users') // time lagega

//         const data = await response.json()
//         console.log(data);

//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

// using .then()

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })  