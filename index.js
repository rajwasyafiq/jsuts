let jamMasuk = parseInt(prompt("Masukkan jam masuk (1-12):"));
let jamKeluar = parseInt(prompt("Masukkan jam pulang (1-12):"));


let lamaBekerja = jamKeluar - jamMasuk;
if (lamaBekerja < 0) {
  lamaBekerja = lamaBekerja + 12;
}

console.log("Lama bekerja " + lamaBekerja + " jam");
