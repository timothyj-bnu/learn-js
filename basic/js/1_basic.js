var x = 10;

console.log(x);

var test = "Hello World!" + x;

console.log(test);

var isLoop = true;

while (isLoop) {

    var nama = prompt("Masukkan nama anda: ");
    alert("Hello " + nama);

    isLoop = confirm('again?');
}