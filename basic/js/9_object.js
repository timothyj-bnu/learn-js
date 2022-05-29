var mahasiswa = {
    nama: "Tim",
    umur: 20,
    lulus: true,
    IPSemester: [3.5, 3.6, 3.7, 3.8],
    IPKumulatif: function () {
        var total = 0;
        for (var i = 0; i < this.IPSemester.length; i++) {
            total += this.IPSemester[i];
        }
        return total / this.IPSemester.length;
    },
    alamat: {
        jalan: "Jl. Raya",
        kecamatan: "Kec. Kedungkandang",
        kabupaten: "Kab. Bandung",
        provinsi: "Jawa Barat",
        kodepos: "40291"
    }
}

function createMahasiswa(nama, email, jurusan){
    return {
        nama: nama,
        email: email,
        jurusan: jurusan
    }
}

function createMahasiswa2(nama, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}


// ES6
class Mahasiswa {
    constructor(nama, email, jurusan) {
        this.nama = nama;
        this.email = email;
        this.jurusan = jurusan;
    }

    getNama() {
        return this.nama;
    }
}

// Old
// function Mahasiswa(nama, email, jurusan){
//     this.nama = nama;
//     this.email = email;
//     this.jurusan = jurusan;

//     this.getNama = function(){
//         return this.nama;
//     }
// }

var testMhs = new Mahasiswa("Tim", "aa", "aa");

console.log(testMhs);
console.log(testMhs.getNama());