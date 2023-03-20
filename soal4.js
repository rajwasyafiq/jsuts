// Meminta input golongan dan jam kerja dari pengguna
var golongan = prompt("Masukkan golongan karyawan (1-4):");
var jamKerja = prompt("Masukkan jumlah jam kerja:");

// Menghitung gaji biasa
var upahPerJam;
if (golongan == 1) {
  upahPerJam = 3000;
} else if (golongan == 2) {
  upahPerJam = 3500;
} else if (golongan == 3) {
  upahPerJam = 4000;
} else if (golongan == 4) {
  upahPerJam = 4500;
} else {
  console.log("Golongan yang dimasukkan tidak valid.");
}

var gajiBiasa;
if (jamKerja <= 40) {
  gajiBiasa = jamKerja * upahPerJam;
} else {
  gajiBiasa = 40 * upahPerJam;
}

// Menghitung gaji lembur
var gajiLembur = 0;
if (jamKerja > 40) {
  var jamLembur = jamKerja - 40;
  gajiLembur = jamLembur * upahPerJam * 1.5;
}

// Menghitung total gaji
var totalGaji = gajiBiasa + gajiLembur;

// Menampilkan hasil perhitungan
console.log("Golongan: " + golongan);
console.log("Jam kerja: " + jamKerja);
console.log("Gaji biasa: " + gajiBiasa);
console.log("Gaji lembur: " + gajiLembur);
console.log("Total gaji: " + totalGaji);
