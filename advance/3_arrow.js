// Function Expression

// const displayName = function (name){
//     return `Halo, ${name}`;
// }

// console.log(displayName("uding"));

const displayName = nama => `Halo, ${nama}`;

const displayNameTime = (nama, waktu) => `Halo selamat ${waktu}, ${nama}`;

const display = () => `Hello world`;

console.dir(displayNameTime);

// Example usage of arrow function

let mahasiswa = ['Sandhika Galih', 'Test', 'Erik'];

let jumlahHuruf = mahasiswa.map(function(nama){
    return nama.length;
});

let jumlahHuruf2 = mahasiswa.map(nama => nama.length);

console.log(jumlahHuruf2);

let jumlahHurufObject = mahasiswa.map(nama => ({ nama: nama, jumlahHuruf: nama.length }));

console.dir(jumlahHurufObject);

// arrow function tidak memiliki konsep this, sehingga akan mencari ke lexical scopenya
// 