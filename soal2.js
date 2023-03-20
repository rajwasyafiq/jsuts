// Meminta input jam masuk dan jam pulang dari user
let jamMasuk = parseInt(prompt("Masukkan jam masuk (1-12):"));
let jamKeluar = parseInt(prompt("Masukkan jam pulang (1-12):"));

// Menghitung lama bekerja
let lamaBekerja = jamKeluar - jamMasuk;
if (lamaBekerja < 0) {
  lamaBekerja = lamaBekerja + 12;
}

// Menampilkan hasil
console.log("Lama bekerja " + lamaBekerja + " jam");
