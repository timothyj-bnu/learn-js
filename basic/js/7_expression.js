function test(){ // hoisting
    console.log('test');
}

var test = function () { 
    console.log("test a");
}

test();