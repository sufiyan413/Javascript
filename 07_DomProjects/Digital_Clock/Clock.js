const clock = document.getElementById('clock')
// console.log(clock);

// let date = new Date()

// { to run continous time in console

// setInterval:- controls the event

//         parameters
//      function , time(for 1 second = 1000)}
setInterval(function () {
    let date = new Date()

    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();

    clock.style.color = "black"

}, 1000)
