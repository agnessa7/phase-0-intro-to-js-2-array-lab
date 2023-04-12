// const cats = ["Milo", "Otis", "Garfield"];
// function destructivelyAppendCat(name){
//     cats.push("Ralph");
    
// }
// function destructivelyPrependCat(name){
//     cats.unshift("Bob");
// }
// function destructivelyRemoveLastCat(name){
//     cats.pop("Ralph");
// }
// function destructivelyRemoveFirstCat(name){
//     cats.shift("Bob");
// }
// function appendCat(name){
//    return [...cats, "Broom"];
// }
// function prependCat(name){
//     return ["Arnold", ...cats];
// }
// function removeLastCat(){
//     return cats.slice(0, cats.length-1);
//    // return cats.slice(0,2)
// }
// function removeFirstCat(){
//     return cats.slice(1);

// }
const cats = ["Milo", "Otis", "Garfield"]

let destructivelyAppendCat = (name) => cats.push(name);

let destructivelyPrependCat = (name) => cats.unshift(name);

let destructivelyRemoveLastCat = name => cats.pop(name);

let destructivelyRemoveFirstCat = name => cats.shift(name);

let appendCat = name => [...cats, name];

let prependCat = name => [name, ...cats];

let removeLastCat = () => cats.slice(0, cats.length - 1);

let removeFirstCat = () => cats.slice(1);