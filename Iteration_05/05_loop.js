// for in loop

const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// js shortcut is for javascript
// cpp shortcut is for c++
// rb shortcut is for ruby
// swift shortcut is for swift by apple