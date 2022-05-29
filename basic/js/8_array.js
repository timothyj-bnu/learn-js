var array1 = ["test", true, 244];

console.log(array1);

console.log(array1.length);

console.log(array1.join("-"));


array1.push('test2', 'test3');
console.log(array1.join("-"));

array1.pop();
console.log(array1.join("-"));

array1.unshift('test');
console.log(array1.join("-"));

array1.shift();
console.log(array1.join("-"));

var array2 = ['A', 'B', 'C', 'D'];

array2.splice(1, 2, 'X', 'Y');
console.log(array2.join("-"));

var array3 = ['A', 'B', 'C', 'D'];
var array4 = array3.slice(1, 3);
console.log(array4.join("-"));

array3.forEach(function (item, index) {
    console.log(item, index);
});

var array5 = array3.map(function (item, index) {
    return item + index;
});

console.log(array5);

var array6 = [1, 3, 5, 6, 7, 2, 4, 8, 9];
array6.sort(function (a, b) {
    return a - b;
});
console.log(array6);

var angka7 = [1, 3, 5, 6, 7, 2, 4, 8, 9];
var angka8 = angka7.filter(function (item) {
    return item > 5;
});
console.log(angka8);

var angka9 = angka7.find(function (item) {
    return item > 5;
});
console.log(angka9);