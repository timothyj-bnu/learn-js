"use strict"; // buat bikin jadi strict

// global scope / window scope
var a = 1; // window.a

var b = 3;

function test(){
    var b = 2;

    var a = 3;

    console.log(a);
    console.log(window.a);
}

function test2(){
    b = 3
}

function test3(){
    c = 10; // kalau strict, buat local, kalau tidak strict, buat global
}

function test4(c){
    console.log(c); // akan buat local

    if(c){
        var d = 10;
    }

    console.log(d); // function scope, tidak ada block scope
}

test();
test2();
console.log(b); // undefined