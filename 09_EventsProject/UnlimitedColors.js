//generate random color

const randomColor = function () {
    const hex = "0123456789ABCDEF"   //hex color has 16 values (0-9 and A-F)
    let color = '#'                  // hex color code is written as hash symbol (#) 

    for (let i = 0; i < 6; i++) {    // six characters are composed of numbers (0-9) and letters (A-F) 
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

// console.log(randomColor());

let intervalId;

const startChangingColor = function () {

    if (!intervalId) {
        intervalId = setInterval(changeBackgroundColor, 1000)

    }

    function changeBackgroundColor() {
        document.body.style.backgroundColor = randomColor();
    }


}
const stopChangingColor = function () {

    clearInterval(intervalId)
    intervalId = null;

}

document.querySelector('#startButton').addEventListener('click', startChangingColor)
document.querySelector('#stopButton').addEventListener('click', stopChangingColor)