// Object Literal

// let mahasiswa = {
//     nama: 'Timothy',
//     nim: '12345',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// Function Declaration

// const methodMahasiswa = {
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },

//     main: function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat main!`);
//     },
//     tidur: function(jam){
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// }

// function Mahasiswa(nama, energi){
//     let mahasiswa = Object.create(methodMahasiswa); // inheritance
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }


// let timothy = Mahasiswa('Timothy', 10);

// Constructor Function

// function version
// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;
    
// }

// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
// }

// Mahasiswa.prototype.main = function(jam){
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat main!`);
// }

class Mahasiswa {
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }
    
    main(jam){
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat main!`);
    }
}

let timothy2 = new Mahasiswa('Timothy', 10);