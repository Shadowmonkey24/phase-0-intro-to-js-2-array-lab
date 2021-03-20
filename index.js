// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){

cats.push("Ralph");
}

function destructivelyPrependCat (name){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat (){
    cats.pop();
}

function  destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name){
const appendCat = [...cats, "Broom"];
    return appendCat;
}

function prependCat(name) {
    const newCats = cats.slice();
    newCats.unshift(name)
    return newCats;
}

function removeLastCat() {
    const lastElement = cats.length - 1; //index of last element
    const newCats = cats.slice(0, lastElement)
    return newCats
}

function removeFirstCat() {
    const catsLength = cats.length;
    const newCats = cats.slice(1, catsLength)
    return newCats;
}