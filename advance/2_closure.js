// JS punya 2 fase pada execution context
// 1. Creation Phase
// 2. Execution Phase

// Ada 2 konsep penting
// 1. Hoisting
// 2. Function scope (Terdapat local execution context )

// Javascript visualizer

// Lexical Scope + Closure

// function init(){
//     // let nama = "Tim";

//     return function (nama){
//         console.log(nama);
//     }

//     console.dir(tampilNama);
// }
// let panggilNama = init();
// panggilNama("Test");

// Function factory

// function greeting(time){
//     return function(name){
//         console.log(`Halo ${name}, selamat ${time}`);
//     }
// }

// selamatPagi = greeting("pagi");
// selamatSiang = greeting("siang");
// selamatMalam = greeting("malam");

// console.dir(selamatPagi);

// Private Function

// let counter = 0;

// let add = function(){
//     let counter = 0;
//     return function(){
//         return counter++;
//     }
// }

// let addRun = add();

// console.log(addRun());

// counter = 10;

// console.log(addRun());
// console.log(addRun());

// console.dir(addRun);

// Private Function IIFE

let add = (function(){
    let counter = 0;
    return function(){
        return counter++;
    }
})();

console.log(add());
console.log(add());
console.log(add());