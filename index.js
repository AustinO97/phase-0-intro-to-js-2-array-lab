// Write your solution here!
const cats = [
    "Milo", "Otis", "Garfield"
]

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

const kittens = ["Milo", "Otis", "Garfield"]


function appendCat(name) {
    var newArray = kittens.slice(name);
    newArray.push(name)
    return newArray
}

function prependCat(name) {
    var newArray = kittens.slice(name);
    newArray.unshift(name)
    return newArray
}

function removeLastCat(name) {
    var newArray = kittens.slice(name);
    newArray.pop(name)
    return newArray
}
function removeFirstCat(name) {
    var newArray = kittens.slice(name);
    newArray.shift(name)
    return newArray
}